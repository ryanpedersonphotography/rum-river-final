import React from 'react';
import NetlifyForm from './NetlifyForm';
import FormSubmitButton from './FormSubmitButton';
import SectionHeader from './SectionHeader';
import FormRow from './forms/FormRow';
import FormField from './forms/FormField';
import useTheme from '../theme/useTheme';

/**
 * ScheduleTourForm Component
 * Reusable schedule tour form for "Let's Start Planning Together" sections
 * Used across HomePage, ContactPage, and other pages needing tour scheduling
 */
export const ScheduleTourForm = ({
  formName = 'schedule-tour',
  redirectPath = '/thank-you',
  title = "Start Planning Your Perfect Day",
  subtitle = "Schedule Your Tour",
  description = "We'd love to show you around our beautiful venue and discuss your wedding vision.",
  submitText = 'Schedule Tour',
  loadingText = 'SCHEDULING...',
  className = '',
  showHeader = true
}) => {
  const theme = useTheme();
  const errorStyles = {
    background: 'rgba(212, 165, 165, 0.1)',
    border: '1px solid rgba(212, 165, 165, 0.3)',
    color: theme.colors.semantic.text,
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

  const guestCountOptions = [
    { value: '', label: 'Select Range' },
    { value: '0-50', label: '0-50 Guests' },
    { value: '50-100', label: '50-100 Guests' },
    { value: '100-150', label: '100-150 Guests' },
    { value: '150-200', label: '150-200 Guests' },
    { value: '200+', label: '200+ Guests' },
  ];

  return (
    <section className={`cta-contact-section ${className}`.trim()}>
      <div className="cta-contact-container">
        {showHeader && (
          <SectionHeader
            eyebrow={subtitle}
            title={title}
            description={description}
            align="center"
          />
        )}

        <NetlifyForm name={formName} action={redirectPath}>
          {({ handleSubmit, submitting, error, honeypotField }) => (
            <form className="form-stack" onSubmit={handleSubmit}>
              {honeypotField}
              {error && (
                <div className="form-feedback" style={errorStyles}>
                  {error}
                </div>
              )}

              <FormField
                name="name"
                label="Your Name"
                required
                disabled={submitting}
              />

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
                  required
                  disabled={submitting}
                />
              </FormRow>

              <FormRow columns={2}>
                <FormField
                  name="proposedEventDate"
                  label="Proposed Event Date"
                  type="date"
                  disabled={submitting}
                />
                <FormField
                  name="preferredTourDate"
                  label="Preferred Tour Date"
                  type="date"
                  required
                  disabled={submitting}
                />
              </FormRow>

              <FormRow columns={2}>
                <FormField
                  name="preferredTourTime"
                  label="Preferred Tour Time"
                  component="select"
                  options={tourTimeOptions}
                  disabled={submitting}
                />
                <FormField
                  name="guestCount"
                  label="Estimated Guest Count"
                  component="select"
                  options={guestCountOptions}
                  disabled={submitting}
                />
              </FormRow>

              <FormField
                name="message"
                label="Additional Information or Questions"
                component="textarea"
                rows={4}
                placeholder="Tell us about your event plans or any specific questions..."
                disabled={submitting}
              />

              <div className="form-actions">
                <FormSubmitButton
                  submitting={submitting}
                  submitText={submitText}
                  loadingText={loadingText}
                />
              </div>
            </form>
          )}
        </NetlifyForm>
      </div>
    </section>
  );
};

export default ScheduleTourForm;
