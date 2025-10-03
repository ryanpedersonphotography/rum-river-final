import clsx from 'clsx';
import NetlifyForm from './NetlifyForm';
import FormSubmitButton from './FormSubmitButton';
import Section from './Section';
import Card from './Card';
import SectionHeader from './SectionHeader';
import FormRow from './forms/FormRow';
import FormField from './forms/FormField';
import useTheme from '../theme/useTheme';

const backgroundToneMap = {
  cream: { tone: 'cream' },
  ivory: { tone: 'default', background: undefined },
  blush: { tone: 'blush' },
  walnut: { tone: 'walnut' },
  forest: { tone: 'forest' },
  gradient: { tone: 'walnutGradient' },
};

const tourTimeOptions = [
  { value: '', label: 'Select Time' },
  { value: '10:00 AM', label: '10:00 AM' },
  { value: '11:00 AM', label: '11:00 AM' },
  { value: '1:00 PM', label: '1:00 PM' },
  { value: '2:00 PM', label: '2:00 PM' },
  { value: '3:00 PM', label: '3:00 PM' },
  { value: '4:00 PM', label: '4:00 PM' },
];

const eventTypeOptions = [
  { value: '', label: 'Select Type' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'engagement', label: 'Engagement Party' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'other', label: 'Other Celebration' },
];

const guestCountOptions = [
  { value: '', label: 'Select Range' },
  { value: '0-50', label: '0-50 Guests' },
  { value: '50-100', label: '50-100 Guests' },
  { value: '100-150', label: '100-150 Guests' },
  { value: '150-200', label: '150-200 Guests' },
  { value: '200+', label: '200+ Guests' },
];

export default function CTAFormSection({
  variant = 'light',
  background = null,
  containerStyle = 'white',
  formSize = 'full',
  scriptAccent = '',
  title = "Start Planning Your Perfect Day",
  description = "We'd love to show you around our beautiful venue and discuss your wedding vision.",
  submitText = 'Schedule Tour',
  formName = 'cta-form',
  redirectPath = '/thank-you',
  className = ''
}) {
  const theme = useTheme();
  const isDark = variant === 'dark';

  const sectionConfig = background
    ? backgroundToneMap[background] || {}
    : { tone: isDark ? 'walnutGradient' : 'cream' };

  const ContainerComponent = containerStyle === 'transparent' ? 'div' : Card;
  const containerVariant = containerStyle === 'glass' ? 'glass' : 'soft';

  const containerProps =
    containerStyle === 'transparent'
      ? { className: 'cta-contact-container' }
      : {
          className: 'cta-contact-container',
          variant: containerVariant,
        };

  const errorStyles = {
    background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(212,165,165,0.1)',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(212, 165, 165, 0.3)'}`,
    color: isDark ? theme.colors.semantic.textOnDark : theme.colors.semantic.text,
  };

  const renderMiniForm = (submitting) => (
    <>
      <FormRow columns="auto" minColumnWidth="220px">
        <FormField
          name="name"
          label="Name"
          required
          variant={variant}
          disabled={submitting}
        />
        <FormField
          name="email"
          label="Email"
          type="email"
          required
          variant={variant}
          disabled={submitting}
        />
        <FormField
          name="phone"
          label="Phone"
          type="tel"
          placeholder="Optional"
          variant={variant}
          disabled={submitting}
        />
      </FormRow>
      <div className="form-actions">
        <FormSubmitButton
          submitting={submitting}
          submitText={submitText}
          loadingText="SCHEDULING..."
        />
      </div>
    </>
  );

  const renderFullForm = (submitting) => (
    <>
      <FormField
        name="name"
        label="Your Name"
        required
        variant={variant}
        disabled={submitting}
      />
      <FormRow columns={2}>
        <FormField
          name="email"
          label="Email Address"
          type="email"
          required
          variant={variant}
          disabled={submitting}
        />
        <FormField
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="Optional"
          variant={variant}
          disabled={submitting}
        />
      </FormRow>
      <FormRow columns={2}>
        <FormField
          name="preferred_date"
          label="Preferred Event Date"
          type="date"
          variant={variant}
          disabled={submitting}
        />
        <FormField
          name="preferred_time"
          label="Preferred Tour Time"
          component="select"
          options={tourTimeOptions}
          variant={variant}
          disabled={submitting}
        />
      </FormRow>
      <FormRow columns={2}>
        <FormField
          name="event_type"
          label="Event Type"
          component="select"
          options={eventTypeOptions}
          variant={variant}
          disabled={submitting}
        />
        <FormField
          name="guest_count"
          label="Estimated Guest Count"
          component="select"
          options={guestCountOptions}
          variant={variant}
          disabled={submitting}
        />
      </FormRow>
      <FormField
        name="message"
        label="Tell Us About Your Vision"
        component="textarea"
        rows={4}
        placeholder="Share any special requests or questions..."
        variant={variant}
        disabled={submitting}
      />
      <div className="form-actions">
        <FormSubmitButton
          submitting={submitting}
          submitText={submitText}
          loadingText="SCHEDULING..."
        />
      </div>
    </>
  );

  return (
    <Section
      tone={sectionConfig.tone}
      background={sectionConfig.background}
      className={clsx('cta-contact-section', className)}
      id="lets-connect-form"
    >
      <div className="content-wrapper">
        <ContainerComponent {...containerProps}>
          <SectionHeader
            eyebrow={scriptAccent}
            title={title}
            description={description}
            align="center"
          />
          <NetlifyForm name={formName} action={redirectPath}>
            {({ handleSubmit, submitting, error, honeypotField }) => (
              <form className="form-stack" onSubmit={handleSubmit}>
                {honeypotField}
                {error && (
                  <div className="form-feedback" style={errorStyles}>
                    {error}
                  </div>
                )}
                {formSize === 'mini'
                  ? renderMiniForm(submitting)
                  : renderFullForm(submitting)}
              </form>
            )}
          </NetlifyForm>
        </ContainerComponent>
      </div>
    </Section>
  );
}
