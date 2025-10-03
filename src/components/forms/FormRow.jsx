import clsx from 'clsx';
import useTheme from '../../theme/useTheme';

const columnClassMap = {
  1: 'form-row--single',
  2: 'form-row--two',
  3: 'form-row--three',
};

const FormRow = ({
  columns = 2,
  gap = 'lg',
  stackOnMobile = true,
  minColumnWidth,
  className,
  style,
  children,
}) => {
  const theme = useTheme();
  const resolvedGap = theme.spacing[gap] || gap;
  const columnClass = columnClassMap[columns] || (columns === 'auto' ? 'form-row--auto' : null);
  const inlineStyle = {
    '--form-row-gap': resolvedGap,
    ...(minColumnWidth ? { '--form-row-min-width': minColumnWidth } : {}),
    ...style,
  };

  return (
    <div
      className={clsx(
        'form-row',
        columnClass,
        stackOnMobile && 'form-row--stack',
        className
      )}
      style={inlineStyle}
    >
      {children}
    </div>
  );
};

export default FormRow;
