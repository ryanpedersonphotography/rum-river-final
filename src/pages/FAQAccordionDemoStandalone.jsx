import React, { useState } from 'react';

export default function FAQAccordionDemoStandalone() {
  const [activeItems, setActiveItems] = useState({});

  const toggleItem = (sectionId, itemId) => {
    const key = `${sectionId}-${itemId}`;
    setActiveItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqData = [
    {
      question: "Can we bring our own vendors?",
      answer: "Absolutely! We believe in giving you complete creative freedom. Bring your preferred caterers, florists, photographers, and musicians. We also have a list of trusted local vendors if you need recommendations."
    },
    {
      question: "What's included with the venue rental?",
      answer: "Your rental includes exclusive use of our historic barn, ceremony sites, bridal suite, groom's quarters, tables, chairs, and access to our 400-acre property for photos. We also provide setup and breakdown assistance."
    },
    {
      question: "Do you have indoor and outdoor options?",
      answer: "Yes! Our property offers multiple ceremony sites including the vineyard overlook, oak grove, and brookside garden. Our barn provides a beautiful indoor space that can be decorated to match any theme or season."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that life happens. Our cancellation policy allows for full refund if cancelled more than 12 months in advance, with a sliding scale for later cancellations. Please contact us to discuss your specific situation."
    },
    {
      question: "How far in advance should we book?",
      answer: "We recommend booking 12-18 months in advance for peak season (May-October). However, we often have availability for intimate ceremonies with shorter notice. Contact us to check current availability."
    }
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spring {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .demo-accordion-item {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .demo-accordion-question {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .demo-accordion-answer {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: max-height, padding, opacity;
        }

        .demo-accordion-toggle {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .demo-accordion-item.active .demo-accordion-toggle {
          animation: spring 0.3s ease-out;
        }

        .demo-accordion-answer.active {
          animation: slideDown 0.25s ease-out;
        }

        /* Gradient Background Variant */
        .gradient-variant {
          background: linear-gradient(135deg, #FBF8F4 0%, #F4E4E1 50%, #FAF6F2 100%);
        }

        /* Dark Theme Variant */
        .dark-variant {
          background: linear-gradient(135deg, #2C2416 0%, #3A4A3C 100%);
          color: white;
        }

        .dark-variant .demo-accordion-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .dark-variant .demo-accordion-question h3 {
          color: #E4C896;
        }

        .dark-variant .demo-accordion-answer p {
          color: rgba(255, 255, 255, 0.9);
        }

        /* Minimalist Variant */
        .minimal-variant .demo-accordion-item {
          background: transparent;
          border: none;
          border-bottom: 2px solid #F4E4E1;
          border-radius: 0;
          box-shadow: none;
          margin-bottom: 0;
        }

        .minimal-variant .demo-accordion-item:last-child {
          border-bottom: none;
        }

        /* Bordered Variant */
        .bordered-variant .demo-accordion-item {
          border: 3px solid #D4A574;
          background: white;
        }

        .bordered-variant .demo-accordion-item.active {
          border-color: #9D6B7B;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(157, 107, 123, 0.15);
        }

        /* Card Stack Variant */
        .card-stack-variant .demo-accordion-item {
          transform: perspective(1000px) rotateX(2deg);
          margin-bottom: 30px;
        }

        .card-stack-variant .demo-accordion-item.active {
          transform: perspective(1000px) rotateX(0deg) translateY(-5px);
        }
      `}</style>

      {/* Classic Elegant Variant */}
      <section style={{
        padding: '100px 40px',
        background: '#FBF8F4',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <p style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              color: '#D4A574',
              marginBottom: '15px',
              margin: '0 0 15px 0'
            }}>
              Interactive Demos
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: 1.2,
              color: '#6B4E3D',
              marginBottom: '20px',
              fontWeight: 400,
              margin: '0 0 20px 0'
            }}>
              FAQ Accordion Variants
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Multiple themed variants with smooth animations, spring easing, and enhanced user experience patterns.
            </p>
          </div>

          {/* Classic Elegant Variant */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              color: '#9D6B7B',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Classic Elegant
            </h2>
            <div style={{
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {faqData.slice(0, 3).map((faq, index) => {
                const isActive = activeItems[`classic-${index}`];
                return (
                  <div
                    key={index}
                    className={`demo-accordion-item ${isActive ? 'active' : ''}`}
                    style={{
                      background: '#FAF6F2',
                      marginBottom: '20px',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: isActive ? '0 12px 40px rgba(0,0,0,0.15)' : '0 5px 20px rgba(0,0,0,0.05)',
                      transform: isActive ? 'translateY(-3px)' : 'translateY(0)'
                    }}
                  >
                    <div
                      className="demo-accordion-question"
                      style={{
                        padding: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: isActive ? 'rgba(212, 165, 116, 0.1)' : 'transparent'
                      }}
                      onClick={() => toggleItem('classic', index)}
                    >
                      <h3 style={{
                        fontSize: '1.25rem',
                        color: '#4A3426',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        margin: 0
                      }}>
                        {faq.question}
                      </h3>
                      <span
                        className="demo-accordion-toggle"
                        style={{
                          width: '35px',
                          height: '35px',
                          borderRadius: '50%',
                          background: isActive ? '#9D6B7B' : '#D4A574',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          flexShrink: 0,
                          transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                          fontWeight: 300
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div
                      className={`demo-accordion-answer ${isActive ? 'active' : ''}`}
                      style={{
                        maxHeight: isActive ? '200px' : '0',
                        overflow: 'hidden',
                        opacity: isActive ? 1 : 0,
                        padding: isActive ? '0 30px 30px' : '0 30px 0'
                      }}
                    >
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: '#2C2416',
                        margin: 0
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dark Gradient Variant */}
          <div className="dark-variant" style={{
            marginBottom: '80px',
            padding: '60px 40px',
            borderRadius: '20px'
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              color: '#E4C896',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Dark Gradient Theme
            </h2>
            <div style={{
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {faqData.slice(0, 3).map((faq, index) => {
                const isActive = activeItems[`dark-${index}`];
                return (
                  <div
                    key={index}
                    className={`demo-accordion-item ${isActive ? 'active' : ''}`}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      marginBottom: '20px',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: isActive ? '0 15px 50px rgba(0,0,0,0.3)' : '0 8px 25px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div
                      className="demo-accordion-question"
                      style={{
                        padding: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                      onClick={() => toggleItem('dark', index)}
                    >
                      <h3 style={{
                        fontSize: '1.25rem',
                        color: '#E4C896',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        margin: 0
                      }}>
                        {faq.question}
                      </h3>
                      <span
                        className="demo-accordion-toggle"
                        style={{
                          width: '35px',
                          height: '35px',
                          borderRadius: '50%',
                          background: isActive ? 'rgba(228, 200, 150, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                          color: '#E4C896',
                          border: '2px solid #E4C896',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          flexShrink: 0,
                          transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                          fontWeight: 300
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div
                      className={`demo-accordion-answer ${isActive ? 'active' : ''}`}
                      style={{
                        maxHeight: isActive ? '200px' : '0',
                        overflow: 'hidden',
                        opacity: isActive ? 1 : 0,
                        padding: isActive ? '0 30px 30px' : '0 30px 0'
                      }}
                    >
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: 'rgba(255, 255, 255, 0.9)',
                        margin: 0
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Minimalist Variant */}
          <div className="minimal-variant" style={{ marginBottom: '80px' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              color: '#9D6B7B',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Minimalist Clean
            </h2>
            <div style={{
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {faqData.slice(0, 4).map((faq, index) => {
                const isActive = activeItems[`minimal-${index}`];
                return (
                  <div
                    key={index}
                    className={`demo-accordion-item ${isActive ? 'active' : ''}`}
                    style={{
                      background: 'transparent',
                      borderBottom: '2px solid #F4E4E1',
                      borderRadius: 0,
                      marginBottom: 0
                    }}
                  >
                    <div
                      className="demo-accordion-question"
                      style={{
                        padding: '25px 0',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                      onClick={() => toggleItem('minimal', index)}
                    >
                      <h3 style={{
                        fontSize: '1.25rem',
                        color: '#4A3426',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        margin: 0
                      }}>
                        {faq.question}
                      </h3>
                      <span
                        className="demo-accordion-toggle"
                        style={{
                          fontSize: '1.5rem',
                          color: '#9D6B7B',
                          transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                          fontWeight: 300
                        }}
                      >
                        ↓
                      </span>
                    </div>
                    <div
                      className={`demo-accordion-answer ${isActive ? 'active' : ''}`}
                      style={{
                        maxHeight: isActive ? '200px' : '0',
                        overflow: 'hidden',
                        opacity: isActive ? 1 : 0,
                        padding: isActive ? '0 0 25px' : '0'
                      }}
                    >
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: '#666',
                        margin: 0
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bordered Card Variant */}
          <div className="bordered-variant" style={{ marginBottom: '80px' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              color: '#9D6B7B',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Bordered Cards
            </h2>
            <div style={{
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {faqData.slice(0, 3).map((faq, index) => {
                const isActive = activeItems[`bordered-${index}`];
                return (
                  <div
                    key={index}
                    className={`demo-accordion-item ${isActive ? 'active' : ''}`}
                    style={{
                      border: `3px solid ${isActive ? '#9D6B7B' : '#D4A574'}`,
                      background: 'white',
                      marginBottom: '20px',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                      boxShadow: isActive ? '0 8px 25px rgba(157, 107, 123, 0.15)' : '0 2px 10px rgba(0,0,0,0.05)'
                    }}
                  >
                    <div
                      className="demo-accordion-question"
                      style={{
                        padding: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                      onClick={() => toggleItem('bordered', index)}
                    >
                      <h3 style={{
                        fontSize: '1.25rem',
                        color: '#4A3426',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        margin: 0
                      }}>
                        {faq.question}
                      </h3>
                      <span
                        className="demo-accordion-toggle"
                        style={{
                          width: '40px',
                          height: '40px',
                          border: `2px solid ${isActive ? '#9D6B7B' : '#D4A574'}`,
                          borderRadius: '8px',
                          background: isActive ? '#9D6B7B' : 'transparent',
                          color: isActive ? 'white' : '#D4A574',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          flexShrink: 0,
                          transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                          fontWeight: 300
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div
                      className={`demo-accordion-answer ${isActive ? 'active' : ''}`}
                      style={{
                        maxHeight: isActive ? '200px' : '0',
                        overflow: 'hidden',
                        opacity: isActive ? 1 : 0,
                        padding: isActive ? '0 30px 30px' : '0 30px 0'
                      }}
                    >
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: '#2C2416',
                        margin: 0
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card Stack 3D Variant */}
          <div className="card-stack-variant" style={{ marginBottom: '80px' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              color: '#9D6B7B',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              3D Card Stack
            </h2>
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              perspective: '1000px'
            }}>
              {faqData.slice(0, 3).map((faq, index) => {
                const isActive = activeItems[`stack-${index}`];
                return (
                  <div
                    key={index}
                    className={`demo-accordion-item ${isActive ? 'active' : ''}`}
                    style={{
                      background: 'linear-gradient(135deg, #FAF6F2 0%, #F4E4E1 100%)',
                      marginBottom: '30px',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: isActive 
                        ? '0 20px 60px rgba(157, 107, 123, 0.2)' 
                        : '0 8px 30px rgba(0,0,0,0.08)',
                      transform: isActive 
                        ? 'perspective(1000px) rotateX(0deg) translateY(-5px) translateZ(20px)' 
                        : 'perspective(1000px) rotateX(2deg) translateZ(0px)'
                    }}
                  >
                    <div
                      className="demo-accordion-question"
                      style={{
                        padding: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                      onClick={() => toggleItem('stack', index)}
                    >
                      <h3 style={{
                        fontSize: '1.25rem',
                        color: '#4A3426',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        margin: 0
                      }}>
                        {faq.question}
                      </h3>
                      <span
                        className="demo-accordion-toggle"
                        style={{
                          width: '35px',
                          height: '35px',
                          borderRadius: '50%',
                          background: isActive ? '#9D6B7B' : '#D4A574',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          flexShrink: 0,
                          transform: isActive ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                          fontWeight: 300
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div
                      className={`demo-accordion-answer ${isActive ? 'active' : ''}`}
                      style={{
                        maxHeight: isActive ? '200px' : '0',
                        overflow: 'hidden',
                        opacity: isActive ? 1 : 0,
                        padding: isActive ? '0 30px 30px' : '0 30px 0'
                      }}
                    >
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: '#2C2416',
                        margin: 0
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section style={{
        background: 'white',
        padding: '80px 40px',
        borderTop: '1px solid #eee'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.5rem',
              color: '#6B4E3D',
              marginBottom: '20px'
            }}>
              FAQ Accordion Documentation
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Interactive accordion component with multiple themes, smooth spring animations, and enhanced accessibility features.
            </p>
          </div>

          {/* HTML Structure */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{
              color: '#9D6B7B',
              marginBottom: '20px',
              fontSize: '1.75rem',
              fontFamily: "'Playfair Display', serif"
            }}>
              HTML Structure
            </h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '30px',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              border: '1px solid #4a5568'
            }}>
{`<!-- Classic Elegant FAQ Accordion -->
<section className="faq-section">
  <div className="container">
    <div className="faq-header">
      <p className="script-font">Questions?</p>
      <h2>Everything You Need to Know</h2>
    </div>
    
    <div className="faq-container">
      <div className="faq-item active">
        <div className="faq-question" onClick={toggleAccordion}>
          <h3>Can we bring our own vendors?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>Absolutely! We believe in giving you complete creative freedom...</p>
        </div>
      </div>
      
      <!-- Additional FAQ items -->
    </div>
  </div>
</section>

<!-- Dark Theme Variant -->
<section className="faq-section dark-variant">
  <div className="faq-container">
    <div className="faq-item glass-effect">
      <div className="faq-question">
        <h3>What's included with the venue rental?</h3>
        <span className="faq-toggle bordered">+</span>
      </div>
      <div className="faq-answer">
        <p>Your rental includes exclusive use...</p>
      </div>
    </div>
  </div>
</section>

<!-- Minimalist Variant -->
<section className="faq-section minimal-variant">
  <div className="faq-item borderless">
    <div className="faq-question">
      <h3>Do you have indoor and outdoor options?</h3>
      <span className="faq-toggle arrow">↓</span>
    </div>
    <div className="faq-answer">
      <p>Yes! Our property offers multiple ceremony sites...</p>
    </div>
  </div>
</section>`}
            </pre>
          </div>

          {/* React Implementation */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{
              color: '#9D6B7B',
              marginBottom: '20px',
              fontSize: '1.75rem',
              fontFamily: "'Playfair Display', serif"
            }}>
              React Implementation
            </h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '30px',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              border: '1px solid #4a5568'
            }}>
{`import React, { useState, useRef } from 'react';

export const FAQAccordion = ({ 
  variant = 'classic',
  data = [],
  allowMultiple = false,
  springAnimation = true 
}) => {
  const [activeItems, setActiveItems] = useState({});
  const contentRefs = useRef({});

  const toggleItem = (index) => {
    if (allowMultiple) {
      setActiveItems(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    } else {
      setActiveItems({ [index]: !activeItems[index] });
    }
  };

  const getVariantClasses = () => {
    const variants = {
      classic: 'faq-classic',
      dark: 'faq-dark',
      minimal: 'faq-minimal',
      bordered: 'faq-bordered',
      stack: 'faq-stack'
    };
    return variants[variant] || variants.classic;
  };

  return (
    <div className={\`faq-accordion \${getVariantClasses()}\`}>
      {data.map((item, index) => {
        const isActive = activeItems[index];
        
        return (
          <div 
            key={index}
            className={\`faq-item \${isActive ? 'active' : ''}\`}
            style={{
              '--content-height': isActive 
                ? \`\${contentRefs.current[index]?.scrollHeight}px\` 
                : '0px'
            }}
          >
            <div 
              className="faq-question"
              onClick={() => toggleItem(index)}
              role="button"
              aria-expanded={isActive}
              aria-controls={\`faq-content-\${index}\`}
            >
              <h3>{item.question}</h3>
              <span 
                className={\`faq-toggle \${springAnimation ? 'spring' : ''}\`}
                style={{
                  transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
              >
                +
              </span>
            </div>
            
            <div 
              id={\`faq-content-\${index}\`}
              ref={el => contentRefs.current[index] = el}
              className="faq-answer"
              style={{
                maxHeight: isActive ? 'var(--content-height)' : '0',
                opacity: isActive ? 1 : 0,
                padding: isActive ? '20px 30px 30px' : '0 30px'
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Usage Examples
const faqData = [
  {
    question: "Can we bring our own vendors?",
    answer: "Absolutely! We believe in giving you complete creative freedom..."
  },
  // ... more items
];

// Classic variant
<FAQAccordion variant="classic" data={faqData} />

// Dark theme with spring animations
<FAQAccordion 
  variant="dark" 
  data={faqData} 
  springAnimation={true}
  allowMultiple={true}
/>

// Minimal borderless design
<FAQAccordion variant="minimal" data={faqData} />`}
            </pre>
          </div>

          {/* Enhanced CSS */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{
              color: '#9D6B7B',
              marginBottom: '20px',
              fontSize: '1.75rem',
              fontFamily: "'Playfair Display', serif"
            }}>
              Enhanced CSS with Animations
            </h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '30px',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              border: '1px solid #4a5568'
            }}>
{`/* Base FAQ Accordion Styles */
.faq-accordion {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;
}

.faq-question {
  padding: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.faq-question:hover {
  background: rgba(212, 165, 116, 0.05);
}

.faq-question h3 {
  font-size: 1.25rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin: 0;
  transition: color 0.3s ease;
}

.faq-toggle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 300;
  flex-shrink: 0;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

/* Spring Animation */
.faq-toggle.spring {
  animation: spring 0.3s ease-out;
}

@keyframes spring {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

.faq-answer {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: max-height, padding, opacity;
  overflow: hidden;
}

.faq-answer.active {
  animation: slideDown 0.25s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Classic Variant */
.faq-classic .faq-item {
  background: #FAF6F2;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.faq-classic .faq-item:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
}

.faq-classic .faq-item.active {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.faq-classic .faq-toggle {
  background: #D4A574;
  color: white;
}

.faq-classic .faq-item.active .faq-toggle {
  background: #9D6B7B;
  transform: rotate(45deg);
}

/* Dark Variant */
.faq-dark {
  background: linear-gradient(135deg, #2C2416 0%, #3A4A3C 100%);
  padding: 60px 40px;
  border-radius: 20px;
}

.faq-dark .faq-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.faq-dark .faq-question h3 {
  color: #E4C896;
}

.faq-dark .faq-toggle {
  background: rgba(255, 255, 255, 0.2);
  color: #E4C896;
  border: 2px solid #E4C896;
}

.faq-dark .faq-item.active .faq-toggle {
  background: rgba(228, 200, 150, 0.2);
  transform: rotate(45deg);
}

.faq-dark .faq-answer p {
  color: rgba(255, 255, 255, 0.9);
}

/* Minimal Variant */
.faq-minimal .faq-item {
  background: transparent;
  border: none;
  border-bottom: 2px solid #F4E4E1;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 0;
}

.faq-minimal .faq-item:last-child {
  border-bottom: none;
}

.faq-minimal .faq-question {
  padding: 25px 0;
}

.faq-minimal .faq-toggle {
  background: none;
  color: #9D6B7B;
  width: auto;
  height: auto;
  border-radius: 0;
  font-size: 1.5rem;
}

.faq-minimal .faq-item.active .faq-toggle {
  transform: rotate(180deg);
}

/* Bordered Variant */
.faq-bordered .faq-item {
  border: 3px solid #D4A574;
  background: white;
}

.faq-bordered .faq-item.active {
  border-color: #9D6B7B;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(157, 107, 123, 0.15);
}

.faq-bordered .faq-toggle {
  width: 40px;
  height: 40px;
  border: 2px solid #D4A574;
  border-radius: 8px;
  background: transparent;
  color: #D4A574;
}

.faq-bordered .faq-item.active .faq-toggle {
  background: #9D6B7B;
  border-color: #9D6B7B;
  color: white;
  transform: rotate(45deg);
}

/* 3D Card Stack Variant */
.faq-stack {
  perspective: 1000px;
}

.faq-stack .faq-item {
  background: linear-gradient(135deg, #FAF6F2 0%, #F4E4E1 100%);
  transform: perspective(1000px) rotateX(2deg);
  margin-bottom: 30px;
}

.faq-stack .faq-item.active {
  transform: perspective(1000px) rotateX(0deg) translateY(-5px) translateZ(20px);
  box-shadow: 0 20px 60px rgba(157, 107, 123, 0.2);
}

.faq-stack .faq-item.active .faq-toggle {
  transform: rotate(45deg) scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .faq-question {
    padding: 20px;
  }
  
  .faq-question h3 {
    font-size: 1.125rem;
  }
  
  .faq-toggle {
    width: 30px;
    height: 30px;
    font-size: 1.25rem;
  }
  
  .faq-answer {
    padding: 0 20px 20px !important;
  }
}

/* Accessibility Enhancements */
.faq-question:focus {
  outline: 2px solid #9D6B7B;
  outline-offset: 2px;
}

.faq-item[aria-expanded="true"] .faq-answer {
  visibility: visible;
}

.faq-item[aria-expanded="false"] .faq-answer {
  visibility: hidden;
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .faq-item,
  .faq-question,
  .faq-toggle,
  .faq-answer {
    transition: none;
    animation: none;
  }
}`}
            </pre>
          </div>

          {/* Key Features */}
          <div>
            <h3 style={{
              color: '#9D6B7B',
              marginBottom: '30px',
              fontSize: '1.75rem',
              fontFamily: "'Playfair Display', serif"
            }}>
              Key Features & Variants
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  🎨 Multiple Theme Variants
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Classic elegant, dark gradient, minimalist clean, bordered cards, and 3D card stack variants with unique styling approaches.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  ⚡ Spring Animations
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Enhanced with cubic-bezier easing functions, spring effects, and smooth height transitions using CSS custom properties.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  🔄 Interactive States
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Hover effects, focus states, rotation animations, and 3D transforms. Each variant has unique interaction patterns.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  🎯 Icon Variants
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Plus/minus icons, chevron arrows, bordered buttons, and circular toggles with rotation and scaling effects.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  📱 Responsive Design
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Mobile-optimized with adjusted padding, font sizes, and touch-friendly interactions. Maintains visual hierarchy across devices.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  ♿ Accessibility Focus
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  ARIA attributes, keyboard navigation, focus indicators, and respects prefers-reduced-motion for better user experience.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  🔧 Customizable Options
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Multiple open items, spring animations toggle, theme variants, and configurable styling through CSS custom properties.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  ⚡ Performance Optimized
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Hardware-accelerated animations, will-change properties, and efficient DOM updates for smooth 60fps interactions.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  🎪 Wedding Branding
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Elegant typography with Playfair Display and Montserrat. Wedding venue color palette with dusty rose and champagne gold.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  💼 Production Ready
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Error handling, TypeScript support, comprehensive testing patterns, and integration with modern React applications.
                </p>
              </div>

              <div style={{
                background: '#FBF8F4',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #F4E4E1'
              }}>
                <h4 style={{
                  color: '#6B4E3D',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }}>
                  🌟 Advanced Effects
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Glass morphism with backdrop-filter, 3D perspective transforms, gradient overlays, and sophisticated shadow systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}