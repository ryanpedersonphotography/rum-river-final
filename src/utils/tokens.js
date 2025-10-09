import tokens from '../generated/tokens.json';

/**
 * Token helper utilities for easy access to design tokens
 */

// Quick accessors for common token categories
export const colors = tokens.color;
export const spacing = tokens.spacing;
export const typography = tokens.font;
export const shadows = tokens.shadow;
export const transitions = tokens.transition;

// Helper function to get semantic color
export const getColor = (path) => {
  const parts = path.split('.');
  let value = tokens.color;
  for (const part of parts) {
    value = value[part];
  }
  return value;
};

// Helper function to get spacing value
export const getSpacing = (size) => {
  return tokens.spacing[size] || tokens.spacing.md;
};

// Helper function to build consistent component styles
export const componentStyles = {
  card: {
    padding: spacing['2xl'],
    borderRadius: tokens.size.border.radius.lg,
    boxShadow: shadows.md,
    backgroundColor: colors.base['cream-pearl']
  },
  button: {
    primary: {
      backgroundColor: colors.semantic.button['primary-bg'],
      color: colors.semantic.button['primary-text'],
      padding: `${spacing.md} ${spacing.xl}`,
      borderRadius: tokens.size.border.radius.pill,
      fontFamily: typography.family.body,
      fontSize: typography.size.base,
      fontWeight: typography.weight.semibold,
      transition: transitions.preset.smooth
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.semantic.button['outline-text'],
      border: `${tokens.size.border.width.medium} solid ${colors.semantic.button['outline-border']}`,
      padding: `${spacing.md} ${spacing.xl}`,
      borderRadius: tokens.size.border.radius.pill,
      fontFamily: typography.family.body,
      fontSize: typography.size.base,
      fontWeight: typography.weight.semibold,
      transition: transitions.preset.smooth
    }
  },
  heading: {
    h1: {
      fontFamily: typography.family.display,
      fontSize: typography.size['5xl'],
      fontWeight: typography.weight.bold,
      lineHeight: typography.lineHeight.tight,
      color: colors.semantic.text.primary
    },
    h2: {
      fontFamily: typography.family.display,
      fontSize: typography.size['3xl'],
      fontWeight: typography.weight.semibold,
      lineHeight: typography.lineHeight.snug,
      color: colors.semantic.text.primary
    },
    h3: {
      fontFamily: typography.family.display,
      fontSize: typography.size['2xl'],
      fontWeight: typography.weight.medium,
      lineHeight: typography.lineHeight.normal,
      color: colors.semantic.text.primary
    }
  }
};

export default {
  colors,
  spacing,
  typography,
  shadows,
  transitions,
  getColor,
  getSpacing,
  componentStyles
};