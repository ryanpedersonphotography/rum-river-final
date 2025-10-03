import clsx from 'clsx';
import Card from './Card';
import useTheme from '../theme/useTheme';

const TestimonialCard = ({
  quote,
  author,
  detail,
  highlight = false,
  className,
  style,
}) => {
  const theme = useTheme();
  const titleColor = highlight ? theme.colors.semantic.text : theme.colors.primary.walnut;
  const quoteColor = highlight ? theme.colors.semantic.text : theme.colors.semantic.text;
  const detailColor = highlight ? theme.colors.semantic.textLight : theme.colors.semantic.textLight;

  return (
    <Card
      variant={highlight ? 'glass' : 'soft'}
      tone={highlight ? 'goldGradient' : undefined}
      className={clsx('testimonial-card', highlight && 'testimonial-card--highlight', className)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
        textAlign: highlight ? 'center' : 'left',
        ...style,
      }}
    >
      <div className="five-star-rating" aria-hidden>★★★★★</div>
      <blockquote
        className="testimonial-quote"
        style={{
          fontFamily: theme.typography.fonts.display,
          fontSize: highlight ? theme.typography.sizes['3xl'] : theme.typography.sizes['2xl'],
          lineHeight: theme.typography.lineHeights.relaxed,
          color: quoteColor,
          margin: 0,
          fontStyle: 'italic',
        }}
      >
        {quote}
      </blockquote>
      <div
        className="testimonial-author"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.xs,
          color: detailColor,
        }}
      >
        <span
          className="author-name"
          style={{
            fontFamily: theme.typography.fonts.body,
            fontSize: theme.typography.sizes.lg,
            fontWeight: theme.typography.weights.semibold,
            color: titleColor,
          }}
        >
          {author}
        </span>
        {detail && (
          <span
            className="author-detail"
            style={{
              fontFamily: theme.typography.fonts.body,
              fontSize: theme.typography.sizes.base,
            }}
          >
            {detail}
          </span>
        )}
      </div>
    </Card>
  );
};

export default TestimonialCard;
