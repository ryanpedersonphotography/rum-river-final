import { useEffect } from 'react'

export default function FAQAccordionStandalone() {
  useEffect(() => {
    // FAQ accordion click handler
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // Toggle active class
        const wasActive = item.classList.contains('active')

        // Close all items
        faqItems.forEach(i => i.classList.remove('active'))

        // Open clicked item if it wasn't active
        if (!wasActive) {
          item.classList.add('active')
        }
      })
    })

    return () => {
      faqItems.forEach(item => {
        const newItem = item.cloneNode(true)
        item.parentNode?.replaceChild(newItem, item)
      })
    }
  }, [])

  return (
    <>
      {/* ID: FAQ_ACCORDION_001 - FAQ Accordion Pattern */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="faq-header">
            <p className="script-font">Questions?</p>
            <h2>Everything You Need to Know</h2>
          </div>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can we bring our own vendors?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Absolutely! We believe in giving you complete creative freedom. Bring your preferred caterers, florists, photographers, and musicians. We also have a list of trusted local vendors if you need recommendations.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What's included with the venue rental?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Your rental includes exclusive use of our historic barn, ceremony sites, bridal suite, groom's quarters, tables, chairs, and access to our 400-acre property for photos. We also provide setup and breakdown assistance.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do you have indoor and outdoor options?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Yes! Our property offers multiple ceremony sites including the vineyard overlook, oak grove, and brookside garden. Our barn provides a beautiful indoor space that can be decorated to match any theme or season.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>How far in advance should we book?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>We recommend booking 12-18 months in advance, especially for peak season dates (May through October). However, we sometimes have last-minute availability, so don't hesitate to call us at 320-492-8584.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>FAQ Accordion Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the interactive FAQ accordion above</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`<!-- FAQ Accordion Section -->
<section id="faq" className="faq-section">
  <div className="container">
    <div className="faq-header">
      <p className="script-font">Questions?</p>
      <h2>Everything You Need to Know</h2>
    </div>
    
    <div className="faq-container">
      <!-- FAQ Item -->
      <div className="faq-item">
        <div className="faq-question">
          <h3>Can we bring our own vendors?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>Absolutely! We believe in giving you complete creative freedom. 
             Bring your preferred caterers, florists, photographers, and musicians. 
             We also have a list of trusted local vendors if you need recommendations.</p>
        </div>
      </div>
      
      <!-- Additional FAQ Items -->
      <div className="faq-item">
        <div className="faq-question">
          <h3>What's included with the venue rental?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>Your rental includes exclusive use of our historic barn, ceremony sites, 
             bridal suite, groom's quarters, tables, chairs, and access to our 
             400-acre property for photos. We also provide setup and breakdown assistance.</p>
        </div>
      </div>
      
      <div className="faq-item">
        <div className="faq-question">
          <h3>Do you have indoor and outdoor options?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>Yes! Our property offers multiple ceremony sites including the vineyard 
             overlook, oak grove, and brookside garden. Our barn provides a beautiful 
             indoor space that can be decorated to match any theme or season.</p>
        </div>
      </div>
      
      <div className="faq-item">
        <div className="faq-question">
          <h3>How far in advance should we book?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>We recommend booking 12-18 months in advance, especially for peak season 
             dates (May through October). However, we sometimes have last-minute 
             availability, so don't hesitate to call us at 320-492-8584.</p>
        </div>
      </div>
    </div>
  </div>
</section>`}
            </pre>
          </div>

          {/* JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>JavaScript Functionality</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// React Component with FAQ Accordion Logic
import { useEffect } from 'react'

// FAQ data structure
const faqData = [
  {
    id: 1,
    question: "Can we bring our own vendors?",
    answer: "Absolutely! We believe in giving you complete creative freedom. Bring your preferred caterers, florists, photographers, and musicians. We also have a list of trusted local vendors if you need recommendations."
  },
  {
    id: 2,
    question: "What's included with the venue rental?",
    answer: "Your rental includes exclusive use of our historic barn, ceremony sites, bridal suite, groom's quarters, tables, chairs, and access to our 400-acre property for photos. We also provide setup and breakdown assistance."
  },
  {
    id: 3,
    question: "Do you have indoor and outdoor options?",
    answer: "Yes! Our property offers multiple ceremony sites including the vineyard overlook, oak grove, and brookside garden. Our barn provides a beautiful indoor space that can be decorated to match any theme or season."
  },
  {
    id: 4,
    question: "How far in advance should we book?",
    answer: "We recommend booking 12-18 months in advance, especially for peak season dates (May through October). However, we sometimes have last-minute availability, so don't hesitate to call us at 320-492-8584."
  }
]

export default function FAQAccordion() {
  useEffect(() => {
    // FAQ accordion click handler
    const faqItems = document.querySelectorAll('.faq-item')
    
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // Toggle active class
        const wasActive = item.classList.contains('active')

        // Close all items (accordion behavior)
        faqItems.forEach(i => i.classList.remove('active'))

        // Open clicked item if it wasn't active
        if (!wasActive) {
          item.classList.add('active')
        }
      })
    })

    // Cleanup event listeners on unmount
    return () => {
      faqItems.forEach(item => {
        const newItem = item.cloneNode(true)
        item.parentNode?.replaceChild(newItem, item)
      })
    }
  }, [])

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <p className="script-font">Questions?</p>
          <h2>Everything You Need to Know</h2>
        </div>
        
        <div className="faq-container">
          {faqData.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Alternative React Hook Implementation
import { useState } from 'react'

export function FAQAccordionWithState() {
  const [activeItem, setActiveItem] = useState(null)

  const toggleItem = (itemId) => {
    setActiveItem(activeItem === itemId ? null : itemId)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <p className="script-font">Questions?</p>
          <h2>Everything You Need to Know</h2>
        </div>
        
        <div className="faq-container">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={\`faq-item \${activeItem === faq.id ? 'active' : ''}\`}
              onClick={() => toggleItem(faq.id)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {activeItem === faq.id ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Keyboard Accessibility Enhancement
const handleKeyDown = (event, itemId) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggleItem(itemId)
  }
}

// Add to JSX:
// <div 
//   className="faq-item" 
//   onClick={() => toggleItem(faq.id)}
//   onKeyDown={(e) => handleKeyDown(e, faq.id)}
//   tabIndex={0}
//   role="button"
//   aria-expanded={activeItem === faq.id}
// >`}
            </pre>
          </div>

          {/* CSS Code */}
          <div>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>CSS Styles</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* FAQ Accordion Section */
.faq-section {
  background: white;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* FAQ Header */
.faq-header {
  text-align: center;
  margin-bottom: 4rem;
}

.faq-header .script-font {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--dusty-rose);
  margin-bottom: 1rem;
  display: block;
}

.faq-header h2 {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--warm-walnut);
  margin-bottom: 0;
}

/* FAQ Container */
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

/* FAQ Items */
.faq-item {
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item:hover {
  background: rgba(212, 165, 165, 0.05);
}

/* FAQ Question */
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
}

.faq-question h3 {
  font-family: var(--font-body);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--warm-walnut);
  margin: 0;
  padding-right: 2rem;
  line-height: 1.4;
}

/* FAQ Toggle Icon */
.faq-toggle {
  font-size: 1.5rem;
  color: var(--dusty-rose);
  font-weight: 300;
  transition: all 0.3s ease;
  min-width: 24px;
  text-align: center;
}

.faq-item.active .faq-toggle {
  transform: rotate(45deg);
  color: var(--warm-walnut);
}

/* FAQ Answer */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: 0;
}

.faq-item.active .faq-answer {
  max-height: 500px;
  opacity: 1;
  padding: 0 1.5rem 2rem 1.5rem;
}

.faq-answer p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--sage-green);
  margin: 0;
  padding-top: 0.5rem;
}

/* Active State */
.faq-item.active {
  background: rgba(212, 165, 165, 0.08);
}

.faq-item.active .faq-question {
  padding-bottom: 1rem;
}

.faq-item.active .faq-question h3 {
  color: var(--dusty-rose);
}

/* Accessibility */
.faq-item:focus {
  outline: 2px solid var(--dusty-rose);
  outline-offset: -2px;
}

/* Animation Enhancement */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-item.active .faq-answer {
  animation: fadeInUp 0.4s ease;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .faq-section {
    padding: 60px 0;
  }
  
  .faq-header h2 {
    font-size: 2.5rem;
  }
  
  .faq-question {
    padding: 1.5rem 1rem;
  }
  
  .faq-question h3 {
    font-size: 1.125rem;
    padding-right: 1rem;
  }
  
  .faq-item.active .faq-answer {
    padding: 0 1rem 1.5rem 1rem;
  }
  
  .faq-answer p {
    font-size: 0.9rem;
  }
}

/* Alternative Multi-Open Accordion */
.faq-container.multi-open .faq-item.active .faq-answer {
  /* Allows multiple items to be open simultaneously */
  max-height: none;
}

/* Smooth Scroll Animation */
.faq-item {
  scroll-margin-top: 100px;
}

/* Focus States for Keyboard Navigation */
.faq-item[tabindex="0"]:focus {
  background: rgba(212, 165, 165, 0.1);
  outline: 2px solid var(--dusty-rose);
  outline-offset: -2px;
}

/* Icon Alternatives (if using icons instead of +/-) */
.faq-toggle.icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-toggle.icon::before {
  content: '▼';
  font-size: 0.875rem;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-toggle.icon::before {
  transform: rotate(180deg);
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}