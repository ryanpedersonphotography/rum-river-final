import React, { useState } from 'react';

export default function CodeAccordion({ 
  title = "View Code", 
  sections = [],
  theme = "dark" 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleCopySection = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    const allCode = sections
      .map(section => `/* ${section.title} */\n\n${section.code}`)
      .join('\n\n\n');
    
    navigator.clipboard.writeText(allCode);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    // Reset mini accordions when main accordion closes
    if (isOpen) {
      setExpandedSections({});
    }
  };

  const isDark = theme === "dark";

  return (
    <div style={{
      background: isDark 
        ? 'linear-gradient(135deg, rgba(44, 36, 22, 0.95) 0%, rgba(58, 74, 60, 0.95) 100%)' 
        : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      border: isDark ? '1px solid rgba(228, 200, 150, 0.3)' : '1px solid #E4E4E1',
      borderRadius: '15px',
      marginTop: '30px',
      overflow: 'hidden',
      boxShadow: isDark 
        ? '0 10px 30px rgba(0, 0, 0, 0.5)' 
        : '0 5px 20px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {/* Accordion Header */}
      <div
        onClick={toggleAccordion}
        style={{
          padding: '25px 30px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: isOpen 
            ? (isDark ? 'rgba(228, 200, 150, 0.1)' : 'rgba(212, 165, 116, 0.1)')
            : 'transparent',
          transition: 'all 0.2s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{
            fontSize: '1.5rem',
            color: isDark ? '#E4C896' : '#D4A574'
          }}>
            {isOpen ? '📂' : '📁'}
          </span>
          <h3 style={{
            fontSize: '1.25rem',
            color: isDark ? '#E4C896' : '#6B4E3D',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            margin: 0
          }}>
            {title}
          </h3>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {isOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopyAll();
              }}
              style={{
                padding: '8px 16px',
                background: copiedAll 
                  ? 'rgba(34, 197, 94, 0.2)' 
                  : (isDark ? 'rgba(228, 200, 150, 0.2)' : 'rgba(212, 165, 116, 0.2)'),
                border: copiedAll 
                  ? '2px solid #22C55E' 
                  : (isDark ? '2px solid #E4C896' : '2px solid #D4A574'),
                borderRadius: '8px',
                color: copiedAll ? '#22C55E' : (isDark ? '#E4C896' : '#D4A574'),
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (!copiedAll) {
                  e.target.style.background = isDark 
                    ? 'rgba(228, 200, 150, 0.3)' 
                    : 'rgba(212, 165, 116, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!copiedAll) {
                  e.target.style.background = isDark 
                    ? 'rgba(228, 200, 150, 0.2)' 
                    : 'rgba(212, 165, 116, 0.2)';
                }
              }}
            >
              <span>{copiedAll ? '✓' : '📋'}</span>
              {copiedAll ? 'Copied!' : 'Copy All Code'}
            </button>
          )}
          
          <span
            style={{
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              background: isDark 
                ? 'rgba(228, 200, 150, 0.2)' 
                : 'rgba(212, 165, 116, 0.2)',
              border: isDark ? '2px solid #E4C896' : '2px solid #D4A574',
              color: isDark ? '#E4C896' : '#D4A574',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 300,
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            +
          </span>
        </div>
      </div>

      {/* Accordion Content */}
      <div
        style={{
          maxHeight: isOpen ? '2000px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'max-height, opacity'
        }}
      >
        <div style={{
          padding: isOpen ? '0 30px 30px' : '0 30px 0',
          transition: 'padding 0.3s ease'
        }}>
          {sections.map((section, index) => {
            const isExpanded = expandedSections[index];
            
            return (
              <div key={index} style={{ 
                marginBottom: index < sections.length - 1 ? '20px' : 0,
                background: isDark 
                  ? 'rgba(0, 0, 0, 0.3)' 
                  : 'rgba(255, 255, 255, 0.5)',
                borderRadius: '12px',
                border: isDark 
                  ? '1px solid rgba(228, 200, 150, 0.15)' 
                  : '1px solid rgba(0, 0, 0, 0.06)',
                overflow: 'hidden'
              }}>
                {/* Mini Accordion Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  background: isDark 
                    ? 'rgba(228, 200, 150, 0.05)' 
                    : 'rgba(0, 0, 0, 0.02)',
                  borderBottom: isExpanded 
                    ? (isDark ? '1px solid rgba(228, 200, 150, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)')
                    : 'none'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    flex: 1
                  }}
                  onClick={() => toggleSection(index)}
                  >
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isDark 
                        ? 'rgba(228, 200, 150, 0.15)' 
                        : 'rgba(212, 165, 116, 0.15)',
                      color: isDark ? '#E4C896' : '#D4A574',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      fontWeight: 300,
                      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}>
                      ▶
                    </span>
                    
                    <h4 style={{
                      color: isDark ? '#E4C896' : '#9D6B7B',
                      fontSize: '1rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      margin: 0
                    }}>
                      {section.title}
                    </h4>
                  </div>
                  
                  {/* Copy button always visible */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopySection(section.code, index);
                    }}
                    style={{
                      padding: '6px 12px',
                      background: copiedIndex === index 
                        ? 'rgba(34, 197, 94, 0.2)' 
                        : 'transparent',
                      border: copiedIndex === index 
                        ? '1px solid #22C55E' 
                        : (isDark ? '1px solid rgba(228, 200, 150, 0.3)' : '1px solid rgba(212, 165, 116, 0.3)'),
                      borderRadius: '6px',
                      color: copiedIndex === index 
                        ? '#22C55E' 
                        : (isDark ? '#E4C896' : '#D4A574'),
                      fontSize: '0.75rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      marginLeft: '12px'
                    }}
                    onMouseEnter={(e) => {
                      if (copiedIndex !== index) {
                        e.target.style.background = isDark 
                          ? 'rgba(228, 200, 150, 0.1)' 
                          : 'rgba(212, 165, 116, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (copiedIndex !== index) {
                        e.target.style.background = 'transparent';
                      }
                    }}
                  >
                    <span style={{ fontSize: '0.875rem' }}>
                      {copiedIndex === index ? '✓' : '📄'}
                    </span>
                    {copiedIndex === index ? 'Copied' : 'Copy'}
                  </button>
                </div>
                
                {/* Collapsible Content */}
                <div style={{
                  maxHeight: isExpanded ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <pre style={{
                    background: isDark ? '#0d0d0d' : '#f8f8f8',
                    color: isDark ? '#e2e8f0' : '#2d3748',
                    padding: '20px',
                    borderRadius: '0 0 12px 12px',
                    overflow: 'auto',
                    fontSize: '0.825rem',
                    lineHeight: '1.6',
                    border: 'none',
                    borderTop: isDark 
                      ? '1px solid rgba(228, 200, 150, 0.1)' 
                      : '1px solid #e2e2e2',
                    margin: 0,
                    fontFamily: "'Fira Code', 'Courier New', monospace",
                    maxHeight: '400px'
                  }}>
                    <code>{section.code}</code>
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}