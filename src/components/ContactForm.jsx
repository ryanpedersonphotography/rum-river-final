import clsx from 'clsx'
import NetlifyForm from './NetlifyForm'
import FormSubmitButton from './FormSubmitButton'
import SectionHeader from './SectionHeader'
import FormRow from './forms/FormRow'
import FormField from './forms/FormField'
import useTheme from '../theme/useTheme'

/**
 * ContactForm - Standalone contact form with layout variations
 * 
 * Props:
 * - layout: 'container' | 'inline' | 'minimal' (default: 'container')
 *   - 'container': White container with header (current design)
 *   - 'inline': No container, form fields only
 *   - 'minimal': Compact single-row layout
 * - scriptAccent: string (optional - cursive text above title)
 * - title: string (default: "Start Planning Your Perfect Day")
 * - description: string (default: "We'd love to show you around...")
 * - formName: string (required for Netlify)
 * - redirectPath: string (default: '/thank-you')
 */
export default function ContactForm({
  layout = 'container',
  scriptAccent = 'Schedule Your Tour',
  title = "Start Planning Your Perfect Day",
  description = "We'd love to show you around our beautiful venue and discuss your wedding vision.",
  formName = 'contact-form',
  redirectPath = '/thank-you'
}) {
  const theme = useTheme();
  const errorStyles = {
    background: 'rgba(212, 165, 165, 0.1)',
    border: '1px solid rgba(212, 165, 165, 0.3)',
    color: theme.colors.semantic.text,
  };

  const eventTypeOptions = [
    { value: '', label: 'Select Type' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'engagement', label: 'Engagement Party' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'other', label: 'Other Celebration' },
  ];

  const renderStandardForm = () => (
    <NetlifyForm name={formName} action={redirectPath}>
      {({ handleSubmit, submitting, error, honeypotField }) => (
        <form className="form-stack" onSubmit={handleSubmit}>
          {honeypotField}
          {error && (
            <div className="form-feedback" style={errorStyles}>
              {error}
            </div>
          )}

          <FormRow columns={2}>
            <FormField
              name="firstName"
              label="First Name"
              required
              disabled={submitting}
            />
            <FormField
              name="lastName"
              label="Last Name"
              required
              disabled={submitting}
            />
          </FormRow>

          <FormRow columns={2}>
            <FormField
              name="email"
              label="Email Address"
              type="email"
              required
              disabled={submitting}
            />
            <FormField
              name="phone"
              label="Phone Number"
              type="tel"
              placeholder="Optional"
              disabled={submitting}
            />
          </FormRow>

          <FormRow columns={2}>
            <FormField
              name="eventDate"
              label="Preferred Event Date"
              type="date"
              disabled={submitting}
            />
            <FormField
              name="eventType"
              label="Event Type"
              component="select"
              options={eventTypeOptions}
              disabled={submitting}
            />
          </FormRow>

          <FormField
            name="message"
            label="Tell Us About Your Vision"
            component="textarea"
            rows={4}
            placeholder="Share any special requests or questions..."
            disabled={submitting}
          />

          <div className="form-actions">
            <FormSubmitButton
              submitting={submitting}
              submitText="Schedule Your Tour"
              loadingText="SCHEDULING..."
            />
          </div>
        </form>
      )}
    </NetlifyForm>
  );

  const renderMinimalForm = () => (
    <NetlifyForm name={formName} action={redirectPath}>
      {({ handleSubmit, submitting, error, honeypotField }) => (
        <form className="form-stack" onSubmit={handleSubmit}>
          {honeypotField}
          {error && (
            <div className="form-feedback" style={errorStyles}>
              {error}
            </div>
          )}

          <FormRow columns="auto" minColumnWidth="200px">
            <FormField
              name="name"
              label="Name"
              required
              disabled={submitting}
            />
            <FormField
              name="email"
              label="Email"
              type="email"
              required
              disabled={submitting}
            />
            <FormField
              name="phone"
              label="Phone"
              type="tel"
              placeholder="Optional"
              disabled={submitting}
            />
          </FormRow>

          <div className="form-actions">
            <FormSubmitButton
              submitting={submitting}
              submitText="Schedule Tour"
              loadingText="SENDING..."
            />
          </div>
        </form>
      )}
    </NetlifyForm>
  );

  const header =
    layout === 'minimal' ? null : (
      <SectionHeader
        eyebrow={scriptAccent}
        title={title}
        description={description}
        align="center"
      />
    );

  if (layout === 'container') {
    return (
      <div className="cta-contact-container">
        {header}
        {renderStandardForm()}
      </div>
    );
  }

  if (layout === 'inline') {
    return (
      <div className="content-wrapper">
        {header}
        {renderStandardForm()}
      </div>
    );
  }

  return (
    <div className={clsx('content-wrapper', 'contact-form--minimal')}>
      {renderMinimalForm()}
    </div>
  );
}
