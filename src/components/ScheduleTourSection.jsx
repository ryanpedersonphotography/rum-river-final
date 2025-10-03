import SectionHeader from './SectionHeader';
import ScheduleTourForm from './ScheduleTourForm';

const ScheduleTourSection = ({
  id,
  className = '',
  formName = 'schedule-tour',
  title = "Let's Start Planning Together",
  subtitle = 'Schedule Your Tour',
  description = "Ready to see our beautiful venue in person? Let's find the perfect time for your visit.",
  formProps,
}) => {
  return (
    <section id={id} className={`cta-contact-section ${className}`.trim()}>
      <div className="cta-contact-header">
        <SectionHeader
          eyebrow={subtitle}
          title={title}
          description={description}
          align="center"
        />
      </div>
      <ScheduleTourForm
        formName={formName}
        showHeader={false}
        withSection={false}
        {...formProps}
      />
    </section>
  );
};

export default ScheduleTourSection;
