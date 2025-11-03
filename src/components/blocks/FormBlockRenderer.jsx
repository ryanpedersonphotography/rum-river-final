import ScheduleTourForm from '../ScheduleTourForm'

/**
 * FormBlockRenderer Component
 * Renders form section from Sanity CMS data
 */
export default function FormBlockRenderer({ data, blockIndex }) {
  const {
    title = 'Start Planning Your Perfect Day',
    subtitle = 'Schedule Your Tour',
    description = 'We\'d love to show you around our beautiful venue and discuss your wedding vision.',
    formType = 'tour',
    formName = 'schedule-tour',
    submitText = 'Schedule Tour',
    loadingText = 'SCHEDULING...',
    redirectPath = '/thank-you',
    sectionStyle = 'cta-contact-section',
    lightTheme = false,
    showHeader = true,
    customFields = []
  } = data

  // Build section style
  const sectionClasses = sectionStyle === 'cta-contact-section' 
    ? sectionStyle 
    : `section ${sectionStyle}`

  // Determine form ID based on form type and block index
  const formId = formType === 'tour' ? 'lets-connect-form' : `form-${blockIndex}`

  return (
    <section id={formId} className={sectionClasses}>
      <ScheduleTourForm
        formName={formName}
        redirectPath={redirectPath}
        title={title}
        subtitle={subtitle}
        description={description}
        submitText={submitText}
        loadingText={loadingText}
        showHeader={showHeader}
        lightTheme={lightTheme}
        formType={formType}
        customFields={customFields}
        className=""
      />
    </section>
  )
}