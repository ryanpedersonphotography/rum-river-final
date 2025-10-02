import React from 'react';

/**
 * VRTourButton Component
 * Specialized button for launching VR tours
 * Follows button system rules with vr-* variant classes
 */
export const VRTourButton = ({ 
  tourUrl, 
  variant = 'special', // special, barn, bridal
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
    <button
      className={`romantic-button vr-${variant} ${className}`.trim()}
      onClick={handleClick}
      type="button"
      aria-label={`Launch virtual tour${variant !== 'special' ? ` of ${variant}` : ''}`}
    >
      {showIcon && <span style={{ marginRight: '0.5rem' }}>{icon}</span>}
      {children}
    </button>
  );
};

export default VRTourButton;