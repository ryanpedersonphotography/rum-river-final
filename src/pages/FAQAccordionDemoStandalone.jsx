import React, { useState } from 'react';
import CodeAccordion from '../components/CodeAccordion';
import ColorVariantToggle from '../components/ColorVariantToggle';

export default function FAQAccordionDemoStandalone() {
  const [activeItems, setActiveItems] = useState({});
  const [colorVariant, setColorVariant] = useState('neutral');

  const toggleItem = (sectionId, itemId) => {
    const key = `${sectionId}-${itemId}`;
    setActiveItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Color variant configurations
  const colorVariants = {
    neutral: {
      id: 'neutral',
      label: 'Neutral Gray',
      activeColor: '#6B6B6B',
      sectionBg: 'linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%)',
      containerBg: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 250, 0.98) 100%)',
      containerBorder: 'rgba(0, 0, 0, 0.08)',
      itemBorder: 'rgba(0, 0, 0, 0.06)',
      itemActiveBg: 'rgba(0, 0, 0, 0.02)',
      itemActiveBorder: 'rgba(157, 107, 123, 0.2)',
      toggleBg: 'rgba(212, 165, 116, 0.1)',
      toggleActiveBg: 'rgba(157, 107, 123, 0.1)',
      toggleBorder: '#D4A574',
      toggleActiveBorder: '#9D6B7B',
      toggleColor: '#D4A574',
      toggleActiveColor: '#9D6B7B',
      headingColor: '#2C2416',
      textColor: '#666',
      labelColor: '#9D6B7B',
      ctaBg: '#9D6B7B',
      ctaHoverBg: '#8A5A6A'
    },
    ocean: {
      id: 'ocean',
      label: 'Ocean Blue',
      activeColor: '#2563EB',
      previewColor: '#60A5FA',
      sectionBg: 'linear-gradient(180deg, rgba(219, 234, 254, 0.3) 0%, rgba(191, 219, 254, 0.5) 100%)',
      containerBg: 'linear-gradient(145deg, rgba(240, 249, 255, 0.98) 0%, rgba(224, 242, 254, 0.95) 100%)',
      containerBorder: 'rgba(147, 197, 253, 0.3)',
      itemBorder: 'rgba(147, 197, 253, 0.2)',
      itemActiveBg: 'rgba(219, 234, 254, 0.3)',
      itemActiveBorder: 'rgba(37, 99, 235, 0.3)',
      toggleBg: 'rgba(147, 197, 253, 0.2)',
      toggleActiveBg: 'rgba(37, 99, 235, 0.15)',
      toggleBorder: '#93C5FD',
      toggleActiveBorder: '#2563EB',
      toggleColor: '#3B82F6',
      toggleActiveColor: '#2563EB',
      headingColor: '#1E3A8A',
      textColor: '#475569',
      labelColor: '#2563EB',
      ctaBg: '#2563EB',
      ctaHoverBg: '#1D4ED8'
    },
    forest: {
      id: 'forest',
      label: 'Forest Green',
      activeColor: '#059669',
      previewColor: '#34D399',
      sectionBg: 'linear-gradient(180deg, rgba(209, 250, 229, 0.3) 0%, rgba(167, 243, 208, 0.4) 100%)',
      containerBg: 'linear-gradient(145deg, rgba(240, 253, 244, 0.98) 0%, rgba(220, 252, 231, 0.95) 100%)',
      containerBorder: 'rgba(110, 231, 183, 0.3)',
      itemBorder: 'rgba(110, 231, 183, 0.2)',
      itemActiveBg: 'rgba(209, 250, 229, 0.3)',
      itemActiveBorder: 'rgba(5, 150, 105, 0.3)',
      toggleBg: 'rgba(110, 231, 183, 0.2)',
      toggleActiveBg: 'rgba(5, 150, 105, 0.15)',
      toggleBorder: '#6EE7B7',
      toggleActiveBorder: '#059669',
      toggleColor: '#10B981',
      toggleActiveColor: '#059669',
      headingColor: '#064E3B',
      textColor: '#374151',
      labelColor: '#059669',
      ctaBg: '#059669',
      ctaHoverBg: '#047857'
    },
    romantic: {
      id: 'romantic',
      label: 'Romantic Blush',
      activeColor: '#9D6B7B',
      previewColor: '#F4E4E1',
      sectionBg: 'linear-gradient(180deg, #FBF8F4 0%, #F4E4E1 100%)',
      containerBg: 'linear-gradient(145deg, #FFFCF8 0%, rgba(244, 228, 225, 0.4) 100%)',
      containerBorder: 'rgba(157, 107, 123, 0.2)',
      itemBorder: 'rgba(212, 165, 116, 0.15)',
      itemActiveBg: 'rgba(244, 228, 225, 0.3)',
      itemActiveBorder: 'rgba(157, 107, 123, 0.3)',
      toggleBg: 'rgba(228, 200, 150, 0.2)',
      toggleActiveBg: 'rgba(157, 107, 123, 0.15)',
      toggleBorder: '#E4C896',
      toggleActiveBorder: '#9D6B7B',
      toggleColor: '#D4A574',
      toggleActiveColor: '#9D6B7B',
      headingColor: '#4A3426',
      textColor: '#6B4E3D',
      labelColor: '#9D6B7B',
      ctaBg: '#9D6B7B',
      ctaHoverBg: '#8A5A6A'
    },
    golden: {
      id: 'golden',
      label: 'Golden Hour',
      activeColor: '#D4A574',
      previewColor: '#E4C896',
      sectionBg: 'linear-gradient(180deg, #FFFCF8 0%, rgba(228, 200, 150, 0.2) 100%)',
      containerBg: 'linear-gradient(145deg, rgba(255, 252, 248, 0.98) 0%, rgba(228, 200, 150, 0.15) 100%)',
      containerBorder: 'rgba(212, 165, 116, 0.3)',
      itemBorder: 'rgba(228, 200, 150, 0.2)',
      itemActiveBg: 'rgba(228, 200, 150, 0.15)',
      itemActiveBorder: 'rgba(212, 165, 116, 0.4)',
      toggleBg: 'rgba(228, 200, 150, 0.25)',
      toggleActiveBg: 'rgba(212, 165, 116, 0.2)',
      toggleBorder: '#E4C896',
      toggleActiveBorder: '#D4A574',
      toggleColor: '#D4A574',
      toggleActiveColor: '#6B4E3D',
      headingColor: '#4A3426',
      textColor: '#6B4E3D',
      labelColor: '#D4A574',
      ctaBg: '#D4A574',
      ctaHoverBg: '#C19660'
    },
    sage: {
      id: 'sage',
      label: 'Sage & Walnut',
      activeColor: '#7A8B7F',
      previewColor: '#7A8B7F',
      sectionBg: 'linear-gradient(180deg, #FBF8F4 0%, rgba(122, 139, 127, 0.1) 100%)',
      containerBg: 'linear-gradient(145deg, rgba(255, 252, 248, 0.98) 0%, rgba(122, 139, 127, 0.08) 100%)',
      containerBorder: 'rgba(122, 139, 127, 0.25)',
      itemBorder: 'rgba(107, 78, 61, 0.1)',
      itemActiveBg: 'rgba(122, 139, 127, 0.1)',
      itemActiveBorder: 'rgba(122, 139, 127, 0.3)',
      toggleBg: 'rgba(212, 165, 116, 0.2)',
      toggleActiveBg: 'rgba(122, 139, 127, 0.15)',
      toggleBorder: '#D4A574',
      toggleActiveBorder: '#7A8B7F',
      toggleColor: '#D4A574',
      toggleActiveColor: '#7A8B7F',
      headingColor: '#2C2416',
      textColor: '#6B4E3D',
      labelColor: '#7A8B7F',
      ctaBg: '#7A8B7F',
      ctaHoverBg: '#6B7A6F'
    },
    warmth: {
      id: 'warmth',
      label: 'Warm Embrace',
      activeColor: '#6B4E3D',
      previewColor: '#9D6B7B',
      sectionBg: 'linear-gradient(135deg, #FBF8F4 0%, #F4E4E1 50%, rgba(212, 165, 116, 0.2) 100%)',
      containerBg: 'linear-gradient(145deg, #FFFCF8 0%, rgba(157, 107, 123, 0.1) 50%, rgba(228, 200, 150, 0.15) 100%)',
      containerBorder: 'rgba(157, 107, 123, 0.25)',
      itemBorder: 'rgba(212, 165, 116, 0.2)',
      itemActiveBg: 'linear-gradient(90deg, rgba(244, 228, 225, 0.2) 0%, rgba(228, 200, 150, 0.1) 100%)',
      itemActiveBorder: 'rgba(157, 107, 123, 0.4)',
      toggleBg: 'rgba(228, 200, 150, 0.3)',
      toggleActiveBg: 'rgba(157, 107, 123, 0.2)',
      toggleBorder: '#E4C896',
      toggleActiveBorder: '#9D6B7B',
      toggleColor: '#D4A574',
      toggleActiveColor: '#9D6B7B',
      headingColor: '#4A3426',
      textColor: '#6B4E3D',
      labelColor: '#9D6B7B',
      ctaBg: 'linear-gradient(135deg, #9D6B7B 0%, #8A5A6A 100%)',
      ctaHoverBg: 'linear-gradient(135deg, #8A5A6A 0%, #7A4A5A 100%)'
    },
    elegant: {
      id: 'elegant',
      label: 'Elegant Earth',
      activeColor: '#4A3426',
      previewColor: '#7A8B7F',
      sectionBg: 'linear-gradient(180deg, #FFFCF8 0%, rgba(122, 139, 127, 0.08) 50%, rgba(107, 78, 61, 0.05) 100%)',
      containerBg: 'linear-gradient(145deg, rgba(255, 252, 248, 1) 0%, rgba(244, 228, 225, 0.3) 100%)',
      containerBorder: 'rgba(74, 52, 38, 0.15)',
      itemBorder: 'rgba(122, 139, 127, 0.15)',
      itemActiveBg: 'rgba(122, 139, 127, 0.08)',
      itemActiveBorder: 'rgba(74, 52, 38, 0.25)',
      toggleBg: 'rgba(122, 139, 127, 0.15)',
      toggleActiveBg: 'rgba(74, 52, 38, 0.1)',
      toggleBorder: '#7A8B7F',
      toggleActiveBorder: '#4A3426',
      toggleColor: '#7A8B7F',
      toggleActiveColor: '#4A3426',
      headingColor: '#2C2416',
      textColor: '#6B4E3D',
      labelColor: '#7A8B7F',
      ctaBg: '#6B4E3D',
      ctaHoverBg: '#4A3426'
    },
    lavender: {
      id: 'lavender',
      label: 'Lavender Dream',
      activeColor: '#7B6BA3',
      previewColor: '#C8C8FF',
      sectionBg: 'linear-gradient(180deg, rgba(235, 235, 255, 0.4) 0%, rgba(220, 220, 250, 0.6) 100%)',
      containerBg: 'linear-gradient(145deg, rgba(200, 200, 255, 0.7) 0%, rgba(200, 200, 250, 0.3) 100%)',
      containerBorder: 'rgba(100, 100, 150, 0.4)',
      itemBorder: 'rgba(150, 150, 200, 0.25)',
      itemActiveBg: 'rgba(220, 220, 255, 0.3)',
      itemActiveBorder: 'rgba(123, 107, 163, 0.4)',
      toggleBg: 'rgba(200, 200, 255, 0.3)',
      toggleActiveBg: 'rgba(157, 107, 123, 0.2)',
      toggleBorder: '#9D6B7B',
      toggleActiveBorder: '#7B6BA3',
      toggleColor: '#9D6B7B',
      toggleActiveColor: '#7B6BA3',
      headingColor: '#4A3426',
      textColor: '#6B4E3D',
      labelColor: '#7B6BA3',
      ctaBg: 'linear-gradient(135deg, #9D6B7B 0%, #7B6BA3 100%)',
      ctaHoverBg: 'linear-gradient(135deg, #8A5A6A 0%, #6A5A92 100%)'
    }
  };

  const activeColorVariant = colorVariants[colorVariant];

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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .demo-accordion-item.active .demo-accordion-toggle {
          /* Removed spring animation for smoother sync */
        }

        .demo-accordion-answer.active {
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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

      {/* Clean Modern Variant - Full Section */}
      <section style={{
        padding: '120px 40px',
        background: activeColorVariant.sectionBg,
        minHeight: '100vh',
        position: 'relative',
        transition: 'background 0.4s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Color Variant Toggle */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto 60px',
            overflowX: 'auto',
            padding: '10px 0'
          }}>
            <ColorVariantToggle
              variants={Object.values(colorVariants)}
              activeVariant={colorVariant}
              onVariantChange={setColorVariant}
            />
          </div>

          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <p style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.75rem',
              color: activeColorVariant.labelColor,
              marginBottom: '20px',
              fontWeight: 400
            }}>
              Frequently Asked Questions
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              lineHeight: 1.2,
              color: activeColorVariant.headingColor,
              marginBottom: '24px',
              fontWeight: 400
            }}>
              Everything You Need to Know
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: activeColorVariant.textColor,
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              From booking to the big day, we've got answers to all your questions about hosting your dream wedding at Rum River Barn.
            </p>
          </div>

          {/* Clean Modern FAQ Container */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px',
            background: activeColorVariant.containerBg,
            borderRadius: '20px',
            border: `1px solid ${activeColorVariant.containerBorder}`,
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
            backdropFilter: 'blur(10px)',
            transition: 'background 0.4s ease, border-color 0.4s ease'
          }}>
            {faqData.map((faq, index) => {
              const isActive = activeItems[`modern-${index}`];
              return (
                <div
                  key={index}
                  style={{
                    marginBottom: index < faqData.length - 1 ? '16px' : '0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: isActive ? activeColorVariant.itemActiveBg : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? activeColorVariant.itemActiveBorder : activeColorVariant.itemBorder,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div
                    style={{
                      padding: '24px 28px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => toggleItem('modern', index)}
                  >
                    <h3 style={{
                      fontSize: '1.125rem',
                      color: activeColorVariant.headingColor,
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      margin: 0,
                      letterSpacing: '-0.01em'
                    }}>
                      {faq.question}
                    </h3>
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: isActive ? activeColorVariant.toggleActiveBg : activeColorVariant.toggleBg,
                        border: '1.5px solid',
                        borderColor: isActive ? activeColorVariant.toggleActiveBorder : activeColorVariant.toggleBorder,
                        color: isActive ? activeColorVariant.toggleActiveColor : activeColorVariant.toggleColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem',
                        fontWeight: 300,
                        transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      +
                    </span>
                  </div>
                  <div
                    style={{
                      maxHeight: isActive ? '300px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <p style={{
                      fontSize: '0.975rem',
                      lineHeight: 1.8,
                      color: activeColorVariant.textColor,
                      margin: 0,
                      padding: isActive ? '0 28px 24px' : '0 28px',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0)' : 'translateY(-10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            marginTop: '60px'
          }}>
            <p style={{
              fontSize: '1rem',
              color: activeColorVariant.textColor,
              marginBottom: '24px'
            }}>
              Still have questions? We're here to help!
            </p>
            <button style={{
              padding: '14px 32px',
              background: activeColorVariant.ctaBg,
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1rem',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(157, 107, 123, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = activeColorVariant.ctaHoverBg;
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = activeColorVariant.ctaBg;
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }}>
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Code Implementation for Clean Modern */}
      <section style={{
        padding: '40px 40px 80px',
        background: '#FBF8F4'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '30px',
          background: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
        }}>
          <CodeAccordion 
            title={`View Clean Modern FAQ Implementation - ${activeColorVariant.label} Variant`}
            theme="light"
            sections={[
              {
                title: "CSS Design Tokens",
                code: `/* ${activeColorVariant.label} Theme Design Tokens */
:root {
  /* Section Background */
  --${activeColorVariant.id}-section-bg: ${activeColorVariant.sectionBg};
  
  /* Container Styles */
  --${activeColorVariant.id}-container-bg: ${activeColorVariant.containerBg};
  --${activeColorVariant.id}-container-border: ${activeColorVariant.containerBorder};
  
  /* Item Styles */
  --${activeColorVariant.id}-item-border: ${activeColorVariant.itemBorder};
  --${activeColorVariant.id}-item-active-bg: ${activeColorVariant.itemActiveBg};
  --${activeColorVariant.id}-item-active-border: ${activeColorVariant.itemActiveBorder};
  
  /* Toggle Button */
  --${activeColorVariant.id}-toggle-bg: ${activeColorVariant.toggleBg};
  --${activeColorVariant.id}-toggle-active-bg: ${activeColorVariant.toggleActiveBg};
  --${activeColorVariant.id}-toggle-border: ${activeColorVariant.toggleBorder};
  --${activeColorVariant.id}-toggle-active-border: ${activeColorVariant.toggleActiveBorder};
  --${activeColorVariant.id}-toggle-color: ${activeColorVariant.toggleColor};
  --${activeColorVariant.id}-toggle-active-color: ${activeColorVariant.toggleActiveColor};
  
  /* Typography */
  --${activeColorVariant.id}-heading-color: ${activeColorVariant.headingColor};
  --${activeColorVariant.id}-text-color: ${activeColorVariant.textColor};
  --${activeColorVariant.id}-label-color: ${activeColorVariant.labelColor};
  
  /* CTA Button */
  --${activeColorVariant.id}-cta-bg: ${activeColorVariant.ctaBg};
  --${activeColorVariant.id}-cta-hover-bg: ${activeColorVariant.ctaHoverBg};
  
  /* Spacing & Layout */
  --section-padding: 120px 40px;
  --container-max-width: 900px;
  --container-padding: 40px;
  --container-border-radius: 20px;
  --item-padding: 24px 28px;
  --item-border-radius: 12px;
  --item-spacing: 16px;
  
  /* Animation */
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-quick: all 0.2s ease;
}`
              },
              {
                title: "React Component",
                code: `// Clean Modern FAQ Section Component - ${activeColorVariant.label} Variant
import React, { useState } from 'react';

export default function CleanModernFAQ() {
  const [activeItems, setActiveItems] = useState({});

  const toggleItem = (index) => {
    setActiveItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "Can we bring our own vendors?",
      answer: "Absolutely! We believe in giving you complete creative freedom..."
    },
    // ... more FAQ items
  ];

  return (
    <section style={{
      padding: 'var(--section-padding)',
      background: 'var(--${activeColorVariant.id}-section-bg)',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.75rem',
            color: 'var(--${activeColorVariant.id}-label-color)',
            marginBottom: '20px',
            fontWeight: 400
          }}>
            Frequently Asked Questions
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            color: 'var(--${activeColorVariant.id}-heading-color)',
            marginBottom: '24px'
          }}>
            Everything You Need to Know
          </h2>
        </div>

        {/* FAQ Container */}
        <div style={{
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto',
          padding: 'var(--container-padding)',
          background: 'var(--${activeColorVariant.id}-container-bg)',
          borderRadius: 'var(--container-border-radius)',
          border: '1px solid var(--${activeColorVariant.id}-container-border)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
          backdropFilter: 'blur(10px)'
        }}>
          {faqData.map((faq, index) => {
            const isActive = activeItems[index];
            return (
              <div key={index} style={{
                marginBottom: 'var(--item-spacing)',
                borderRadius: 'var(--item-border-radius)',
                overflow: 'hidden',
                background: isActive ? 'var(--${activeColorVariant.id}-item-active-bg)' : 'transparent',
                border: '1px solid ' + (isActive ? 'var(--${activeColorVariant.id}-item-active-border)' : 'var(--${activeColorVariant.id}-item-border)'),
                transition: 'var(--transition-smooth)'
              }}>
                <div
                  onClick={() => toggleItem(index)}
                  style={{
                    padding: 'var(--item-padding)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.125rem',
                    color: 'var(--${activeColorVariant.id}-heading-color)',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    margin: 0
                  }}>
                    {faq.question}
                  </h3>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isActive ? 'var(--${activeColorVariant.id}-toggle-active-bg)' : 'var(--${activeColorVariant.id}-toggle-bg)',
                    border: '1.5px solid ' + (isActive ? 'var(--${activeColorVariant.id}-toggle-active-border)' : 'var(--${activeColorVariant.id}-toggle-border)'),
                    color: isActive ? 'var(--${activeColorVariant.id}-toggle-active-color)' : 'var(--${activeColorVariant.id}-toggle-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 300,
                    transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'var(--transition-smooth)'
                  }}>
                    +
                  </span>
                </div>
                <div style={{
                  maxHeight: isActive ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'var(--transition-smooth)'
                }}>
                  <p style={{
                    fontSize: '0.975rem',
                    lineHeight: 1.8,
                    color: 'var(--${activeColorVariant.id}-text-color)',
                    padding: isActive ? '0 28px 24px' : '0 28px',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'var(--transition-smooth)'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`
              },
              {
                title: "CSS Styles",
                code: `/* Clean Modern FAQ Styles - ${activeColorVariant.label} Variant */
.clean-modern-faq {
  padding: var(--section-padding);
  background: var(--${activeColorVariant.id}-section-bg);
  min-height: 100vh;
  position: relative;
}

.clean-modern-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--container-padding);
  background: var(--${activeColorVariant.id}-container-bg);
  border-radius: var(--container-border-radius);
  border: 1px solid var(--${activeColorVariant.id}-container-border);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.clean-modern-item {
  margin-bottom: var(--item-spacing);
  border-radius: var(--item-border-radius);
  overflow: hidden;
  background: transparent;
  border: 1px solid var(--${activeColorVariant.id}-item-border);
  transition: var(--transition-smooth);
}

.clean-modern-item:last-child {
  margin-bottom: 0;
}

.clean-modern-item.active {
  background: var(--${activeColorVariant.id}-item-active-bg);
  border-color: var(--${activeColorVariant.id}-item-active-border);
}

.clean-modern-question {
  padding: var(--item-padding);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.clean-modern-question h3 {
  font-size: 1.125rem;
  color: var(--${activeColorVariant.id}-heading-color);
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin: 0;
  letter-spacing: -0.01em;
}

.clean-modern-toggle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--${activeColorVariant.id}-toggle-bg);
  border: 1.5px solid var(--${activeColorVariant.id}-toggle-border);
  color: var(--${activeColorVariant.id}-toggle-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 300;
  transform: rotate(0deg);
  transition: var(--transition-smooth);
}

.clean-modern-item.active .clean-modern-toggle {
  background: var(--${activeColorVariant.id}-toggle-active-bg);
  border-color: var(--${activeColorVariant.id}-toggle-active-border);
  color: var(--${activeColorVariant.id}-toggle-active-color);
  transform: rotate(45deg);
}

.clean-modern-answer {
  max-height: 0;
  overflow: hidden;
  transition: var(--transition-smooth);
}

.clean-modern-answer p {
  font-size: 0.975rem;
  line-height: 1.8;
  color: var(--${activeColorVariant.id}-text-color);
  margin: 0;
  padding: 0 28px;
  opacity: 0;
  transform: translateY(-10px);
  transition: var(--transition-smooth);
}

.clean-modern-item.active .clean-modern-answer {
  max-height: 300px;
}

.clean-modern-item.active .clean-modern-answer p {
  padding: 0 28px 24px;
  opacity: 1;
  transform: translateY(0);
}

/* CTA Button */
.clean-modern-cta {
  padding: 14px 32px;
  background: var(--${activeColorVariant.id}-cta-bg);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.clean-modern-cta:hover {
  background: var(--${activeColorVariant.id}-cta-hover-bg);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .clean-modern-faq {
    padding: 80px 20px;
  }
  
  .clean-modern-container {
    padding: 24px;
  }
  
  .clean-modern-question {
    padding: 20px;
  }
  
  .clean-modern-question h3 {
    font-size: 1rem;
  }
  
  .clean-modern-toggle {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
}`
              }
            ]}
          />
        </div>
      </section>

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
                          fontWeight: 300,
                          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
                        padding: isActive ? '0 30px 30px' : '0 30px 0',
                        transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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

          {/* Code Implementation Container - Standalone */}
          <div style={{
            maxWidth: '900px',
            margin: '60px auto 80px',
            padding: '30px',
            background: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
          }}>
            <CodeAccordion 
              title="View Dark Gradient Theme Code"
              theme="light"
              sections={[
                {
                    title: "React Component (with inline styles)",
                    code: `// Dark Gradient Theme FAQ Accordion Component
// All values are explicit - no design tokens used

import React, { useState } from 'react';

export default function DarkGradientFAQAccordion() {
  const [activeItems, setActiveItems] = useState({});

  const toggleItem = (index) => {
    setActiveItems(prev => ({
      ...prev,
      [index]: !prev[index]
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
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #2C2416 0%, #3A4A3C 100%)',
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
        {faqData.map((faq, index) => {
          const isActive = activeItems[index];
          
          return (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                marginBottom: '20px',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: isActive 
                  ? '0 15px 50px rgba(0,0,0,0.3)' 
                  : '0 8px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div
                style={{
                  padding: '30px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onClick={() => toggleItem(index)}
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
                  style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: isActive 
                      ? 'rgba(228, 200, 150, 0.2)' 
                      : 'rgba(255, 255, 255, 0.2)',
                    color: '#E4C896',
                    border: '2px solid #E4C896',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                    fontWeight: 300,
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  +
                </span>
              </div>
              
              <div
                style={{
                  maxHeight: isActive ? '200px' : '0',
                  overflow: 'hidden',
                  opacity: isActive ? 1 : 0,
                  padding: isActive ? '0 30px 30px' : '0 30px 0',
                  transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'max-height, padding, opacity'
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
  );
}`
                  },
                  {
                    title: "Vanilla JavaScript + HTML",
                    code: `<!-- HTML Structure -->
<div class="dark-gradient-faq" id="faqAccordion">
  <h2 class="dark-gradient-faq-title">Dark Gradient Theme</h2>
  
  <div class="dark-gradient-faq-container">
    <div class="dark-gradient-faq-item" data-index="0">
      <div class="dark-gradient-faq-question">
        <h3>Can we bring our own vendors?</h3>
        <span class="dark-gradient-faq-toggle">+</span>
      </div>
      <div class="dark-gradient-faq-answer">
        <p>Absolutely! We believe in giving you complete creative freedom...</p>
      </div>
    </div>
    
    <div class="dark-gradient-faq-item" data-index="1">
      <div class="dark-gradient-faq-question">
        <h3>What's included with the venue rental?</h3>
        <span class="dark-gradient-faq-toggle">+</span>
      </div>
      <div class="dark-gradient-faq-answer">
        <p>Your rental includes exclusive use of our historic barn...</p>
      </div>
    </div>
  </div>
</div>

<!-- Vanilla JavaScript -->
<script>
(function() {
  'use strict';
  
  document.addEventListener('DOMContentLoaded', function() {
    const accordion = document.getElementById('faqAccordion');
    if (!accordion) return;
    
    const faqItems = accordion.querySelectorAll('.dark-gradient-faq-item');
    
    faqItems.forEach(function(item) {
      const question = item.querySelector('.dark-gradient-faq-question');
      const answer = item.querySelector('.dark-gradient-faq-answer');
      const toggle = item.querySelector('.dark-gradient-faq-toggle');
      
      // Set initial state
      answer.style.maxHeight = '0';
      answer.style.opacity = '0';
      answer.style.padding = '0 30px 0';
      answer.style.overflow = 'hidden';
      answer.style.transition = 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      
      toggle.style.transform = 'rotate(0deg)';
      toggle.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      
      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.dark-gradient-faq-answer');
            const otherToggle = otherItem.querySelector('.dark-gradient-faq-toggle');
            
            otherAnswer.style.maxHeight = '0';
            otherAnswer.style.opacity = '0';
            otherAnswer.style.padding = '0 30px 0';
            otherToggle.style.transform = 'rotate(0deg)';
            otherToggle.style.background = 'rgba(255, 255, 255, 0.2)';
          }
        });
        
        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = '0';
          answer.style.opacity = '0';
          answer.style.padding = '0 30px 0';
          toggle.style.transform = 'rotate(0deg)';
          toggle.style.background = 'rgba(255, 255, 255, 0.2)';
          item.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        } else {
          item.classList.add('active');
          
          // Calculate actual height
          answer.style.maxHeight = 'none';
          const actualHeight = answer.scrollHeight + 'px';
          answer.style.maxHeight = '0';
          answer.offsetHeight; // Force reflow
          
          // Animate open
          answer.style.maxHeight = actualHeight;
          answer.style.opacity = '1';
          answer.style.padding = '0 30px 30px';
          toggle.style.transform = 'rotate(45deg)';
          toggle.style.background = 'rgba(228, 200, 150, 0.2)';
          item.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.3)';
        }
      });
    });
  });
})();
</script>`
                  },
                  {
                    title: "CSS Styles (Complete)",
                    code: `/* Dark Gradient Theme FAQ Accordion - Complete CSS */
.dark-gradient-faq {
  /* Container gradient background */
  background: linear-gradient(135deg, #2C2416 0%, #3A4A3C 100%);
  padding: 60px 40px;
  border-radius: 20px;
}

.dark-gradient-faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.dark-gradient-faq-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #E4C896;
  margin-bottom: 30px;
  text-align: center;
}

.dark-gradient-faq-item {
  /* Glass morphism effect */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;
}

.dark-gradient-faq-item.active {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
}

.dark-gradient-faq-question {
  padding: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-gradient-faq-question h3 {
  font-size: 1.25rem;
  color: #E4C896;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin: 0;
}

.dark-gradient-faq-toggle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: #E4C896;
  border: 2px solid #E4C896;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 300;
  flex-shrink: 0;
  transform: rotate(0deg);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-gradient-faq-toggle.active {
  background: rgba(228, 200, 150, 0.2);
  transform: rotate(45deg);
}

.dark-gradient-faq-answer {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 0 30px 0;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: max-height, padding, opacity;
}

.dark-gradient-faq-answer.active {
  max-height: 200px;
  opacity: 1;
  padding: 0 30px 30px;
  animation: slideDown 0.25s ease-out;
}

.dark-gradient-faq-answer p {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* Animations */
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

@keyframes spring {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Responsive */
@media (max-width: 768px) {
  .dark-gradient-faq {
    padding: 40px 20px;
  }
  
  .dark-gradient-faq-question {
    padding: 20px;
  }
  
  .dark-gradient-faq-question h3 {
    font-size: 1.125rem;
  }
  
  .dark-gradient-faq-toggle {
    width: 30px;
    height: 30px;
    font-size: 1.25rem;
  }
  
  .dark-gradient-faq-answer.active {
    padding: 0 20px 20px;
  }
}`
                }
              ]}
            />
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
