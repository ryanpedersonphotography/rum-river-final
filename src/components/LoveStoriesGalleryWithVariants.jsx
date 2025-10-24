import React, { useState } from 'react';
import ColorVariantToggle from './ColorVariantToggle';
import CodeAccordion from './CodeAccordion';

export default function LoveStoriesGalleryWithVariants() {
  const [colorVariant, setColorVariant] = useState('classic');

  // Color variant configurations matching FAQ accordion style
  const colorVariants = {
    classic: {
      id: 'classic',
      label: 'Classic Elegant',
      activeColor: '#9D6B7B',
      sectionBg: '#F4E4E1', // blush-pink from original
      scriptColor: '#9D6B7B', // dusty-rose from original
      titleColor: '#6B4E3D', // warm-walnut from original
      leadColor: '#2C2416', // text-dark with opacity 0.9
      overlayBg: 'linear-gradient(to top, rgba(107, 78, 61, 0.8), transparent)', // exact from CSS
      coupleNameColor: 'white',
      seasonColor: '#E4C896', // champagne-gold from original
      detailsColor: 'rgba(255, 255, 255, 0.8)',
      buttonBg: 'transparent',
      buttonBorder: '#9D6B7B',
      buttonColor: '#9D6B7B',
      buttonHoverBg: '#9D6B7B',
      buttonHoverColor: 'white'
    },
    ocean: {
      id: 'ocean',
      label: 'Ocean Blue',
      activeColor: '#2563EB',
      previewColor: '#60A5FA',
      sectionBg: 'linear-gradient(180deg, rgba(219, 234, 254, 0.3) 0%, rgba(191, 219, 254, 0.5) 100%)',
      scriptColor: '#2563EB',
      titleColor: '#1E3A8A',
      leadColor: '#475569',
      overlayBg: 'linear-gradient(to top, rgba(30, 58, 138, 0.9) 0%, rgba(37, 99, 235, 0.3) 60%, transparent 100%)',
      coupleNameColor: 'white',
      seasonColor: '#93C5FD',
      detailsColor: 'rgba(255, 255, 255, 0.95)',
      buttonBg: 'transparent',
      buttonBorder: '#2563EB',
      buttonColor: '#2563EB',
      buttonHoverBg: '#2563EB',
      buttonHoverColor: 'white'
    },
    forest: {
      id: 'forest',
      label: 'Forest Green',
      activeColor: '#059669',
      previewColor: '#34D399',
      sectionBg: 'linear-gradient(180deg, rgba(209, 250, 229, 0.4) 0%, rgba(167, 243, 208, 0.6) 100%)',
      scriptColor: '#059669',
      titleColor: '#064E3B',
      leadColor: '#1F2937',
      overlayBg: 'linear-gradient(to top, rgba(6, 78, 59, 0.9) 0%, rgba(5, 150, 105, 0.3) 60%, transparent 100%)',
      coupleNameColor: 'white',
      seasonColor: '#6EE7B7',
      detailsColor: 'rgba(255, 255, 255, 0.95)',
      buttonBg: 'transparent',
      buttonBorder: '#059669',
      buttonColor: '#059669',
      buttonHoverBg: '#059669',
      buttonHoverColor: 'white'
    },
    romantic: {
      id: 'romantic',
      label: 'Romantic Rose',
      activeColor: '#EC4899',
      previewColor: '#F9A8D4',
      sectionBg: 'linear-gradient(180deg, #F4E4E1 0%, rgba(251, 207, 232, 0.3) 100%)',
      scriptColor: '#DB2777',
      titleColor: '#831843',
      leadColor: '#500724',
      overlayBg: 'linear-gradient(to top, rgba(131, 24, 67, 0.9) 0%, rgba(236, 72, 153, 0.3) 60%, transparent 100%)',
      coupleNameColor: 'white',
      seasonColor: '#FBCFE8',
      detailsColor: 'rgba(255, 255, 255, 0.95)',
      buttonBg: 'transparent',
      buttonBorder: '#EC4899',
      buttonColor: '#EC4899',
      buttonHoverBg: '#EC4899',
      buttonHoverColor: 'white'
    },
    golden: {
      id: 'golden',
      label: 'Golden Hour',
      activeColor: '#D97706',
      previewColor: '#FCD34D',
      sectionBg: 'linear-gradient(180deg, rgba(254, 243, 199, 0.5) 0%, rgba(252, 211, 77, 0.2) 100%)',
      scriptColor: '#D97706',
      titleColor: '#92400E',
      leadColor: '#451A03',
      overlayBg: 'linear-gradient(to top, rgba(146, 64, 14, 0.9) 0%, rgba(217, 119, 6, 0.3) 60%, transparent 100%)',
      coupleNameColor: 'white',
      seasonColor: '#FDE68A',
      detailsColor: 'rgba(255, 255, 255, 0.95)',
      buttonBg: 'transparent',
      buttonBorder: '#D97706',
      buttonColor: '#D97706',
      buttonHoverBg: '#D97706',
      buttonHoverColor: 'white'
    },
    sage: {
      id: 'sage',
      label: 'Sage Garden',
      activeColor: '#6B7280',
      previewColor: '#9CA3AF',
      sectionBg: 'linear-gradient(180deg, rgba(243, 244, 246, 0.9) 0%, rgba(229, 231, 235, 0.7) 100%)',
      scriptColor: '#4B5563',
      titleColor: '#1F2937',
      leadColor: '#111827',
      overlayBg: 'linear-gradient(to top, rgba(31, 41, 55, 0.9) 0%, rgba(107, 114, 128, 0.3) 60%, transparent 100%)',
      coupleNameColor: 'white',
      seasonColor: '#D1D5DB',
      detailsColor: 'rgba(255, 255, 255, 0.95)',
      buttonBg: 'transparent',
      buttonBorder: '#6B7280',
      buttonColor: '#6B7280',
      buttonHoverBg: '#6B7280',
      buttonHoverColor: 'white'
    },
    warmth: {
      id: 'warmth',
      label: 'Warm Earth',
      activeColor: '#DC2626',
      previewColor: '#F87171',
      sectionBg: 'linear-gradient(180deg, rgba(254, 226, 226, 0.5) 0%, rgba(254, 202, 202, 0.4) 100%)',
      scriptColor: '#DC2626',
      titleColor: '#7F1D1D',
      leadColor: '#450A0A',
      overlayBg: 'linear-gradient(to top, rgba(127, 29, 29, 0.9) 0%, rgba(220, 38, 38, 0.3) 60%, transparent 100%)',
      coupleNameColor: 'white',
      seasonColor: '#FCA5A5',
      detailsColor: 'rgba(255, 255, 255, 0.95)',
      buttonBg: 'transparent',
      buttonBorder: '#DC2626',
      buttonColor: '#DC2626',
      buttonHoverBg: '#DC2626',
      buttonHoverColor: 'white'
    },
    elegant: {
      id: 'elegant',
      label: 'Elegant Noir',
      activeColor: '#000000',
      previewColor: '#525252',
      sectionBg: 'linear-gradient(180deg, rgba(250, 250, 250, 1) 0%, rgba(245, 245, 245, 1) 100%)',
      scriptColor: '#525252',
      titleColor: '#000000',
      leadColor: '#171717',
      overlayBg: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)',
      coupleNameColor: 'white',
      seasonColor: '#A3A3A3',
      detailsColor: 'rgba(255, 255, 255, 0.95)',
      buttonBg: 'transparent',
      buttonBorder: '#000000',
      buttonColor: '#000000',
      buttonHoverBg: '#000000',
      buttonHoverColor: 'white'
    },
    lavender: {
      id: 'lavender',
      label: 'Lavender Dream',
      activeColor: '#7C3AED',
      previewColor: '#A78BFA',
      sectionBg: 'linear-gradient(145deg, rgba(200, 200, 255, 0.3) 0%, rgba(200, 200, 250, 0.15) 100%)',
      scriptColor: '#7C3AED',
      titleColor: '#4C1D95',
      leadColor: '#2E1065',
      overlayBg: 'linear-gradient(to top, rgba(76, 29, 149, 0.9) 0%, rgba(124, 58, 237, 0.3) 60%, transparent 100%)',
      coupleNameColor: 'white',
      seasonColor: '#C4B5FD',
      detailsColor: 'rgba(255, 255, 255, 0.95)',
      buttonBg: 'transparent',
      buttonBorder: '#7C3AED',
      buttonColor: '#7C3AED',
      buttonHoverBg: '#7C3AED',
      buttonHoverColor: 'white'
    }
  };

  const activeVariant = colorVariants[colorVariant];

  // Wedding data matching LOVE_STORIES_GALLERY_001
  const weddings = [
    {
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200",
      coupleName: "Emma & James",
      season: "Summer 2024",
      details: "200 Guests • Garden Ceremony",
      cols: 2,
      rows: 2
    },
    {
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
      coupleName: "Sarah & Michael",
      season: "Fall 2024",
      details: "150 Guests • Barn Reception",
      cols: 1,
      rows: 1
    },
    {
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
      coupleName: "Rachel & David",
      season: "Spring 2024",
      details: "175 Guests • Vineyard Ceremony",
      cols: 1,
      rows: 1
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      coupleName: "Jessica & Ryan",
      season: "Summer 2024",
      details: "125 Guests • Forest Ceremony",
      cols: 1,
      rows: 1
    },
    {
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
      coupleName: "Amanda & Chris",
      season: "Winter 2023",
      details: "75 Guests • Intimate Celebration",
      cols: 1,
      rows: 1
    },
    {
      image: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200",
      coupleName: "Lauren & Mark",
      season: "Fall 2023",
      details: "250 Guests • Full Weekend",
      cols: 2,
      rows: 1
    }
  ];

  const variantOptions = Object.values(colorVariants).map(v => ({
    id: v.id,
    label: v.label,
    activeColor: v.activeColor,
    previewColor: v.previewColor || v.activeColor
  }));

  return (
    <>
      <style>{`
        @keyframes neonPulse {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(255, 0, 255, 0.5), 
                       inset 0 0 20px rgba(255, 0, 255, 0.2);
          }
          50% { 
            box-shadow: 0 0 50px rgba(255, 0, 255, 0.8), 
                       0 0 80px rgba(0, 255, 255, 0.4),
                       inset 0 0 30px rgba(255, 0, 255, 0.3);
          }
        }
        
        .gallery-item.image-reveal {
          will-change: transform;
        }
        
        ${activeVariant.id === 'magazine' ? `
          .gallery-item:hover .gallery-overlay {
            bottom: 0 !important;
          }
        ` : ''}
      `}</style>
      
      {/* Love Stories Gallery with Color Variants */}
      <section className="love-stories-section section" style={{
        background: activeVariant.sectionBg,
        transition: 'background 0.4s ease'
      }}>
        <div className="content-wrapper" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 50px'
        }}>
          {/* Color Variant Toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            <ColorVariantToggle
              variants={variantOptions}
              activeVariant={colorVariant}
              onVariantChange={setColorVariant}
            />
          </div>

          {/* Section Header */}
          <div className="section-header center" style={{ marginBottom: '3rem' }}>
            <div className="script-accent" style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.75rem',
              color: activeVariant.scriptColor,
              marginBottom: '1rem',
              fontWeight: 400,
              transition: 'color 0.4s ease'
            }}>
              Real Love Stories
            </div>
            <h2 className="section-title" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 500,
              marginBottom: '1.5rem',
              color: activeVariant.titleColor,
              transition: 'color 0.4s ease'
            }}>
              Weddings at the Barn
            </h2>
            <p className="lead" style={{
              fontSize: '1.25rem',
              lineHeight: '1.7',
              fontWeight: 300,
              opacity: 0.9,
              maxWidth: '600px',
              margin: '1.5rem auto 0',
              color: activeVariant.leadColor,
              transition: 'color 0.4s ease'
            }}>
              Every celebration tells a unique story of love, laughter, and happily ever after.
            </p>
          </div>

          {/* Wedding Gallery Grid */}
          <div className="wedding-gallery" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '300px',
            gap: '2rem',
            marginBottom: '5rem' // rhythm-lg from CSS
          }}>
            {weddings.map((wedding, index) => {
              const customStyle = activeVariant.cardStyle || {};
              const baseStyle = {
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: '12px',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                transition: `all ${activeVariant.animationSpeed || '0.3s'} ease`,
                ...(index === 0 && {
                  gridColumn: 'span 2',
                  gridRow: 'span 2'
                }),
                ...(index === 5 && {
                  gridColumn: 'span 2'
                })
              };
              
              return (
              <div
                key={index}
                className="gallery-item image-reveal"
                style={{
                  ...baseStyle,
                  ...customStyle
                }}
                onMouseEnter={(e) => {
                  const hoverShadow = activeVariant.id === 'glassmorphic' ? '0 16px 48px rgba(31, 38, 135, 0.5)' :
                                     activeVariant.id === 'brutalist' ? '15px 15px 0 #FF0000' :
                                     activeVariant.id === 'neon' ? '0 0 50px rgba(255, 0, 255, 0.8)' :
                                     activeVariant.id === 'luxury' ? '0 50px 100px rgba(0, 0, 0, 0.7)' :
                                     '0 30px 60px rgba(0, 0, 0, 0.2)';
                  
                  if (activeVariant.id !== 'minimalist') {
                    e.currentTarget.style.boxShadow = hoverShadow;
                  }
                  
                  if (activeVariant.id === 'brutalist') {
                    e.currentTarget.style.transform = 'rotate(-2deg) scale(1.02)';
                  } else if (activeVariant.id === 'retro') {
                    e.currentTarget.style.transform = 'rotate(-2deg) scale(1.05)';
                    e.currentTarget.style.filter = 'sepia(0.4) contrast(1.2)';
                  } else if (activeVariant.id === 'luxury') {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg)';
                  }
                  
                  const img = e.currentTarget.querySelector('img');
                  const overlay = e.currentTarget.querySelector('.gallery-overlay');
                  const scale = activeVariant.imageScale || 1.1;
                  if (img) img.style.transform = `scale(${scale})`;
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const baseShadow = customStyle.boxShadow || '0 25px 50px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.boxShadow = baseShadow;
                  
                  if (activeVariant.id === 'brutalist' || activeVariant.id === 'retro') {
                    e.currentTarget.style.transform = customStyle.transform || 'rotate(0deg)';
                  } else if (activeVariant.id === 'luxury') {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg)';
                  } else {
                    e.currentTarget.style.transform = 'none';
                  }
                  
                  if (activeVariant.id === 'retro') {
                    e.currentTarget.style.filter = customStyle.filter || 'none';
                  }
                  
                  const img = e.currentTarget.querySelector('img');
                  const overlay = e.currentTarget.querySelector('.gallery-overlay');
                  if (img) img.style.transform = 'scale(1)';
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <img
                  src={wedding.image}
                  alt={`${wedding.coupleName} Wedding`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: `transform ${activeVariant.animationSpeed || '1.2s'} ${activeVariant.id === 'luxury' ? 'cubic-bezier(0.25, 0.1, 0.25, 1)' : activeVariant.id === 'brutalist' ? 'linear' : 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'}`
                  }}
                />
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: activeVariant.overlayBg,
                    backdropFilter: activeVariant.id === 'glassmorphic' ? 'blur(10px)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: activeVariant.overlayPosition === 'bottom' ? 'flex-end' : 'flex-end',
                    padding: '2rem',
                    opacity: 0,
                    transition: `opacity ${activeVariant.overlayTransition || '0.3s'}`,
                    ...(activeVariant.id === 'magazine' && {
                      position: 'absolute',
                      bottom: '-100%',
                      height: 'auto',
                      background: 'white',
                      borderTop: '3px solid #8B4513'
                    })
                  }}
                >
                  <div className="gallery-couple-names" style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '1.75rem',
                    color: activeVariant.coupleNameColor,
                    marginBottom: '0.5rem'
                  }}>
                    {wedding.coupleName}
                  </div>
                  <div className="gallery-season" style={{
                    fontSize: '0.875rem',
                    color: activeVariant.seasonColor,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.25rem',
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {wedding.season}
                  </div>
                  <div className="gallery-details" style={{
                    fontSize: '0.875rem',
                    color: activeVariant.detailsColor,
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {wedding.details}
                  </div>
                </div>
              </div>
            );
            })}
          </div>

          {/* Gallery Footer */}
          <div className="gallery-footer" style={{ textAlign: 'center' }}>
            <button className="romantic-button outline"
              style={{
                padding: '14px 32px',
                background: activeVariant.buttonBg,
                border: `2px solid ${activeVariant.buttonBorder}`,
                color: activeVariant.buttonColor,
                borderRadius: '30px',
                fontSize: '1rem',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = activeVariant.buttonHoverBg;
                e.target.style.color = activeVariant.buttonHoverColor;
                e.target.style.borderColor = activeVariant.buttonHoverBg;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 30px rgba(157, 107, 123, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = activeVariant.buttonBg;
                e.target.style.color = activeVariant.buttonColor;
                e.target.style.borderColor = activeVariant.buttonBorder;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Code Implementation */}
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '30px',
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
      }}>
        <CodeAccordion 
          title={`View Love Stories Gallery Implementation - ${activeVariant.label} Variant`}
          theme="light"
          sections={[
            {
              title: "CSS Design Tokens",
              code: `/* ${activeVariant.label} Theme Design Tokens */
:root {
  /* Section Background */
  --${activeVariant.id}-section-bg: ${activeVariant.sectionBg};
  
  /* Typography Colors */
  --${activeVariant.id}-script-color: ${activeVariant.scriptColor};
  --${activeVariant.id}-title-color: ${activeVariant.titleColor};
  --${activeVariant.id}-lead-color: ${activeVariant.leadColor};
  
  /* Overlay Styles */
  --${activeVariant.id}-overlay-bg: ${activeVariant.overlayBg};
  --${activeVariant.id}-couple-name-color: ${activeVariant.coupleNameColor};
  --${activeVariant.id}-season-color: ${activeVariant.seasonColor};
  --${activeVariant.id}-details-color: ${activeVariant.detailsColor};
  
  /* Button Styles */
  --${activeVariant.id}-button-bg: ${activeVariant.buttonBg};
  --${activeVariant.id}-button-border: ${activeVariant.buttonBorder};
  --${activeVariant.id}-button-color: ${activeVariant.buttonColor};
  --${activeVariant.id}-button-hover-bg: ${activeVariant.buttonHoverBg};
  --${activeVariant.id}-button-hover-color: ${activeVariant.buttonHoverColor};
  
  /* Layout */
  --gallery-gap: 2px;
  --grid-columns: repeat(4, 1fr);
  --grid-row-height: 300px;
  
  /* Animations */
  --transition-smooth: all 0.4s ease;
  --transition-hover: all 0.3s ease;
  --image-scale-hover: scale(1.1);
}`
            },
            {
              title: "React Component",
              code: `// Love Stories Gallery Component - ${activeVariant.label} Variant
import React from 'react';

export default function LoveStoriesGallery() {
  const weddings = [
    {
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200",
      coupleName: "Emma & James",
      season: "Summer 2024",
      details: "200 Guests • Garden Ceremony",
      gridSpan: { cols: 2, rows: 2 }
    },
    // ... more wedding data
  ];

  return (
    <section style={{
      background: 'var(--${activeVariant.id}-section-bg)',
      padding: '100px 0',
      minHeight: '100vh',
      transition: 'var(--transition-smooth)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.75rem',
            color: 'var(--${activeVariant.id}-script-color)',
            marginBottom: '1rem'
          }}>
            Real Love Stories
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3rem',
            color: 'var(--${activeVariant.id}-title-color)',
            marginBottom: '1.5rem'
          }}>
            Weddings at the Barn
          </h2>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            color: 'var(--${activeVariant.id}-lead-color)',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '1.5rem auto 0'
          }}>
            Every celebration tells a unique story of love, laughter, and happily ever after.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'var(--grid-columns)',
          gridAutoRows: 'var(--grid-row-height)',
          gap: 'var(--gallery-gap)',
          marginBottom: '3rem'
        }}>
          {weddings.map((wedding, index) => (
            <GalleryItem key={index} wedding={wedding} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <button style={{
            padding: '14px 32px',
            background: 'var(--${activeVariant.id}-button-bg)',
            border: '2px solid var(--${activeVariant.id}-button-border)',
            color: 'var(--${activeVariant.id}-button-color)',
            borderRadius: '30px',
            fontSize: '1rem',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'var(--transition-hover)'
          }}>
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}`
            },
            {
              title: "CSS Styles",
              code: `/* Love Stories Gallery Styles - ${activeVariant.label} Variant */
.love-stories-gallery {
  background: var(--${activeVariant.id}-section-bg);
  padding: 100px 0;
  min-height: 100vh;
  transition: var(--transition-smooth);
}

.gallery-grid {
  display: grid;
  grid-template-columns: var(--grid-columns);
  grid-auto-rows: var(--grid-row-height);
  gap: var(--gallery-gap);
  margin-bottom: 3rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.gallery-item:first-child {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item:last-child {
  grid-column: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover img {
  transform: var(--image-scale-hover);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: var(--${activeVariant.id}-overlay-bg);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-couple-names {
  font-family: 'Dancing Script', cursive;
  font-size: 1.75rem;
  color: var(--${activeVariant.id}-couple-name-color);
  margin-bottom: 0.5rem;
}

.gallery-season {
  font-size: 1rem;
  color: var(--${activeVariant.id}-season-color);
  margin-bottom: 0.25rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

.gallery-details {
  font-size: 0.875rem;
  color: var(--${activeVariant.id}-details-color);
  font-family: 'Montserrat', sans-serif;
}

/* Responsive */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
  }
  
  .gallery-item:first-child,
  .gallery-item:last-child {
    grid-column: 1;
    grid-row: span 1;
  }
}`
            }
          ]}
        />
      </div>
    </>
  );
}