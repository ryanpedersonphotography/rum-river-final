import React from 'react';
import CTAButton from './CTAButton';

/**
 * VRTourButton Component
 * Specialized button for launching VR tours
 * Now uses standard CTAButton for consistency
 */
export const VRTourButton = ({ 
  tourUrl, 
  variant = 'primary', // Use standard button variants
  children,
  icon = '🥽',
  showIcon = true,
  className = '',
  windowWidth = 1200,
  windowHeight = 800
}) => {
  const handleClick = () => {
    if (tourUrl) {
      window.open(
        tourUrl, 
        '_blank', 
        `width=${windowWidth},height=${windowHeight}`
      );
    }
  };

  return (
    <CTAButton
      variant={variant}
      className={className}
      onClick={handleClick}
      ariaLabel="Launch virtual tour"
    >
      {showIcon && <span style={{ marginRight: '0.5rem' }}>{icon}</span>}
      {children}
    </CTAButton>
  );
};

export default VRTourButton;