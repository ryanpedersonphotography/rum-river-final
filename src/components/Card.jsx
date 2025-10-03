import clsx from 'clsx';
import { forwardRef } from 'react';
import useTheme from '../theme/useTheme';
import { resolvePadding } from '../theme/themeUtils';

const resolveToneOverrides = (theme, tone) => {
  if (!tone) return {};

  const sectionPreset = theme.presets?.section?.[tone];
  if (sectionPreset) {
    const { padding: _padding, ...rest } = sectionPreset;
    return rest;
  }

  const palette = {
    soft: {
      background: theme.colors.neutral.cream,
      color: theme.colors.semantic.text,
    },
    ivory: {
      background: theme.colors.primary.ivory,
      color: theme.colors.semantic.text,
    },
    blush: {
      background: theme.colors.accent.blush,
      color: theme.colors.semantic.text,
    },
    walnut: {
      background: theme.colors.primary.walnut,
      color: theme.colors.neutral.white,
    },
  };

  if (palette[tone]) {
    return palette[tone];
  }

  // Allow raw CSS values
  return {
    background: tone,
  };
};

const Card = forwardRef(function Card(
  {
    as: Tag = 'div',
    variant = 'default',
    tone,
    padding,
    paddingX,
    paddingY,
    className,
    style,
    children,
    ...rest
  },
  ref,
) {
  const theme = useTheme();
  const preset = theme.presets?.card?.[variant] || theme.presets?.card?.default || {};
  const { padding: presetPadding, ...presetStyle } = preset;

  const toneStyle = resolveToneOverrides(theme, tone);

  const finalPadding = resolvePadding(theme, {
    padding,
    paddingX,
    paddingY,
    defaultPadding: presetPadding,
  });

  const finalStyle = {
    padding: finalPadding,
    ...presetStyle,
    ...toneStyle,
    ...style,
  };

  return (
    <Tag ref={ref} className={clsx('rr-card', className)} style={finalStyle} {...rest}>
      {children}
    </Tag>
  );
});

export default Card;
