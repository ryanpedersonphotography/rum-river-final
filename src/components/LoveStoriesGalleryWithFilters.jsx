import React, { useState } from 'react';
import ColorVariantToggle from './ColorVariantToggle';
import CodeAccordion from './CodeAccordion';

export default function LoveStoriesGalleryWithFilters() {
  const [themeMode, setThemeMode] = useState('light');
  const [colorPalette, setColorPalette] = useState('rose');
  const [styleEffect, setStyleEffect] = useState('classic');

  // Theme Mode Options
  const themeModes = {
    light: {
      bgMultiplier: 1,
      textInvert: false,
      shadowStrength: 0.15,
      overlayDarkness: 0.8
    },
    dark: {
      bgMultiplier: 0.1,
      textInvert: true,
      shadowStrength: 0.5,
      overlayDarkness: 0.95
    }
  };

  // Color Palette Options
  const colorPalettes = {
    rose: {
      primary: '#9D6B7B',
      secondary: '#F4E4E1',
      accent: '#E4C896',
      neutral: '#6B4E3D'
    },
    ocean: {
      primary: '#2563EB',
      secondary: '#DBEAFE',
      accent: '#60A5FA',
      neutral: '#1E3A8A'
    },
    forest: {
      primary: '#059669',
      secondary: '#D1FAE5',
      accent: '#34D399',
      neutral: '#064E3B'
    },
    gold: {
      primary: '#D97706',
      secondary: '#FEF3C7',
      accent: '#FCD34D',
      neutral: '#92400E'
    },
    lavender: {
      primary: '#7C3AED',
      secondary: '#EDE9FE',
      accent: '#A78BFA',
      neutral: '#4C1D95'
    },
    sage: {
      primary: '#6B7280',
      secondary: '#F3F4F6',
      accent: '#9CA3AF',
      neutral: '#1F2937'
    },
    coral: {
      primary: '#DC2626',
      secondary: '#FEE2E2',
      accent: '#F87171',
      neutral: '#7F1D1D'
    },
    teal: {
      primary: '#0891B2',
      secondary: '#CFFAFE',
      accent: '#22D3EE',
      neutral: '#164E63'
    },
    amber: {
      primary: '#D97706',
      secondary: '#FEF3C7',
      accent: '#FBBF24',
      neutral: '#78350F'
    }
  };

  // Style Effect Options
  const styleEffects = {
    classic: {
      borderRadius: '12px',
      animationSpeed: '0.3s',
      imageScale: 1.1,
      cardEffect: 'none',
      overlayStyle: 'gradient'
    },
    glassmorphic: {
      borderRadius: '20px',
      animationSpeed: '0.6s',
      imageScale: 1.05,
      cardEffect: 'glass',
      overlayStyle: 'blur',
      backdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    brutalist: {
      borderRadius: '0',
      animationSpeed: '0.1s',
      imageScale: 1,
      cardEffect: 'hard',
      overlayStyle: 'solid',
      border: '5px solid #000000',
      shadowOffset: '10px 10px 0'
    },
    luxury: {
      borderRadius: '0',
      animationSpeed: '2.5s',
      imageScale: 1.15,
      cardEffect: '3d',
      overlayStyle: 'gradient',
      transform3d: true,
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    },
    neon: {
      borderRadius: '15px',
      animationSpeed: '0.4s',
      imageScale: 1.1,
      cardEffect: 'glow',
      overlayStyle: 'neon',
      glowColor: true,
      animation: 'neonPulse 3s infinite'
    },
    minimal: {
      borderRadius: '0',
      animationSpeed: '0.2s',
      imageScale: 1.02,
      cardEffect: 'none',
      overlayStyle: 'clean',
      boxShadow: 'none',
      border: 'none'
    },
    retro: {
      borderRadius: '8px',
      animationSpeed: '0.7s',
      imageScale: 1.12,
      cardEffect: 'vintage',
      overlayStyle: 'gradient',
      filter: 'sepia(0.2) contrast(1.1)',
      border: '4px solid #FFFFFF',
      rotation: '-1deg'
    }
  };

  // Combine all three filters to create final variant
  const getCurrentVariant = () => {
    const theme = themeModes[themeMode];
    const palette = colorPalettes[colorPalette];
    const style = styleEffects[styleEffect];

    // Calculate combined colors based on theme
    const isDark = themeMode === 'dark';
    
    return {
      // Base colors adjusted for theme
      sectionBg: isDark 
        ? `linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)`
        : colorPalette === 'rose' ? '#F4E4E1' : palette.secondary,
      
      scriptColor: isDark && !theme.textInvert ? '#FFFFFF' : palette.primary,
      titleColor: isDark ? '#FFFFFF' : palette.neutral,
      leadColor: isDark ? 'rgba(255, 255, 255, 0.9)' : palette.neutral,
      
      // Overlay based on theme and style
      overlayBg: style.overlayStyle === 'blur' 
        ? `rgba(255, 255, 255, ${isDark ? 0.1 : 0.2})`
        : style.overlayStyle === 'neon'
        ? `linear-gradient(to top, rgba(${isDark ? '0, 0, 0' : '255, 255, 255'}, 0.9) 0%, ${palette.accent}33 100%)`
        : `linear-gradient(to top, rgba(${isDark ? '0, 0, 0' : '107, 78, 61'}, ${theme.overlayDarkness}) 0%, transparent 100%)`,
      
      // Text colors in overlay
      coupleNameColor: style.overlayStyle === 'clean' && !isDark ? palette.neutral : '#FFFFFF',
      seasonColor: style.overlayStyle === 'clean' && !isDark ? palette.primary : palette.accent,
      detailsColor: style.overlayStyle === 'clean' && !isDark 
        ? palette.neutral 
        : `rgba(255, 255, 255, ${isDark ? 0.8 : 0.9})`,
      
      // Button styling
      buttonBg: isDark ? palette.primary : 'transparent',
      buttonBorder: palette.primary,
      buttonColor: isDark ? '#FFFFFF' : palette.primary,
      buttonHoverBg: palette.primary,
      buttonHoverColor: '#FFFFFF',
      
      // Style-specific properties
      borderRadius: style.borderRadius,
      animationSpeed: style.animationSpeed,
      imageScale: style.imageScale,
      cardEffect: style.cardEffect,
      backdropFilter: style.backdropFilter,
      border: style.border,
      shadowOffset: style.shadowOffset,
      filter: style.filter,
      rotation: style.rotation,
      glowColor: style.glowColor && palette.primary,
      
      // Shadow strength based on theme
      boxShadow: style.boxShadow === 'none' 
        ? 'none' 
        : isDark 
        ? `0 25px 50px rgba(0, 0, 0, ${theme.shadowStrength + 0.3})`
        : `0 25px 50px rgba(0, 0, 0, ${theme.shadowStrength})`,
      
      // Unique identifier for this combination
      id: `${themeMode}-${colorPalette}-${styleEffect}`,
      label: `${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} ${colorPalette.charAt(0).toUpperCase() + colorPalette.slice(1)} ${styleEffect.charAt(0).toUpperCase() + styleEffect.slice(1)}`
    };
  };

  const activeVariant = getCurrentVariant();

  // Wedding data
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
      details: "150 Guests • Barn Reception"
    },
    {
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
      coupleName: "Rachel & David",
      season: "Spring 2024",
      details: "175 Guests • Vineyard Ceremony"
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      coupleName: "Jessica & Ryan",
      season: "Summer 2024",
      details: "125 Guests • Forest Ceremony"
    },
    {
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
      coupleName: "Amanda & Chris",
      season: "Winter 2023",
      details: "75 Guests • Intimate Celebration"
    },
    {
      image: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200",
      coupleName: "Lauren & Mark",
      season: "Fall 2023",
      details: "250 Guests • Full Weekend",
      cols: 2
    }
  ];

  return (
    <>
      <style>{`
        @keyframes neonPulse {
          0%, 100% { 
            box-shadow: 0 0 30px ${activeVariant.glowColor || '#FF00FF'}66, 
                       inset 0 0 20px ${activeVariant.glowColor || '#FF00FF'}33;
          }
          50% { 
            box-shadow: 0 0 50px ${activeVariant.glowColor || '#FF00FF'}CC, 
                       0 0 80px ${activeVariant.glowColor || '#00FFFF'}66,
                       inset 0 0 30px ${activeVariant.glowColor || '#FF00FF'}4D;
          }
        }
        
        .gallery-item-filtered {
          transition: all ${activeVariant.animationSpeed} ${activeVariant.cardEffect === '3d' ? 'cubic-bezier(0.25, 0.1, 0.25, 1)' : 'ease'};
        }
      `}</style>

      {/* Love Stories Gallery with Three-Tier Filters */}
      <section className="love-stories-section section" style={{
        background: activeVariant.sectionBg,
        transition: 'background 0.6s ease',
        minHeight: '100vh',
        padding: '50px 0 100px'
      }}>
        <div className="content-wrapper" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 50px'
        }}>
          {/* Three-Tier Filter Controls */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '3rem',
            padding: '30px',
            background: themeMode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`
          }}>
            {/* Theme Mode Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: themeMode === 'dark' ? '#FFFFFF' : '#374151',
                minWidth: '100px'
              }}>
                Theme:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {Object.keys(themeModes).map(mode => (
                  <button
                    key={mode}
                    onClick={() => setThemeMode(mode)}
                    style={{
                      padding: '8px 20px',
                      borderRadius: '20px',
                      border: themeMode === mode ? '2px solid' : '1px solid',
                      borderColor: themeMode === mode 
                        ? colorPalettes[colorPalette].primary 
                        : themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      background: themeMode === mode 
                        ? colorPalettes[colorPalette].primary 
                        : 'transparent',
                      color: themeMode === mode 
                        ? '#FFFFFF' 
                        : themeMode === 'dark' ? '#FFFFFF' : '#374151',
                      fontSize: '0.875rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: themeMode === mode ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textTransform: 'capitalize'
                    }}
                  >
                    {mode === 'light' ? '☀️' : '🌙'} {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: themeMode === 'dark' ? '#FFFFFF' : '#374151',
                minWidth: '100px'
              }}>
                Color:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(colorPalettes).map(([key, palette]) => (
                  <button
                    key={key}
                    onClick={() => setColorPalette(key)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      border: colorPalette === key ? '2px solid' : '1px solid',
                      borderColor: colorPalette === key 
                        ? palette.primary 
                        : themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      background: colorPalette === key ? palette.primary : 'transparent',
                      color: colorPalette === key 
                        ? '#FFFFFF' 
                        : themeMode === 'dark' ? '#FFFFFF' : '#374151',
                      fontSize: '0.875rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: colorPalette === key ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: palette.primary,
                      border: colorPalette === key ? '2px solid white' : 'none'
                    }} />
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Effect Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: themeMode === 'dark' ? '#FFFFFF' : '#374151',
                minWidth: '100px'
              }}>
                Style:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.keys(styleEffects).map(effect => (
                  <button
                    key={effect}
                    onClick={() => setStyleEffect(effect)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      border: styleEffect === effect ? '2px solid' : '1px solid',
                      borderColor: styleEffect === effect 
                        ? colorPalettes[colorPalette].primary 
                        : themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      background: styleEffect === effect 
                        ? colorPalettes[colorPalette].primary 
                        : 'transparent',
                      color: styleEffect === effect 
                        ? '#FFFFFF' 
                        : themeMode === 'dark' ? '#FFFFFF' : '#374151',
                      fontSize: '0.875rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: styleEffect === effect ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textTransform: 'capitalize'
                    }}
                  >
                    {effect === 'glassmorphic' ? '🫧' : 
                     effect === 'brutalist' ? '⬛' :
                     effect === 'luxury' ? '👑' :
                     effect === 'neon' ? '💫' :
                     effect === 'minimal' ? '⬜' :
                     effect === 'retro' ? '📸' :
                     '✨'} {effect}
                  </button>
                ))}
              </div>
            </div>
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
            marginBottom: '5rem'
          }}>
            {weddings.map((wedding, index) => {
              const cardStyle = {
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: activeVariant.borderRadius,
                boxShadow: activeVariant.boxShadow,
                transition: `all ${activeVariant.animationSpeed} ease`,
                ...(activeVariant.border && { border: activeVariant.border }),
                ...(activeVariant.backdropFilter && { backdropFilter: activeVariant.backdropFilter }),
                ...(activeVariant.filter && { filter: activeVariant.filter }),
                ...(activeVariant.rotation && { transform: `rotate(${activeVariant.rotation})` }),
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
                  className="gallery-item-filtered"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    // Apply style-specific hover effects
                    if (activeVariant.cardEffect === 'glow') {
                      e.currentTarget.style.animation = activeVariant.animation;
                    } else if (activeVariant.cardEffect === 'hard') {
                      e.currentTarget.style.transform = 'rotate(-2deg) scale(1.02)';
                      e.currentTarget.style.boxShadow = activeVariant.shadowOffset ? 
                        `${activeVariant.shadowOffset} ${colorPalettes[colorPalette].primary}` : 
                        activeVariant.boxShadow;
                    } else if (activeVariant.cardEffect === '3d') {
                      e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg)';
                    } else if (activeVariant.cardEffect === 'vintage') {
                      e.currentTarget.style.transform = 'rotate(-2deg) scale(1.05)';
                      e.currentTarget.style.filter = 'sepia(0.4) contrast(1.2)';
                    }
                    
                    const img = e.currentTarget.querySelector('img');
                    const overlay = e.currentTarget.querySelector('.gallery-overlay');
                    if (img) img.style.transform = `scale(${activeVariant.imageScale})`;
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animation = '';
                    e.currentTarget.style.transform = activeVariant.rotation ? 
                      `rotate(${activeVariant.rotation})` : 'none';
                    e.currentTarget.style.filter = activeVariant.filter || 'none';
                    e.currentTarget.style.boxShadow = activeVariant.boxShadow;
                    
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
                      transition: `transform ${activeVariant.animationSpeed} ${
                        activeVariant.cardEffect === '3d' ? 'cubic-bezier(0.25, 0.1, 0.25, 1)' : 
                        activeVariant.cardEffect === 'hard' ? 'linear' : 
                        'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }`
                    }}
                  />
                  <div
                    className="gallery-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: activeVariant.overlayBg,
                      ...(activeVariant.cardEffect === 'glass' && { 
                        backdropFilter: 'blur(10px)' 
                      }),
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '2rem',
                      opacity: 0,
                      transition: `opacity ${activeVariant.animationSpeed}`
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
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
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
          title={`View Love Stories Gallery - ${activeVariant.label}`}
          theme="light"
          sections={[
            {
              title: "Combined Design Tokens",
              code: `/* ${activeVariant.label} Combined Design Tokens */
:root {
  /* Theme Mode: ${themeMode} */
  --theme-mode: ${themeMode};
  --shadow-strength: ${themeModes[themeMode].shadowStrength};
  --overlay-darkness: ${themeModes[themeMode].overlayDarkness};
  
  /* Color Palette: ${colorPalette} */
  --color-primary: ${colorPalettes[colorPalette].primary};
  --color-secondary: ${colorPalettes[colorPalette].secondary};
  --color-accent: ${colorPalettes[colorPalette].accent};
  --color-neutral: ${colorPalettes[colorPalette].neutral};
  
  /* Style Effect: ${styleEffect} */
  --border-radius: ${styleEffects[styleEffect].borderRadius};
  --animation-speed: ${styleEffects[styleEffect].animationSpeed};
  --image-scale: ${styleEffects[styleEffect].imageScale};
  --card-effect: ${styleEffects[styleEffect].cardEffect};
  --overlay-style: ${styleEffects[styleEffect].overlayStyle};
  ${styleEffects[styleEffect].backdropFilter ? `--backdrop-filter: ${styleEffects[styleEffect].backdropFilter};` : ''}
  ${styleEffects[styleEffect].border ? `--card-border: ${styleEffects[styleEffect].border};` : ''}
  ${styleEffects[styleEffect].shadowOffset ? `--shadow-offset: ${styleEffects[styleEffect].shadowOffset};` : ''}
  ${styleEffects[styleEffect].filter ? `--image-filter: ${styleEffects[styleEffect].filter};` : ''}
  ${styleEffects[styleEffect].rotation ? `--card-rotation: ${styleEffects[styleEffect].rotation};` : ''}
  
  /* Combined Values */
  --section-bg: ${activeVariant.sectionBg};
  --overlay-bg: ${activeVariant.overlayBg};
  --box-shadow: ${activeVariant.boxShadow};
  --script-color: ${activeVariant.scriptColor};
  --title-color: ${activeVariant.titleColor};
  --lead-color: ${activeVariant.leadColor};
  --couple-name-color: ${activeVariant.coupleNameColor};
  --season-color: ${activeVariant.seasonColor};
  --details-color: ${activeVariant.detailsColor};
}`
            },
            {
              title: "Filter Configuration",
              code: `// Three-Tier Filter System Configuration
const filters = {
  // Theme Mode Control
  themeMode: '${themeMode}', // Controls overall brightness/contrast
  
  // Color Palette Control  
  colorPalette: '${colorPalette}', // Controls color scheme
  
  // Style Effect Control
  styleEffect: '${styleEffect}' // Controls card structure & animations
};

// Theme Modes
const themeModes = {
  light: {
    bgMultiplier: 1,
    textInvert: false,
    shadowStrength: 0.15,
    overlayDarkness: 0.8
  },
  dark: {
    bgMultiplier: 0.1,
    textInvert: true,
    shadowStrength: 0.5,
    overlayDarkness: 0.95
  }
};

// Color Palettes (9 options)
const colorPalettes = {
  rose: { primary: '#9D6B7B', secondary: '#F4E4E1', accent: '#E4C896', neutral: '#6B4E3D' },
  ocean: { primary: '#2563EB', secondary: '#DBEAFE', accent: '#60A5FA', neutral: '#1E3A8A' },
  forest: { primary: '#059669', secondary: '#D1FAE5', accent: '#34D399', neutral: '#064E3B' },
  gold: { primary: '#D97706', secondary: '#FEF3C7', accent: '#FCD34D', neutral: '#92400E' },
  lavender: { primary: '#7C3AED', secondary: '#EDE9FE', accent: '#A78BFA', neutral: '#4C1D95' },
  sage: { primary: '#6B7280', secondary: '#F3F4F6', accent: '#9CA3AF', neutral: '#1F2937' },
  coral: { primary: '#DC2626', secondary: '#FEE2E2', accent: '#F87171', neutral: '#7F1D1D' },
  teal: { primary: '#0891B2', secondary: '#CFFAFE', accent: '#22D3EE', neutral: '#164E63' },
  amber: { primary: '#D97706', secondary: '#FEF3C7', accent: '#FBBF24', neutral: '#78350F' }
};

// Style Effects (7 options)
const styleEffects = {
  classic: { borderRadius: '12px', animationSpeed: '0.3s', imageScale: 1.1 },
  glassmorphic: { borderRadius: '20px', animationSpeed: '0.6s', imageScale: 1.05, backdropFilter: 'blur(20px)' },
  brutalist: { borderRadius: '0', animationSpeed: '0.1s', imageScale: 1, border: '5px solid #000' },
  luxury: { borderRadius: '0', animationSpeed: '2.5s', imageScale: 1.15, transform3d: true },
  neon: { borderRadius: '15px', animationSpeed: '0.4s', imageScale: 1.1, glowAnimation: true },
  minimal: { borderRadius: '0', animationSpeed: '0.2s', imageScale: 1.02, boxShadow: 'none' },
  retro: { borderRadius: '8px', animationSpeed: '0.7s', imageScale: 1.12, filter: 'sepia(0.2)' }
};

// Total Combinations: 2 × 9 × 7 = 126 unique variants!`
            },
            {
              title: "React Implementation",
              code: `// React Component with Three-Tier Filters
import React, { useState } from 'react';

export default function LoveStoriesGalleryWithFilters() {
  const [themeMode, setThemeMode] = useState('${themeMode}');
  const [colorPalette, setColorPalette] = useState('${colorPalette}');
  const [styleEffect, setStyleEffect] = useState('${styleEffect}');
  
  // Combine filters to create dynamic variant
  const getCurrentVariant = () => {
    const theme = themeModes[themeMode];
    const palette = colorPalettes[colorPalette];
    const style = styleEffects[styleEffect];
    
    return {
      // Dynamic color calculation based on theme
      sectionBg: themeMode === 'dark' 
        ? 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)'
        : palette.secondary,
      
      // Card styling based on style effect
      borderRadius: style.borderRadius,
      animationSpeed: style.animationSpeed,
      imageScale: style.imageScale,
      
      // Special effects
      ...(style.backdropFilter && { backdropFilter: style.backdropFilter }),
      ...(style.border && { border: style.border }),
      ...(style.filter && { filter: style.filter }),
      
      // Unique identifier
      id: \`\${themeMode}-\${colorPalette}-\${styleEffect}\`
    };
  };
  
  return (
    <section style={getCurrentVariant()}>
      {/* Filter Controls */}
      <ThemeToggle value={themeMode} onChange={setThemeMode} />
      <ColorPalette value={colorPalette} onChange={setColorPalette} />
      <StyleEffect value={styleEffect} onChange={setStyleEffect} />
      
      {/* Gallery Content */}
      <GalleryGrid variant={getCurrentVariant()} />
    </section>
  );
}`
            }
          ]}
        />
      </div>
    </>
  );
}