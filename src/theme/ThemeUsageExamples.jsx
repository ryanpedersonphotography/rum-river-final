import { useTheme } from './useTheme';

/**
 * Example component showing how to use the theme configuration
 */
export default function ThemeUsageExamples() {
  const theme = useTheme();

  return (
    <div>
      {/* Example 1: Using theme colors and spacing */}
      <div style={{
        backgroundColor: theme.colors.primary.ivory,
        padding: theme.spacing.lg,
        marginBottom: theme.spacing.xl
      }}>
        <h2 style={{
          color: theme.colors.primary.walnut,
          fontSize: theme.typography.sizes['3xl'],
          fontFamily: theme.typography.fonts.display
        }}>
          Using Theme Values Directly
        </h2>
      </div>

      {/* Example 2: Using preset styles */}
      <div style={theme.styles.card}>
        <h3 style={theme.styles.h3}>Card with Preset Styles</h3>
        <p style={theme.styles.body}>
          This card uses the preset card styles from the theme.
        </p>
      </div>

      {/* Example 3: Using utility functions */}
      <div style={{
        padding: theme.getSpacing('xl'),
        boxShadow: theme.getShadow('lg'),
        borderRadius: theme.borders.radius.lg,
        marginTop: theme.spacing['2xl']
      }}>
        <p>Using theme utility functions for consistent styling</p>
      </div>

      {/* Example 4: Replacing hardcoded inline styles */}
      {/* BEFORE: */}
      {/* <div style={{ 
        padding: '2rem', 
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        border: '1px solid rgba(212, 165, 116, 0.2)'
      }}> */}
      
      {/* AFTER: */}
      <div style={{
        padding: theme.spacing.xl,
        boxShadow: theme.shadows.lg,
        border: `${theme.borders.width.thin} solid ${theme.colors.semantic.borderLight}`,
        marginTop: theme.spacing.lg
      }}>
        <p>Replaced hardcoded values with theme values</p>
      </div>

      {/* Example 5: Responsive button */}
      <button style={{
        ...theme.styles.buttonPrimary,
        cursor: 'pointer',
      }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = theme.shadows.xl;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Primary Button
      </button>
    </div>
  );
}

/**
 * Example of converting an existing component to use the theme
 */
export function BeforeAndAfter() {
  const theme = useTheme();

  return (
    <div>
      {/* ============ BEFORE ============ */}
      {/* This is how the code looked with hardcoded values: */}
      
      {/* <div style={{
        background: 'white',
        borderRadius: '16px', 
        padding: '2rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        textAlign: 'center',
        border: '1px solid rgba(212, 165, 116, 0.2)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color: '#6B4E3D'
        }}>
          Old Card Style
        </h3>
        <p style={{ 
          fontSize: '1.125rem',
          color: 'rgba(0,0,0,0.7)'
        }}>
          Content here
        </p>
      </div> */}

      {/* ============ AFTER ============ */}
      {/* Now using the centralized theme: */}
      
      <div style={theme.styles.cardElevated}>
        <h3 style={{
          ...theme.styles.h3,
          marginBottom: theme.spacing.md,
          textAlign: 'center'
        }}>
          New Card Style
        </h3>
        <p style={{
          ...theme.styles.lead,
          textAlign: 'center'
        }}>
          Content here with consistent theme values
        </p>
      </div>
    </div>
  );
}

/**
 * Migration guide for common patterns
 */
export const migrationPatterns = {
  // Instead of: style={{ padding: '2rem' }}
  // Use: style={{ padding: theme.spacing.xl }}

  // Instead of: style={{ color: '#9D6B7B' }}
  // Use: style={{ color: theme.colors.primary.dustyRose }}

  // Instead of: style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
  // Use: style={{ boxShadow: theme.shadows.lg }}

  // Instead of: style={{ fontSize: '1.5rem' }}
  // Use: style={{ fontSize: theme.typography.sizes['2xl'] }}

  // Instead of: style={{ borderRadius: '16px' }}
  // Use: style={{ borderRadius: theme.borders.radius.xl }}

  // Instead of: className="section-cream" with random padding
  // Use: style={theme.styles.sectionCream}
};