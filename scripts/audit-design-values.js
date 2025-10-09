const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');

const auditResults = {
  hardcodedColors: [],
  hardcodedSpacing: [],
  hardcodedFonts: [],
  cssVariableUsage: [],
  tokenImports: [],
  inlineStyles: []
};

// Patterns to detect
const patterns = {
  hexColors: /#[0-9A-Fa-f]{3,6}(?![0-9A-Fa-f])/g,
  rgbColors: /rgb\([^)]+\)/g,
  spacing: /\d+(?:px|rem|em|vh|vw)/g,
  cssVars: /var\(--[^)]+\)/g,
  tokenImports: /from ['"].*generated\/tokens/g,
  inlineStyles: /style=\{\{[^}]+\}\}/g
};

const auditFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(process.cwd(), filePath);
  
  // Check for hardcoded colors
  const hexMatches = content.match(patterns.hexColors);
  if (hexMatches) {
    hexMatches.forEach(match => {
      // Exclude ID selectors and URLs
      if (!match.includes('#root') && !match.includes('#app')) {
        auditResults.hardcodedColors.push({
          file: relPath,
          value: match,
          line: content.substring(0, content.indexOf(match)).split('\n').length
        });
      }
    });
  }
  
  // Check for hardcoded spacing
  if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx')) {
    const spacingMatches = content.match(patterns.spacing);
    if (spacingMatches) {
      spacingMatches.forEach(match => {
        if (content.includes(`'${match}'`) || content.includes(`"${match}"`)) {
          auditResults.hardcodedSpacing.push({
            file: relPath,
            value: match,
            context: content.substring(content.indexOf(match) - 20, content.indexOf(match) + 30)
          });
        }
      });
    }
  }
  
  // Check for CSS variable usage
  const cssVarMatches = content.match(patterns.cssVars);
  if (cssVarMatches) {
    cssVarMatches.forEach(match => {
      auditResults.cssVariableUsage.push({
        file: relPath,
        variable: match
      });
    });
  }
  
  // Check for token imports
  if (content.includes('generated/tokens')) {
    auditResults.tokenImports.push(relPath);
  }
  
  // Check for inline styles
  if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx')) {
    const inlineMatches = content.match(patterns.inlineStyles);
    if (inlineMatches) {
      auditResults.inlineStyles.push({
        file: relPath,
        count: inlineMatches.length
      });
    }
  }
};

// Run audit
console.log(chalk.blue('🔍 Starting comprehensive audit...'));

const jsxFiles = glob.sync('src/**/*.{jsx,tsx}', { ignore: 'node_modules/**' });
const cssFiles = glob.sync('src/**/*.css', { ignore: ['node_modules/**', 'src/generated/**'] });

[...jsxFiles, ...cssFiles].forEach(file => {
  auditFile(file);
});

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    hardcodedColors: auditResults.hardcodedColors.length,
    hardcodedSpacing: auditResults.hardcodedSpacing.length,
    cssVariables: auditResults.cssVariableUsage.length,
    tokenImports: auditResults.tokenImports.length,
    filesWithInlineStyles: auditResults.inlineStyles.length
  },
  details: auditResults
};

fs.writeFileSync('audit-report.json', JSON.stringify(report, null, 2));

// Print summary
console.log(chalk.green('\n✅ Audit Complete!\n'));
console.log(chalk.yellow('Summary:'));
console.log(`  • Hardcoded colors: ${report.summary.hardcodedColors}`);
console.log(`  • Hardcoded spacing: ${report.summary.hardcodedSpacing}`);
console.log(`  • CSS variables used: ${report.summary.cssVariables}`);
console.log(`  • Files using tokens: ${report.summary.tokenImports}`);
console.log(`  • Files with inline styles: ${report.summary.filesWithInlineStyles}`);
console.log(chalk.gray('\nDetailed report saved to audit-report.json'));

module.exports = report;