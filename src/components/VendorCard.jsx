import clsx from 'clsx';
import Card from './Card';
import useTheme from '../theme/useTheme';

const VendorCard = ({ name, description, phone, className, style }) => {
  const theme = useTheme();
  return (
    <Card
      variant="soft"
      className={clsx('vendor-card', className)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
        ...style,
      }}
    >
      <h3
        className="vendor-card__title"
        style={{
          fontFamily: theme.typography.fonts.display,
          fontSize: theme.typography.sizes['2xl'],
          fontWeight: theme.typography.weights.normal,
          color: theme.colors.primary.walnut,
          margin: 0,
        }}
      >
        {name}
      </h3>
      <p
        className="vendor-card__description"
        style={{
          fontFamily: theme.typography.fonts.body,
          fontSize: theme.typography.sizes.base,
          lineHeight: theme.typography.lineHeights.relaxed,
          color: theme.colors.semantic.textLight,
          margin: 0,
        }}
      >
        {description}
      </p>
      <div
        className="vendor-card__phone"
        style={{
          fontFamily: theme.typography.fonts.body,
          fontSize: theme.typography.sizes.base,
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.primary.walnut,
          letterSpacing: '0.04em',
        }}
      >
        📞 {phone}
      </div>
    </Card>
  );
};

export default VendorCard;
