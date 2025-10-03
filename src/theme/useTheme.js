import { useThemeContext } from './ThemeProvider';

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
  return useThemeContext();
};

export default useTheme;
