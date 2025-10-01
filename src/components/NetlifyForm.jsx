import { useState } from 'react'

/**
 * NetlifyForm - Wrapper component for Netlify Forms in React SPAs
 *
 * This component handles the complexity of integrating Netlify Forms with React:
 * 1. Renders a hidden static HTML form for Netlify's build-time detection
 * 2. Handles AJAX form submission with proper URL encoding
 * 3. Preserves your existing form design through children render prop
 *
 * @param {string} name - Unique form name (required for Netlify)
 * @param {string} action - Success redirect path (default: "/thank-you")
 * @param {function} children - Render prop function receiving form state
 *
 * Usage:
 * <NetlifyForm name="contact" action="/thank-you">
 *   {({ handleSubmit, submitting, success }) => (
 *     <form onSubmit={handleSubmit} className="your-form-class">
 *       <input type="text" name="name" required />
 *       <button type="submit" disabled={submitting}>Send</button>
 *     </form>
 *   )}
 * </NetlifyForm>
 */
export default function NetlifyForm({
  name,
  action = '/thank-you',
  children
}) {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  // Extract all form fields from the rendered children to create hidden form
  // This is done by rendering children once to analyze the structure
  const getFormFields = () => {
    const fields = []
    const extractFields = (element) => {
      if (!element || !element.props) return

      // Check if this is an input, textarea, or select
      if (['input', 'textarea', 'select'].includes(element.type)) {
        const { name, type } = element.props
        if (name && type !== 'submit' && type !== 'button') {
          fields.push({ name, type: type || 'text' })
        }
      }

      // Recursively check children
      if (element.props.children) {
        const children = Array.isArray(element.props.children)
          ? element.props.children
          : [element.props.children]
        children.forEach(extractFields)
      }
    }

    // Render children to extract field structure
    const rendered = children({ handleSubmit: () => {}, submitting: false, success: false })
    extractFields(rendered)
    return fields
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.target)
    const data = {}

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
      data[key] = value
    }

    // Add form-name for Netlify
    data['form-name'] = name

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data)
      })

      if (response.ok) {
        setSuccess(true)
        // Redirect to success page after a brief delay
        setTimeout(() => {
          window.location.href = action
        }, 500)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError('There was an error submitting the form. Please try again.')
      setSubmitting(false)
    }
  }

  const formFields = getFormFields()

  return (
    <>
      {/* Hidden form for Netlify build-time detection */}
      <form
        name={name}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
        aria-hidden="true"
      >
        <input type="hidden" name="form-name" value={name} />
        <input type="hidden" name="bot-field" />
        {formFields.map(field => (
          field.type === 'textarea'
            ? <textarea key={field.name} name={field.name}></textarea>
            : field.type === 'select'
            ? <select key={field.name} name={field.name}><option value=""></option></select>
            : <input key={field.name} type={field.type} name={field.name} />
        ))}
      </form>

      {/* Render actual form via children render prop */}
      {children({
        handleSubmit,
        submitting,
        success,
        error
      })}
    </>
  )
}
