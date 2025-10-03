/**
 * Centralized Theme Configuration
 * This file contains all design tokens for the Rum River Barn website
 * Import this file to access consistent design values throughout the application
 */

const theme = {
  // ========================================
  // COLOR PALETTE
  // ========================================
  colors: {
    // Primary Brand Colors
    primary: {
      ivory: '#FBF8F4',
      dustyRose: '#9D6B7B',
      sage: '#9CAA9E',
      walnut: '#6B4E3D',
      champagne: '#E4C896',
    },
    
    // Extended Palette
    accent: {
      blush: '#F4E4E1',
      forest: '#3A4A3C',
      cream: '#FFFCF8',
      mauve: '#A08A85',
      copper: '#C97D60',
      gold: '#D4A574',
    },
    
    // Neutral Colors
    neutral: {
      white: '#FFFFFF',
      cream: '#FAF6F2',
      softWhite: '#FEFDFB',
      brown: '#4A3426',
      dark: '#2C2416',
      black: '#000000',
    },
    
    // Semantic Colors
    semantic: {
      text: '#2C2416',
      textLight: '#6B4E3D',
      textOnDark: '#FFFFFF',
      background: '#FBF8F4',
      backgroundAlt: '#FAF6F2',
      border: '#E4C896',
      borderLight: 'rgba(212, 165, 116, 0.2)',
    },
    
    // Overlay Colors
    overlay: {
      light: 'rgba(255, 255, 255, 0.9)',
      medium: 'rgba(0, 0, 0, 0.4)',
      dark: 'rgba(0, 0, 0, 0.6)',
      subtle: 'rgba(0, 0, 0, 0.1)',
    }
  },

  // ========================================
  // TYPOGRAPHY
  // ========================================
  typography: {
    // Font Families
    fonts: {
      display: "'Playfair Display', serif",
      body: "'Montserrat', sans-serif",
      script: "'Dancing Script', cursive",
    },
    
    // Font Sizes
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.75rem', // 28px
      '4xl': '2rem',    // 32px
      '5xl': '2.5rem',  // 40px
      '6xl': '3rem',    // 48px
      hero: 'clamp(3rem, 8vw, 5.5rem)',
      display: 'clamp(2rem, 5vw, 4rem)',
    },
    
    // Font Weights
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    // Line Heights
    lineHeights: {
      tight: 1.2,
      snug: 1.4,
      normal: 1.6,
      relaxed: 1.8,
      loose: 2,
    }
  },

  // ========================================
  // SPACING
  // ========================================
  spacing: {
    xs: '0.5rem',     // 8px
    sm: '0.75rem',    // 12px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '2.5rem',  // 40px
    '3xl': '3rem',    // 48px
    '4xl': '4rem',    // 64px
    '5xl': '5rem',    // 80px
    '6xl': '8rem',    // 128px
  },

  // ========================================
  // LAYOUT
  // ========================================
  layout: {
    maxWidth: '1400px',
    contentWidth: '1200px',
    containerPadding: '2rem',
    sectionPadding: {
      mobile: '3rem 1rem',
      tablet: '4rem 2rem',
      desktop: '5rem 2rem',
    }
  },

  // ========================================
  // BORDERS & RADIUS
  // ========================================
  borders: {
    radius: {
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      '2xl': '24px',
      full: '9999px',
    },
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    }
  },

  // ========================================
  // SHADOWS
  // ========================================
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 4px 20px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.1)',
    xl: '0 12px 48px rgba(0, 0, 0, 0.15)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(228, 200, 150, 0.3)',
    text: '0 2px 20px rgba(0, 0, 0, 0.5)',
    textSubtle: '0 1px 10px rgba(0, 0, 0, 0.3)',
  },

  // ========================================
  // TRANSITIONS
  // ========================================
  transitions: {
    fast: 'all 0.2s ease',
    base: 'all 0.3s ease',
    slow: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    elegant: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },

  // ========================================
  // BREAKPOINTS
  // ========================================
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ========================================
  // Z-INDEX SCALE
  // ========================================
  zIndex: {
    below: -1,
    base: 0,
    dropdown: 10,
    sticky: 20,
    overlay: 30,
    modal: 40,
    popover: 50,
    tooltip: 60,
    navigation: 100,
    toast: 200,
  }
};

// ========================================
// THEME HELPERS
// ========================================

/**
 * Create a media query string
 * @param {string} breakpoint - The breakpoint name
 * @param {object} baseTheme - Theme reference
 * @returns {string} Media query string
 */
export const mediaQuery = (breakpoint, baseTheme = theme) => {
  return `@media (min-width: ${baseTheme.breakpoints[breakpoint]})`;
};

const createPresets = (baseTheme) => ({
  card: {
    default: {
      background: baseTheme.colors.neutral.white,
      borderRadius: baseTheme.borders.radius.lg,
      padding: baseTheme.spacing.lg,
      boxShadow: baseTheme.shadows.md,
      border: `${baseTheme.borders.width.thin} solid ${baseTheme.colors.semantic.borderLight}`,
    },
    elevated: {
      background: baseTheme.colors.neutral.white,
      borderRadius: baseTheme.borders.radius.xl,
      padding: baseTheme.spacing.xl,
      boxShadow: baseTheme.shadows.lg,
      border: 'none',
    },
    soft: {
      background: baseTheme.colors.neutral.cream,
      borderRadius: baseTheme.borders.radius.xl,
      padding: baseTheme.spacing.xl,
      boxShadow: baseTheme.shadows.sm,
      border: `${baseTheme.borders.width.thin} solid ${baseTheme.colors.semantic.borderLight}`,
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: baseTheme.borders.radius.xl,
      padding: baseTheme.spacing.xl,
      backdropFilter: 'blur(12px)',
      border: `${baseTheme.borders.width.thin} solid rgba(255,255,255,0.25)`,
      boxShadow: baseTheme.shadows.glow,
    }
  },

  button: {
    primary: {
      background: baseTheme.colors.primary.dustyRose,
      color: baseTheme.colors.neutral.white,
      padding: `${baseTheme.spacing.md} ${baseTheme.spacing.xl}`,
      borderRadius: baseTheme.borders.radius.full,
      fontWeight: baseTheme.typography.weights.semibold,
      transition: baseTheme.transitions.base,
    },
    secondary: {
      background: 'transparent',
      color: baseTheme.colors.primary.walnut,
      border: `${baseTheme.borders.width.medium} solid ${baseTheme.colors.primary.walnut}`,
      padding: `${baseTheme.spacing.md} ${baseTheme.spacing.xl}`,
      borderRadius: baseTheme.borders.radius.full,
      fontWeight: baseTheme.typography.weights.semibold,
      transition: baseTheme.transitions.base,
    }
  },

  section: {
    default: {
      padding: `${baseTheme.spacing['5xl']} ${baseTheme.spacing.xl}`,
      background: baseTheme.colors.semantic.background,
      color: baseTheme.colors.semantic.text,
    },
    cream: {
      padding: `${baseTheme.spacing['5xl']} ${baseTheme.spacing.xl}`,
      background: baseTheme.colors.neutral.cream,
      color: baseTheme.colors.semantic.text,
    },
    blush: {
      padding: `${baseTheme.spacing['5xl']} ${baseTheme.spacing.xl}`,
      background: baseTheme.colors.accent.blush,
      color: baseTheme.colors.semantic.text,
    },
    walnut: {
      padding: `${baseTheme.spacing['5xl']} ${baseTheme.spacing.xl}`,
      background: baseTheme.colors.primary.walnut,
      color: baseTheme.colors.neutral.white,
    },
    forest: {
      padding: `${baseTheme.spacing['5xl']} ${baseTheme.spacing.xl}`,
      background: baseTheme.colors.accent.forest,
      color: baseTheme.colors.neutral.white,
    },
    blushGradient: {
      padding: `${baseTheme.spacing['5xl']} ${baseTheme.spacing.xl}`,
      background: `linear-gradient(135deg, ${baseTheme.colors.neutral.cream} 0%, ${baseTheme.colors.accent.blush} 100%)`,
      color: baseTheme.colors.semantic.text,
    },
    goldGradient: {
      padding: `${baseTheme.spacing['5xl']} ${baseTheme.spacing.xl}`,
      background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, ${baseTheme.colors.primary.champagne} 100%)`,
      color: baseTheme.colors.semantic.text,
    },
    walnutGradient: {
      padding: `${baseTheme.spacing['5xl']} ${baseTheme.spacing.xl}`,
      background: `linear-gradient(135deg, ${baseTheme.colors.primary.walnut} 0%, ${baseTheme.colors.accent.forest} 100%)`,
      color: baseTheme.colors.neutral.white,
    }
  }
});

const createStyles = (baseTheme, presetCollection) => ({
  h1: {
    fontFamily: baseTheme.typography.fonts.display,
    fontSize: baseTheme.typography.sizes.hero,
    fontWeight: baseTheme.typography.weights.bold,
    lineHeight: baseTheme.typography.lineHeights.tight,
    color: baseTheme.colors.primary.walnut,
  },
  h2: {
    fontFamily: baseTheme.typography.fonts.display,
    fontSize: baseTheme.typography.sizes['5xl'],
    fontWeight: baseTheme.typography.weights.bold,
    lineHeight: baseTheme.typography.lineHeights.tight,
    color: baseTheme.colors.primary.walnut,
  },
  h3: {
    fontFamily: baseTheme.typography.fonts.display,
    fontSize: baseTheme.typography.sizes['3xl'],
    fontWeight: baseTheme.typography.weights.semibold,
    lineHeight: baseTheme.typography.lineHeights.snug,
    color: baseTheme.colors.primary.walnut,
  },
  lead: {
    fontFamily: baseTheme.typography.fonts.body,
    fontSize: baseTheme.typography.sizes.lg,
    lineHeight: baseTheme.typography.lineHeights.relaxed,
    color: baseTheme.colors.semantic.textLight,
  },
  body: {
    fontFamily: baseTheme.typography.fonts.body,
    fontSize: baseTheme.typography.sizes.base,
    lineHeight: baseTheme.typography.lineHeights.relaxed,
    color: baseTheme.colors.semantic.text,
  },
  script: {
    fontFamily: baseTheme.typography.fonts.script,
    fontSize: baseTheme.typography.sizes['2xl'],
    fontWeight: baseTheme.typography.weights.normal,
    color: baseTheme.colors.accent.gold,
  },
  container: {
    maxWidth: baseTheme.layout.maxWidth,
    margin: '0 auto',
    padding: `0 ${baseTheme.layout.containerPadding}`,
  },
  contentWrapper: {
    maxWidth: baseTheme.layout.contentWidth,
    margin: '0 auto',
    padding: `0 ${baseTheme.spacing.xl}`,
  },
  card: presetCollection.card.default,
  cardElevated: presetCollection.card.elevated,
  buttonPrimary: presetCollection.button.primary,
  buttonSecondary: presetCollection.button.secondary,
  section: presetCollection.section.default,
  sectionCream: presetCollection.section.cream,
  sectionDark: presetCollection.section.dark,
});

/**
 * Build a theme API with helpers, presets, and styles
 * @param {object} baseTheme - Theme reference that can be overridden per provider
 * @returns {object} Theme API consistent with legacy useTheme output
 */
export const createThemeApi = (baseTheme = theme) => {
  const getValue = (path) => path.split('.').reduce((obj, key) => obj?.[key], baseTheme);

  const getSpacing = (value) => {
    if (typeof value === 'number') {
      return `${value}rem`;
    }
    return baseTheme.spacing[value] || value;
  };

  const getShadow = (size = 'md') => {
    return baseTheme.shadows[size] || baseTheme.shadows.md;
  };

  const presetCollection = createPresets(baseTheme);
  const styles = createStyles(baseTheme, presetCollection);

  return {
    ...baseTheme,
    getValue,
    getSpacing,
    getShadow,
    presets: presetCollection,
    mediaQuery: (breakpoint) => mediaQuery(breakpoint, baseTheme),
    styles,
  };
};

export default theme;
