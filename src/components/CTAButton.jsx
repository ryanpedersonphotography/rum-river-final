import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CTAButton Component
 * Universal button component that enforces button system rules
 * Prevents inline styles and ensures consistent styling
 */
export const CTAButton = ({ 
  variant = 'primary', // primary, outline, vr-special, vr-barn, vr-bridal
  size = 'normal', // normal, large, small
  href,
  to, // For React Router links
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
  target,
  rel
}) => {
  // Determine base class based on variant
  const getBaseClass = () => {
    if (variant === 'submit') {
      return 'cta-submit-button';
    } else if (variant === 'floating') {
      return 'floating-cta';
    } else if (variant.startsWith('vr-')) {
      return `romantic-button ${variant}`;
    } else {
      return `romantic-button ${variant}`;
    }
  };

  const baseClass = getBaseClass();
  const finalClassName = `${baseClass} ${size !== 'normal' ? `size-${size}` : ''} ${className}`.trim();

  // Common props
  const commonProps = {
    className: finalClassName,
    onClick,
    disabled,
    'aria-label': ariaLabel
  };

  // If it's a React Router link
  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <a 
        href={href} 
        {...commonProps}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    );
  }

  // Default button
  return (
    <button type={type} {...commonProps}>
      {children}
    </button>
  );
};

export default CTAButton;