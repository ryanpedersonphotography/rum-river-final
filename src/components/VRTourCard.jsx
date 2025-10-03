import clsx from 'clsx';
import Card from './Card';
import VRTourButton from './VRTourButton';
import useTheme from '../theme/useTheme';

const VRTourCard = ({
  title,
  description,
  tourUrl,
  icon = '🥽',
  ctaLabel = 'Launch Virtual Tour',
  variant = 'soft',
  tone = 'blushGradient',
  className,
  style,
  children,
}) => {
  const theme = useTheme();

  const isDarkTone = tone && /walnut|forest/i.test(tone);
  const titleColor = isDarkTone ? theme.colors.semantic.textOnDark : theme.colors.primary.walnut;
  const descriptionColor = isDarkTone ? 'rgba(255,255,255,0.82)' : theme.colors.semantic.textLight;

  return (
    <Card
      variant={variant}
      tone={tone}
      className={clsx('vr-tour-card', className)}
      style={{
        border: `${theme.borders.width.thin} solid ${theme.colors.semantic.borderLight}`,
        boxShadow: theme.shadows.md,
        '--vr-tour-card-title-color': titleColor,
        '--vr-tour-card-description-color': descriptionColor,
        ...style,
      }}
    >
      <div className="vr-tour-card__header">
        <span className="vr-tour-card__icon" aria-hidden>
          {icon}
        </span>
        <h4 className="vr-tour-card__title" style={{ color: titleColor }}>
          {title}
        </h4>
      </div>
      <p className="vr-tour-card__description" style={{ color: descriptionColor }}>
        {description}
      </p>
      {children}
      <VRTourButton tourUrl={tourUrl} variant="primary" showIcon={false}>
        {ctaLabel}
      </VRTourButton>
    </Card>
  );
};

export default VRTourCard;
