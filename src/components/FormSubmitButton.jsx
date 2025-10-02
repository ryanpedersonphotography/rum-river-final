import React from 'react';

/**
 * FormSubmitButton Component
 * Consistent submit button for forms across the site
 * Follows button system rules with cta-submit-button class
 */
export const FormSubmitButton = ({ 
  submitting = false,
  submitText = 'Submit',
  loadingText = 'Submitting...',
  icon,
  showIcon = false,
  className = '',
  disabled = false
}) => {
  const isDisabled = submitting || disabled;
  const displayText = submitting ? loadingText : submitText;

  return (
    <button 
      type="submit" 
      className={`romantic-button primary ${className}`.trim()}
      disabled={isDisabled}
      aria-busy={submitting}
      aria-disabled={isDisabled}
    >
      <span>
        {showIcon && icon && !submitting && (
          <span style={{ marginRight: '0.5rem' }}>{icon}</span>
        )}
        {displayText}
      </span>
    </button>
  );
};

export default FormSubmitButton;