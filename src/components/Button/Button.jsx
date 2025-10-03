import React from 'react';
import clsx from 'clsx';
import useTheme from '../../theme/useTheme';

export default function Button({
  as: Tag = 'button',
  variant = 'primary',      // 'primary' | 'secondary' | 'link'
  size = 'md',              // 'sm' | 'md' | 'lg'
  disabled = false,
  className,
  children,
  ...rest
}) {
  const theme = useTheme();
  const { styles, typography, borders, spacing } = theme;

  // size → padding
  const padding =
    size === 'sm' ? `${spacing.sm} ${spacing.lg}` :
    size === 'lg' ? `${spacing.lg} ${spacing['2xl']}` :
                    `${spacing.md} ${spacing.xl}`;

  // variant → style
  let variantStyle = {};
  if (variant === 'primary') variantStyle = styles.buttonPrimary || {};
  else if (variant === 'secondary') variantStyle = styles.buttonSecondary || {};
  else if (variant === 'link') {
    const fallbackText = (theme.colors && theme.colors.semantic && theme.colors.semantic.text) || '#1f2937';
    variantStyle = { background: 'transparent', color: (styles.buttonPrimary && styles.buttonPrimary.color) || fallbackText, textDecoration: 'underline' };
  }

  const baseStyle = {
    fontFamily: typography?.fonts?.body,
    borderRadius: borders?.radius?.full,
    padding,
    border: 'none',
    ...variantStyle,
  };

  // a11y for anchor "disabled"
  const isAnchor = Tag === 'a';
  const anchorA11yProps = isAnchor && disabled ? { 'aria-disabled': true, tabIndex: -1, onClick: (e) => e.preventDefault() } : {};

  // default type=button for real <button>
  const buttonType = Tag === 'button' ? { type: 'button' } : {};

  return (
    <Tag
      className={clsx('romantic-button', `btn--${variant}`, `btn--${size}`, className)}
      style={baseStyle}
      disabled={!isAnchor && disabled ? true : undefined}
      {...buttonType}
      {...anchorA11yProps}
      {...rest}
    >
      {children}
    </Tag>
  );
}