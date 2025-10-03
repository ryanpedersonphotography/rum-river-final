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
// UTILITY FUNCTIONS
// ========================================

/**
 * Get a CSS variable value from the theme
 * @param {string} path - Dot notation path (e.g., 'colors.primary.ivory')
 * @returns {string} The value at that path
 */
export const getThemeValue = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], theme);
};

/**
 * Create a media query string
 * @param {string} breakpoint - The breakpoint name
 * @returns {string} Media query string
 */
export const mediaQuery = (breakpoint) => {
  return `@media (min-width: ${theme.breakpoints[breakpoint]})`;
};

/**
 * Get a consistent box shadow
 * @param {string} size - Shadow size (sm, md, lg, xl)
 * @returns {string} Box shadow value
 */
export const getShadow = (size = 'md') => {
  return theme.shadows[size] || theme.shadows.md;
};

/**
 * Get consistent spacing
 * @param {string|number} value - Spacing key or multiplier
 * @returns {string} Spacing value
 */
export const getSpacing = (value) => {
  if (typeof value === 'number') {
    return `${value}rem`;
  }
  return theme.spacing[value] || value;
};

// ========================================
// COMPONENT STYLE PRESETS
// ========================================

export const presets = {
  // Card styles
  card: {
    default: {
      background: theme.colors.neutral.white,
      borderRadius: theme.borders.radius.lg,
      padding: theme.spacing.lg,
      boxShadow: theme.shadows.md,
      border: `${theme.borders.width.thin} solid ${theme.colors.semantic.borderLight}`,
    },
    elevated: {
      background: theme.colors.neutral.white,
      borderRadius: theme.borders.radius.xl,
      padding: theme.spacing.xl,
      boxShadow: theme.shadows.lg,
    }
  },
  
  // Button styles
  button: {
    primary: {
      background: theme.colors.primary.dustyRose,
      color: theme.colors.neutral.white,
      padding: `${theme.spacing.md} ${theme.spacing.xl}`,
      borderRadius: theme.borders.radius.full,
      fontWeight: theme.typography.weights.semibold,
      transition: theme.transitions.base,
    },
    secondary: {
      background: 'transparent',
      color: theme.colors.primary.walnut,
      border: `${theme.borders.width.medium} solid ${theme.colors.primary.walnut}`,
      padding: `${theme.spacing.md} ${theme.spacing.xl}`,
      borderRadius: theme.borders.radius.full,
      fontWeight: theme.typography.weights.semibold,
      transition: theme.transitions.base,
    }
  },
  
  // Section styles
  section: {
    default: {
      padding: theme.spacing['5xl'] + ' ' + theme.spacing.xl,
      background: theme.colors.semantic.background,
    },
    cream: {
      padding: theme.spacing['5xl'] + ' ' + theme.spacing.xl,
      background: theme.colors.neutral.cream,
    },
    dark: {
      padding: theme.spacing['5xl'] + ' ' + theme.spacing.xl,
      background: theme.colors.primary.walnut,
      color: theme.colors.neutral.white,
    }
  }
};

export default theme;