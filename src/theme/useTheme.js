import theme, { getThemeValue, getShadow, getSpacing, presets } from './theme.config';

/**
 * Custom hook for accessing theme values in React components
 * 
 * @example
 * const { colors, spacing, shadows } = useTheme();
 * 
 * @example
 * const theme = useTheme();
 * <div style={{ padding: theme.spacing.lg, color: theme.colors.primary.walnut }}>
 */
export const useTheme = () => {
  return {
    ...theme,
    // Utility functions
    getValue: getThemeValue,
    getShadow,
    getSpacing,
    presets,
    
    // Commonly used style objects
    styles: {
      // Typography styles
      h1: {
        fontFamily: theme.typography.fonts.display,
        fontSize: theme.typography.sizes.hero,
        fontWeight: theme.typography.weights.bold,
        lineHeight: theme.typography.lineHeights.tight,
        color: theme.colors.primary.walnut,
      },
      h2: {
        fontFamily: theme.typography.fonts.display,
        fontSize: theme.typography.sizes['5xl'],
        fontWeight: theme.typography.weights.bold,
        lineHeight: theme.typography.lineHeights.tight,
        color: theme.colors.primary.walnut,
      },
      h3: {
        fontFamily: theme.typography.fonts.display,
        fontSize: theme.typography.sizes['3xl'],
        fontWeight: theme.typography.weights.semibold,
        lineHeight: theme.typography.lineHeights.snug,
        color: theme.colors.primary.walnut,
      },
      lead: {
        fontFamily: theme.typography.fonts.body,
        fontSize: theme.typography.sizes.lg,
        lineHeight: theme.typography.lineHeights.relaxed,
        color: theme.colors.semantic.textLight,
      },
      body: {
        fontFamily: theme.typography.fonts.body,
        fontSize: theme.typography.sizes.base,
        lineHeight: theme.typography.lineHeights.relaxed,
        color: theme.colors.semantic.text,
      },
      script: {
        fontFamily: theme.typography.fonts.script,
        fontSize: theme.typography.sizes['2xl'],
        fontWeight: theme.typography.weights.normal,
        color: theme.colors.accent.gold,
      },
      
      // Layout styles
      container: {
        maxWidth: theme.layout.maxWidth,
        margin: '0 auto',
        padding: `0 ${theme.layout.containerPadding}`,
      },
      contentWrapper: {
        maxWidth: theme.layout.contentWidth,
        margin: '0 auto',
        padding: `0 ${theme.spacing.xl}`,
      },
      
      // Common component styles
      card: presets.card.default,
      cardElevated: presets.card.elevated,
      buttonPrimary: presets.button.primary,
      buttonSecondary: presets.button.secondary,
      section: presets.section.default,
      sectionCream: presets.section.cream,
      sectionDark: presets.section.dark,
    }
  };
};

export default useTheme;