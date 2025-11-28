/**
 * Sanity Preview and Development Utilities
 * Tools for previewing draft content and development helpers
 */

import React from 'react'
import { sanityClient } from './sanityClient'

// Create a preview client for draft content
export const previewClient = sanityClient.withConfig({
  useCdn: false,
  token: import.meta.env.VITE_SANITY_PREVIEW_TOKEN,
  perspective: 'previewDrafts'
})

/**
 * Check if we're in preview mode
 */
export function isPreviewMode() {
  return (
    typeof window !== 'undefined' &&
    (window.location.search.includes('preview=true') ||
     window.location.hostname === 'localhost' ||
     import.meta.env.DEV)
  )
}

/**
 * Get the appropriate client based on preview mode
 */
export function getClient() {
  return isPreviewMode() ? previewClient : sanityClient
}

/**
 * Preview-aware fetch function
 */
export async function fetchWithPreview(query, params = {}) {
  const client = getClient()
  
  try {
    const data = await client.fetch(query, params)
    return {
      data,
      preview: isPreviewMode(),
      error: null
    }
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return {
      data: null,
      preview: isPreviewMode(),
      error: error.message
    }
  }
}

/**
 * Preview bar component for development
 */
export function PreviewBar({ onExitPreview }) {
  if (!isPreviewMode()) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#f7fafc',
      borderBottom: '1px solid #e2e8f0',
      padding: '8px 16px',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '14px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#48bb78'
        }} />
        <span>
          Preview Mode - You are viewing draft content
        </span>
      </div>
      
      <div style={{ display: 'flex', gap: '12px' }}>
        <a
          href={`${import.meta.env.VITE_SANITY_STUDIO_URL || 'http://localhost:3333'}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#4299e1',
            textDecoration: 'none'
          }}
        >
          Open Studio
        </a>
        
        {onExitPreview && (
          <button
            onClick={onExitPreview}
            style={{
              background: 'none',
              border: 'none',
              color: '#e53e3e',
              cursor: 'pointer',
              padding: 0
            }}
          >
            Exit Preview
          </button>
        )}
      </div>
    </div>
  )
}

/**
 * Development helpers for debugging Sanity data
 */
export const dev = {
  /**
   * Log Sanity data in a readable format
   */
  logData(data, label = 'Sanity Data') {
    if (import.meta.env.DEV) {
      console.group(`🔍 ${label}`)
      console.log(JSON.stringify(data, null, 2))
      console.groupEnd()
    }
  },

  /**
   * Validate block data structure
   */
  validateBlocks(blocks, expectedTypes = []) {
    if (!Array.isArray(blocks)) {
      console.warn('Blocks should be an array, got:', typeof blocks)
      return false
    }

    const issues = []
    
    blocks.forEach((block, index) => {
      if (!block._type) {
        issues.push(`Block ${index}: Missing _type`)
      } else if (expectedTypes.length > 0 && !expectedTypes.includes(block._type)) {
        issues.push(`Block ${index}: Unexpected type "${block._type}"`)
      }
    })

    if (issues.length > 0) {
      console.warn('Block validation issues:', issues)
      return false
    }

    return true
  },

  /**
   * Check for missing required fields
   */
  checkRequired(data, requiredFields = []) {
    const missing = requiredFields.filter(field => {
      const value = field.split('.').reduce((obj, key) => obj?.[key], data)
      return value === undefined || value === null || value === ''
    })

    if (missing.length > 0) {
      console.warn('Missing required fields:', missing)
      return false
    }

    return true
  },

  /**
   * Performance timing for Sanity queries
   */
  async timeQuery(query, params = {}, label = 'Query') {
    if (!import.meta.env.DEV) {
      return sanityClient.fetch(query, params)
    }

    const start = performance.now()
    try {
      const result = await sanityClient.fetch(query, params)
      const end = performance.now()
      console.log(`⏱️ ${label}: ${(end - start).toFixed(2)}ms`)
      return result
    } catch (error) {
      const end = performance.now()
      console.error(`❌ ${label} failed after ${(end - start).toFixed(2)}ms:`, error)
      throw error
    }
  },

  /**
   * Generate mock data for testing
   */
  generateMockPage(type = 'homepage') {
    const mockPages = {
      homepage: {
        _type: 'page',
        title: 'Homepage (Mock)',
        slug: { current: 'homepage' },
        contentBlocks: [
          {
            _type: 'heroBlock',
            scriptAccent: 'Mock Data',
            titleLine1: 'Test',
            titleLine2: 'Homepage',
            description: 'This is mock data for testing purposes.',
            ctaText: 'Test CTA',
            ctaLink: '/test'
          }
        ]
      },
      events: {
        _type: 'page',
        title: 'Events (Mock)',
        slug: { current: 'events' },
        contentBlocks: [
          {
            _type: 'heroBlock',
            scriptAccent: 'Mock Events',
            titleLine1: 'Test',
            titleLine2: 'Events',
            description: 'Mock events page for testing.',
            ctaText: 'Test Events',
            ctaLink: '/test'
          }
        ]
      }
    }

    return mockPages[type] || mockPages.homepage
  }
}

/**
 * Error boundary for Sanity components
 */
export class SanityErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Sanity Error Boundary caught an error:', error, errorInfo)
    
    // Log to external service in production
    if (!import.meta.env.DEV && typeof window !== 'undefined') {
      // Send to error tracking service
      if (window.Sentry) {
        window.Sentry.captureException(error, { extra: errorInfo })
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          backgroundColor: '#fef5e7'
        }}>
          <h3>Something went wrong</h3>
          <p>Unable to load content from Sanity CMS</p>
          {import.meta.env.DEV && (
            <details style={{ marginTop: '1rem', textAlign: 'left' }}>
              <summary>Error Details (Dev)</summary>
              <pre style={{ 
                fontSize: '12px', 
                overflow: 'auto',
                backgroundColor: '#f7fafc',
                padding: '1rem',
                borderRadius: '4px'
              }}>
                {this.state.error?.toString()}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

/**
 * Higher-order component for Sanity error handling
 */
export function withSanityErrorBoundary(Component, fallback) {
  return function WrappedComponent(props) {
    return (
      <SanityErrorBoundary fallback={fallback}>
        <Component {...props} />
      </SanityErrorBoundary>
    )
  }
}

/**
 * Hook for handling Sanity errors gracefully
 */
export function useSanityErrorHandler() {
  const handleError = (error, context = 'Sanity operation') => {
    console.error(`${context}:`, error)
    
    // Different handling based on error type
    if (error?.message?.includes('Rate limit')) {
      return {
        type: 'rate_limit',
        message: 'Too many requests. Please try again in a moment.',
        retry: true
      }
    }
    
    if (error?.message?.includes('Network')) {
      return {
        type: 'network',
        message: 'Connection issue. Please check your internet connection.',
        retry: true
      }
    }
    
    if (error?.message?.includes('Not found')) {
      return {
        type: 'not_found',
        message: 'Content not found.',
        retry: false
      }
    }
    
    return {
      type: 'generic',
      message: 'Something went wrong. Please try again.',
      retry: true
    }
  }

  return { handleError }
}