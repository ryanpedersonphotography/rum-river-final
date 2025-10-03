import clsx from 'clsx';
import { forwardRef } from 'react';
import useTheme from '../../theme/useTheme';

const getControlComponent = (component) => {
  if (component === 'textarea') return 'textarea';
  if (component === 'select') return 'select';
  return 'input';
};

const FormField = forwardRef(function FormField(props, ref) {
  const {
    id,
    name,
    label,
    component = 'input',
    type = 'text',
    placeholder,
    required = false,
    disabled = false,
    variant = 'light',
    helperText,
    options,
    children,
    className,
    controlClassName,
    fullWidth = false,
    wrapperProps,
    ...controlProps
  } = props;

  const theme = useTheme();
  const Control = getControlComponent(component);
  const isDark = variant === 'dark';

  const labelColor = isDark
    ? 'rgba(255,255,255,0.92)'
    : theme.colors.semantic.text;

  const helperColor = isDark
    ? 'rgba(255,255,255,0.75)'
    : theme.colors.semantic.textLight;

  const controlBorder = isDark
    ? '1px solid rgba(255,255,255,0.25)'
    : `1px solid ${theme.colors.semantic.borderLight}`;

  const controlBackground = isDark ? 'rgba(255,255,255,0.06)' : theme.colors.neutral.white;
  const controlColor = isDark ? theme.colors.semantic.textOnDark : theme.colors.semantic.text;

  return (
    <div
      className={clsx(
        'form-field',
        fullWidth && 'form-field--full',
        isDark && 'form-field--dark',
        className
      )}
      {...wrapperProps}
    >
      {label && (
        <label htmlFor={id || name} className="form-field__label" style={{ color: labelColor }}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <Control
        id={id || name}
        name={name}
        type={Control === 'input' ? type : undefined}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        ref={ref}
        className={clsx('form-field__control', controlClassName)}
        style={{
          border: controlBorder,
          background: controlBackground,
          color: controlColor,
          fontFamily: theme.typography.fonts.body,
        }}
        {...controlProps}
      >
        {Control === 'select' && options
          ? options.map((option) => (
              <option key={option.value || option} value={option.value || option}>
                {option.label || option}
              </option>
            ))
          : children}
      </Control>
      {helperText && (
        <p className="form-field__helper" style={{ color: helperColor }}>
          {helperText}
        </p>
      )}
    </div>
  );
});

export default FormField;
