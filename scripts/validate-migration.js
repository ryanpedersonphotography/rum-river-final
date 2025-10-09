const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
const { updatePhase } = require('./migration-tracker');

const validationResults = {
  passed: [],
  failed: [],
  warnings: []
};

// Test 1: Ensure tokens.css is imported in main CSS
const test1 = () => {
  const cohesiveCSS = fs.readFileSync('src/CohesiveDesign.css', 'utf8');
  if (cohesiveCSS.includes('generated/tokens.css')) {
    validationResults.passed.push('✅ tokens.css imported in CohesiveDesign.css');
  } else {
    validationResults.failed.push('❌ tokens.css NOT imported in CohesiveDesign.css');
  }
};

// Test 2: No duplicate :root variables
const test2 = () => {
  const cohesiveCSS = fs.readFileSync('src/CohesiveDesign.css', 'utf8');
  if (!cohesiveCSS.match(/^:root\s*{/m)) {
    validationResults.passed.push('✅ No duplicate :root variables');
  } else {
    validationResults.failed.push('❌ Duplicate :root variables still exist');
  }
};

// Test 3: Check for remaining hardcoded colors
const test3 = () => {
  const jsxFiles = glob.sync('src/**/*.jsx', { ignore: ['node_modules/**', '**/*.backup'] });
  let hardcodedFound = false;
  
  jsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const hexMatches = content.match(/#[A-F0-9]{6}/gi);
    if (hexMatches) {
      hardcodedFound = true;
      validationResults.warnings.push(`⚠️  Hardcoded color in ${path.relative(process.cwd(), file)}`);
    }
  });
  
  if (!hardcodedFound) {
    validationResults.passed.push('✅ No hardcoded colors in JSX');
  }
};

// Test 4: Verify token imports in modified files
const test4 = () => {
  const tracker = JSON.parse(fs.readFileSync('.migration-progress.json', 'utf8'));
  const jsxFiles = tracker.filesModified.filter(f => f.endsWith('.jsx'));
  let missingImports = [];
  
  jsxFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('tokens.') && !content.includes('generated/tokens')) {
        missingImports.push(file);
      }
    }
  });
  
  if (missingImports.length === 0) {
    validationResults.passed.push('✅ All modified files have token imports');
  } else {
    validationResults.failed.push(`❌ ${missingImports.length} files missing token imports`);
  }
};

// Test 5: Build tokens to ensure they're valid
const test5 = () => {
  try {
    require('child_process').execSync('npm run tokens:build', { stdio: 'pipe' });
    validationResults.passed.push('✅ Token build successful');
  } catch (e) {
    validationResults.failed.push('❌ Token build failed');
  }
};

// Run all tests
console.log(chalk.blue('\n🔍 Running validation tests...\n'));

test1();
test2();
test3();
test4();
test5();

// Print results
console.log(chalk.green('Passed Tests:'));
validationResults.passed.forEach(msg => console.log('  ' + msg));

if (validationResults.failed.length > 0) {
  console.log(chalk.red('\nFailed Tests:'));
  validationResults.failed.forEach(msg => console.log('  ' + msg));
}

if (validationResults.warnings.length > 0) {
  console.log(chalk.yellow('\nWarnings:'));
  validationResults.warnings.forEach(msg => console.log('  ' + msg));
}

// Update tracker
const status = validationResults.failed.length === 0 ? 'completed' : 'failed';
updatePhase('validation', status, `Tests: ${validationResults.passed.length} passed, ${validationResults.failed.length} failed`);

// Save validation report
fs.writeFileSync('validation-report.json', JSON.stringify(validationResults, null, 2));

// Exit with appropriate code
process.exit(validationResults.failed.length === 0 ? 0 : 1);