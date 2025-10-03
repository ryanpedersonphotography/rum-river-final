import clsx from 'clsx';

const HeroSection = ({
  image,
  overlayStart = 'rgba(0, 0, 0, 0.45)',
  overlayEnd = 'rgba(0, 0, 0, 0.45)',
  tone = 'dark',
  className,
  children,
  ...rest
}) => {
  return (
    <section
      className={clsx('page-hero', tone === 'dark' && 'dark-section', className)}
      style={{
        '--hero-image': image ? `url("${image}")` : undefined,
        '--hero-overlay-start': overlayStart,
        '--hero-overlay-end': overlayEnd,
      }}
      {...rest}
    >
      <div className="content-wrapper">
        <div className="page-hero-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
