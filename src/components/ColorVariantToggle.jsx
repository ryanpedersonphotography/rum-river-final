import React from 'react';

export default function ColorVariantToggle({ 
  variants = [], 
  activeVariant, 
  onVariantChange,
  style = {} 
}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      padding: '8px',
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '20px',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
      backdropFilter: 'blur(10px)',
      ...style
    }}>
      {variants.map((variant) => {
        const isActive = activeVariant === variant.id;
        return (
          <button
            key={variant.id}
            onClick={() => onVariantChange(variant.id)}
            style={{
              padding: '10px 24px',
              border: 'none',
              borderRadius: '30px',
              background: isActive ? variant.activeColor : 'transparent',
              color: isActive ? 'white' : '#666',
              fontSize: '0.875rem',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: isActive ? 600 : 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.target.style.background = 'rgba(0, 0, 0, 0.04)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.target.style.background = 'transparent';
              }
            }}
          >
            {/* Color preview dot */}
            <span style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: variant.previewColor || variant.activeColor,
              border: isActive ? '2px solid white' : '2px solid rgba(0, 0, 0, 0.1)',
              flexShrink: 0
            }} />
            {variant.label}
          </button>
        );
      })}
    </div>
  );
}