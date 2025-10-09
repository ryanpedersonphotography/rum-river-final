const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { addModifiedFile } = require('./migration-tracker');

// Mapping from old to new variable names
const variableMap = {
  '--romantic-ivory': '--color-base-romantic-ivory',
  '--dusty-rose': '--color-base-dusty-rose',
  '--sage-whisper': '--color-base-sage-whisper',
  '--warm-walnut': '--color-base-warm-walnut',
  '--champagne-gold': '--color-base-champagne-gold',
  '--blush-pink': '--color-base-blush-pink',
  '--deep-forest': '--color-base-deep-forest',
  '--cream-pearl': '--color-base-cream-pearl',
  '--muted-mauve': '--color-base-muted-mauve',
  '--copper-glow': '--color-base-copper-glow',
  '--warm-cream': '--color-base-warm-cream',
  '--accent-gold': '--color-base-accent-gold',
  '--deep-brown': '--color-base-deep-brown',
  '--text-dark': '--color-base-text-dark',
  '--sage-green': '--color-base-sage-green',
  '--soft-white': '--color-base-soft-white',
  '--font-display': '--font-family-display',
  '--font-body': '--font-family-body',
  '--font-script': '--font-family-script',
  '--text-xs': '--font-size-xs',
  '--text-sm': '--font-size-sm',
  '--text-base': '--font-size-base',
  '--text-lg': '--font-size-lg',
  '--text-xl': '--font-size-xl',
  '--text-2xl': '--font-size-2xl',
  '--text-3xl': '--font-size-3xl',
  '--text-4xl': '--font-size-4xl',
  '--text-5xl': '--font-size-5xl',
  '--text-6xl': '--font-size-6xl',
  '--text-hero': '--font-size-hero',
  '--space-xs': '--spacing-xs',
  '--space-sm': '--spacing-sm',
  '--space-md': '--spacing-md',
  '--space-lg': '--spacing-lg',
  '--space-xl': '--spacing-xl',
  '--space-2xl': '--spacing-2xl',
  '--space-3xl': '--spacing-3xl',
  '--space-4xl': '--spacing-4xl',
  '--space-5xl': '--spacing-5xl',
  '--space-6xl': '--spacing-6xl',
  '--transition': '--transition-preset-default',
  '--transition-smooth': '--transition-preset-smooth',
  '--transition-elegant': '--transition-preset-elegant'
};

let totalReplacements = 0;
const modifiedFiles = [];

// Update CSS files
const cssFiles = glob.sync('src/**/*.css', { 
  ignore: ['node_modules/**', 'src/generated/**', 'src/tokens-compatibility.css'] 
});

cssFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const originalContent = content;
  
  Object.entries(variableMap).forEach(([oldVar, newVar]) => {
    const regex = new RegExp(`var\\(${oldVar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, `var(${newVar})`);
      totalReplacements += matches.length;
    }
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    addModifiedFile(file);
    modifiedFiles.push(file);
  }
});

console.log(`✅ Updated ${totalReplacements} variable references in ${modifiedFiles.length} files`);
modifiedFiles.forEach(f => console.log(`   📝 ${f}`));