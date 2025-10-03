import clsx from 'clsx';

const SectionHeader = ({
  eyebrow,
  title,
  titleAs: TitleTag = 'h2',
  description,
  align = 'center',
  children,
  className,
  style,
}) => {
  return (
    <div className={clsx('section-header', align && `section-header--${align}`, align, className)} style={style}>
      {eyebrow && <div className="script-accent">{eyebrow}</div>}
      {title && <TitleTag className="section-title">{title}</TitleTag>}
      {description && <p className="lead">{description}</p>}
      {children}
    </div>
  );
};

export default SectionHeader;
