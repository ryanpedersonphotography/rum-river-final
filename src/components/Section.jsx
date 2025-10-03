import clsx from 'clsx';
import { forwardRef } from 'react';
import useTheme from '../theme/useTheme';
import { resolvePadding } from '../theme/themeUtils';

const buildToneStyle = (theme, tone) => {
  if (!tone || tone === 'default') {
    return {
      background: theme.colors.semantic.background,
      color: theme.colors.semantic.text,
    };
  }

  const preset = theme.presets?.section?.[tone];
  if (preset) {
    const { padding: _padding, ...rest } = preset;
    return rest;
  }

  const palette = {
    default: {
      background: theme.colors.semantic.background,
      color: theme.colors.semantic.text,
    },
    cream: {
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
    forest: {
      background: theme.colors.accent.forest,
      color: theme.colors.neutral.white,
    },
    brown: {
      background: theme.colors.neutral.brown,
      color: theme.colors.neutral.white,
    },
    white: {
      background: theme.colors.neutral.white,
      color: theme.colors.semantic.text,
    },
    transparent: {
      background: 'transparent',
    },
  };

  return palette[tone] || palette.default;
};

const DARK_TONES = new Set(['walnut', 'forest', 'brown', 'walnutGradient', 'forestGradient']);

const Section = forwardRef(function Section(
  {
    as: Tag = 'section',
    tone = 'default',
    padding,
    paddingX,
    paddingY,
    className,
    style,
    background,
    children,
    ...rest
  },
  ref,
) {
  const theme = useTheme();
  const defaultPreset = theme.presets?.section?.default || {};
  const tonePreset = tone !== 'default' ? theme.presets?.section?.[tone] : defaultPreset;

  const baseStyle = {
    ...(defaultPreset.background ? { background: defaultPreset.background } : {}),
    ...(defaultPreset.color ? { color: defaultPreset.color } : {}),
  };

  const toneStyle = buildToneStyle(theme, tone);
  const backgroundStyle = background ? { background } : {};

  const finalPadding = resolvePadding(theme, {
    padding,
    paddingX,
    paddingY,
    defaultPadding: tonePreset?.padding || defaultPreset?.padding,
  });

  const finalStyle = {
    padding: finalPadding,
    ...baseStyle,
    ...toneStyle,
    ...backgroundStyle,
    ...style,
  };

  const toneSlug = tone && tone !== 'default'
    ? tone.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    : null;

  const toneClass = toneSlug ? `section-${toneSlug}` : null;
  const isDarkTone = tone && DARK_TONES.has(tone);
  const isDarkGradient = isDarkTone && /gradient$/i.test(tone);

  return (
    <Tag
      ref={ref}
      className={clsx(
        'section',
        toneClass,
        isDarkTone && 'dark-section',
        isDarkGradient && 'dark-gradient-section',
        className,
      )}
      style={finalStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Section;
