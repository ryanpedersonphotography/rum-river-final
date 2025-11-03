import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanityClient'

export default function FooterDebug() {
  const [status, setStatus] = useState('Loading...')
  const [data, setData] = useState(null)

  useEffect(() => {
    const QUERY = `*[_type == "siteSettings"][0]{
      "hasFooter": defined(footerSettings),
      "brandTitle": footerSettings.brandSection.title,
      "contactPhone": footerSettings.contactSection.phone
    }`
    
    sanityClient.fetch(QUERY)
      .then(result => {
        setData(result)
        setStatus('Footer data loaded!')
      })
      .catch(err => {
        setStatus(`Error: ${err.message}`)
      })
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      background: 'white',
      border: '2px solid red',
      padding: '10px',
      zIndex: 9999,
      fontFamily: 'monospace',
      fontSize: '12px',
      maxWidth: '300px'
    }}>
      <strong>Footer Debug:</strong><br />
      Status: {status}<br />
      {data && (
        <>
          Has Footer: {data.hasFooter ? '✓' : '✗'}<br />
          Brand: {data.brandTitle || 'N/A'}<br />
          Phone: {data.contactPhone || 'N/A'}
        </>
      )}
    </div>
  )
}