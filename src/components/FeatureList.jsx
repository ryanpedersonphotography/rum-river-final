import clsx from 'clsx';
import useTheme from '../theme/useTheme';

/**
 * FeatureList renders a themed list of label/value tuples (optionally with icons).
 * Items can be laid out using existing .feature-list CSS helpers while pulling
 * type, spacing, and colors from the active theme.
 */
const FeatureList = ({
  items,
  columns,
  className,
  itemClassName,
  iconSize = 'lg',
  style,
  children,
  unstyled = false,
}) => {
  const theme = useTheme();

  if (!items?.length) {
    return null;
  }

  const listStyle = { ...style };

  if (columns) {
    const gridTemplate =
      columns === 'auto'
        ? 'repeat(auto-fit, minmax(180px, 1fr))'
        : typeof columns === 'number'
          ? `repeat(${columns}, minmax(0, 1fr))`
          : columns;

    Object.assign(listStyle, {
      display: 'grid',
      gap: theme.spacing.lg,
      gridTemplateColumns: gridTemplate,
      listStyle: 'none',
      padding: 0,
    });
  }

  return (
    <ul className={clsx(!unstyled && 'feature-list', className)} style={listStyle}>
      {items.map((item, index) => {
        const { label, value, description, icon } = item;
        return (
          <li key={item.id ?? index} className={clsx('feature-list__item', itemClassName)}>
            {icon && (
              <span
                className="feature-list__icon"
                style={{ fontSize: theme.typography.sizes[iconSize] || theme.typography.sizes.lg }}
                aria-hidden
              >
                {icon}
              </span>
            )}
            <div>
              {label && (
                <h5
                  style={{
                    fontFamily: theme.typography.fonts.display,
                    fontSize: theme.typography.sizes.base,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: theme.colors.accent.gold,
                    marginBottom: theme.spacing.xs,
                  }}
                >
                  {label}
                </h5>
              )}
              {value && (
                <p
                  style={{
                    fontFamily: theme.typography.fonts.body,
                    fontSize: theme.typography.sizes.base,
                    lineHeight: theme.typography.lineHeights.relaxed,
                    color: theme.colors.semantic.text,
                    margin: 0,
                  }}
                >
                  {value}
                </p>
              )}
              {description && (
                <p
                  style={{
                    fontFamily: theme.typography.fonts.body,
                    fontSize: theme.typography.sizes.sm,
                    lineHeight: theme.typography.lineHeights.normal,
                    color: theme.colors.semantic.textLight,
                    margin: `${theme.spacing.xs} 0 0`,
                  }}
                >
                  {description}
                </p>
              )}
              {children}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FeatureList;
