import { createContext, useContext, useEffect, useMemo } from 'react';
import baseTheme, { createThemeApi } from './theme.config';

const ThemeContext = createContext(createThemeApi(baseTheme));

const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const deepMerge = (target, source) => {
  if (!isObject(source)) {
    return source === undefined ? target : source;
  }

  const output = { ...target };

  for (const [key, value] of Object.entries(source)) {
    if (isObject(value) && isObject(target?.[key])) {
      output[key] = deepMerge(target[key], value);
    } else {
      output[key] = value;
    }
  }

  return output;
};

const toCssVarName = (segments) => {
  const normalized = segments
    .join('-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();

  return `--rr-${normalized}`;
};

const flattenToCssVars = (obj, path = []) => {
  const vars = {};

  for (const [key, value] of Object.entries(obj)) {
    const nextPath = [...path, key];

    if (isObject(value)) {
      Object.assign(vars, flattenToCssVars(value, nextPath));
    } else {
      vars[toCssVarName(nextPath)] = value;
    }
  }

  return vars;
};

const aliasMap = {
  // Core palette
  '--romantic-ivory': ['colors', 'primary', 'ivory'],
  '--dusty-rose': ['colors', 'primary', 'dustyRose'],
  '--sage-whisper': ['colors', 'primary', 'sage'],
  '--warm-walnut': ['colors', 'primary', 'walnut'],
  '--champagne-gold': ['colors', 'primary', 'champagne'],
  '--blush-pink': ['colors', 'accent', 'blush'],
  '--deep-forest': ['colors', 'accent', 'forest'],
  '--cream-pearl': ['colors', 'accent', 'cream'],
  '--muted-mauve': ['colors', 'accent', 'mauve'],
  '--copper-glow': ['colors', 'accent', 'copper'],
  '--warm-cream': ['colors', 'neutral', 'cream'],
  '--accent-gold': ['colors', 'accent', 'gold'],
  '--deep-brown': ['colors', 'neutral', 'brown'],
  '--text-dark': ['colors', 'semantic', 'text'],
  '--sage-green': ['colors', 'primary', 'sage'],
  '--soft-white': ['colors', 'neutral', 'softWhite'],

  // Typography
  '--font-display': ['typography', 'fonts', 'display'],
  '--font-body': ['typography', 'fonts', 'body'],
  '--font-script': ['typography', 'fonts', 'script'],
  '--text-xs': ['typography', 'sizes', 'xs'],
  '--text-sm': ['typography', 'sizes', 'sm'],
  '--text-base': ['typography', 'sizes', 'base'],
  '--text-lg': ['typography', 'sizes', 'lg'],
  '--text-xl': ['typography', 'sizes', 'xl'],
  '--text-2xl': ['typography', 'sizes', '2xl'],
  '--text-3xl': ['typography', 'sizes', '3xl'],
  '--text-4xl': ['typography', 'sizes', '4xl'],
  '--text-5xl': ['typography', 'sizes', '5xl'],
  '--text-6xl': ['typography', 'sizes', '6xl'],
  '--text-hero': ['typography', 'sizes', 'hero'],

  // Spacing
  '--space-xs': ['spacing', 'xs'],
  '--space-sm': ['spacing', 'sm'],
  '--space-md': ['spacing', 'md'],
  '--space-lg': ['spacing', 'lg'],
  '--space-xl': ['spacing', 'xl'],
  '--space-2xl': ['spacing', '2xl'],
  '--space-3xl': ['spacing', '3xl'],
  '--space-4xl': ['spacing', '4xl'],
  '--space-5xl': ['spacing', '5xl'],
  '--space-6xl': ['spacing', '6xl'],

  // Legacy rhythm aliases (fallback to spacing)
  '--rhythm-xs': ['spacing', 'xs'],
  '--rhythm-sm': ['spacing', 'lg'],
  '--rhythm-md': ['spacing', '3xl'],
  '--rhythm-lg': ['spacing', '5xl'],
  '--rhythm-xl': ['spacing', '6xl'],

  // Motion
  '--transition': ['transitions', 'slow'],
  '--transition-smooth': ['transitions', 'smooth'],
  '--transition-elegant': ['transitions', 'elegant'],
};

const getAliasValue = (tokens, pathSegments) => {
  return pathSegments.reduce((acc, key) => acc?.[key], tokens);
};

const syncCssVariables = (tokens) => {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const flatVars = flattenToCssVars(tokens);

  for (const [name, value] of Object.entries(flatVars)) {
    root.style.setProperty(name, value);
  }

  for (const [alias, pathSegments] of Object.entries(aliasMap)) {
    const aliasValue = getAliasValue(tokens, pathSegments);
    if (aliasValue != null) {
      root.style.setProperty(alias, aliasValue);
    }
  }
};

export function ThemeProvider({ children, value }) {
  const resolvedTheme = useMemo(() => {
    return value ? deepMerge(baseTheme, value) : baseTheme;
  }, [value]);

  const themeApi = useMemo(() => createThemeApi(resolvedTheme), [resolvedTheme]);

  useEffect(() => {
    syncCssVariables(resolvedTheme);
  }, [resolvedTheme]);

  return <ThemeContext.Provider value={themeApi}>{children}</ThemeContext.Provider>;
}

export const useThemeContext = () => useContext(ThemeContext);

if (typeof document !== 'undefined') {
  syncCssVariables(baseTheme);
}

export default ThemeContext;
