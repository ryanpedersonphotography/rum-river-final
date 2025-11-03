import React, { useState } from 'react';
import CodeAccordion from './CodeAccordion';

export default function LoveStoriesGalleryWithFiveFilters() {
  const [themeMode, setThemeMode] = useState('light');
  const [colorPalette, setColorPalette] = useState('rose');
  const [styleEffect, setStyleEffect] = useState('classic');
  const [animationStyle, setAnimationStyle] = useState('scale');
  const [animationSpeed, setAnimationSpeed] = useState('smooth');
  const [spacing, setSpacing] = useState('comfortable');
  const [layout, setLayout] = useState('masonry');

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
    },
    editorial: {
      primary: '#1A1A1A',
      secondary: '#FAFAF9',
      accent: '#C9302C',
      neutral: '#4A4A4A'
    }
  };

  // Style Effect Options (visual structure only)
  const styleEffects = {
    classic: {
      borderRadius: '12px',
      cardEffect: 'shadow',
      overlayStyle: 'gradient'
    },
    glassmorphic: {
      borderRadius: '20px',
      cardEffect: 'glass',
      overlayStyle: 'blur',
      backdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    brutalist: {
      borderRadius: '0',
      cardEffect: 'hard',
      overlayStyle: 'solid',
      border: '5px solid #000000',
      shadowOffset: '10px 10px 0'
    },
    luxury: {
      borderRadius: '0',
      cardEffect: '3d',
      overlayStyle: 'gradient'
    },
    neon: {
      borderRadius: '15px',
      cardEffect: 'glow',
      overlayStyle: 'neon',
      glowColor: true
    },
    minimal: {
      borderRadius: '0',
      cardEffect: 'none',
      overlayStyle: 'clean',
      boxShadow: 'none',
      border: 'none'
    },
    retro: {
      borderRadius: '8px',
      cardEffect: 'vintage',
      overlayStyle: 'gradient',
      filter: 'sepia(0.2) contrast(1.1)',
      border: '4px solid #FFFFFF'
    },
    editorial: {
      borderRadius: '0',
      cardEffect: 'dramatic',
      overlayStyle: 'editorial',
      border: '1px solid #1A1A1A',
      textOverlay: 'serif',
      highContrast: true
    }
  };

  // Animation Style Options (how it moves)
  const animationStyles = {
    scale: {
      imageTransform: 'scale',
      imageScale: 1.1,
      cardTransform: 'none',
      description: 'Zoom in'
    },
    lift: {
      imageTransform: 'scale',
      imageScale: 1.05,
      cardTransform: 'translateY(-10px)',
      description: 'Lift up'
    },
    rotate3d: {
      imageTransform: 'scale',
      imageScale: 1.05,
      cardTransform: 'perspective(1000px) rotateY(-5deg)',
      description: '3D rotate'
    },
    tilt: {
      imageTransform: 'scale',
      imageScale: 1.08,
      cardTransform: 'rotate(-2deg) scale(1.02)',
      description: 'Tilt angle'
    },
    parallax: {
      imageTransform: 'scale translateY(-10px)',
      imageScale: 1.15,
      cardTransform: 'none',
      description: 'Parallax depth'
    },
    fade: {
      imageTransform: 'none',
      imageScale: 1,
      cardTransform: 'none',
      description: 'Fade only'
    },
    bounce: {
      imageTransform: 'scale',
      imageScale: 1.1,
      cardTransform: 'translateY(-5px)',
      description: 'Bounce'
    }
  };

  // Animation Speed Options (timing and easing)
  const animationSpeeds = {
    instant: {
      duration: '0s',
      easing: 'linear',
      description: 'No animation'
    },
    fast: {
      duration: '0.15s',
      easing: 'ease-out',
      description: 'Quick snap'
    },
    smooth: {
      duration: '0.3s',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Smooth'
    },
    elegant: {
      duration: '0.6s',
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      description: 'Elegant glide'
    },
    slow: {
      duration: '1.2s',
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      description: 'Slow motion'
    },
    cinematic: {
      duration: '2.5s',
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      description: 'Cinematic'
    },
    spring: {
      duration: '0.5s',
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      description: 'Spring bounce'
    }
  };

  // Spacing Options (gap between elements)
  const spacingOptions = {
    none: {
      gap: '0',
      padding: '30px 0 80px',
      description: 'No gap'
    },
    tight: {
      gap: '0.5rem',
      padding: '40px 0 90px',
      description: 'Minimal space'
    },
    compact: {
      gap: '1rem',
      padding: '45px 0 95px',
      description: 'Compact'
    },
    comfortable: {
      gap: '2rem',
      padding: '50px 0 100px',
      description: 'Balanced'
    },
    relaxed: {
      gap: '3rem',
      padding: '60px 0 110px',
      description: 'Spacious'
    },
    loose: {
      gap: '4rem',
      padding: '70px 0 120px',
      description: 'Extra space'
    },
    airy: {
      gap: '5rem',
      padding: '80px 0 130px',
      description: 'Maximum space'
    }
  };

  // Layout Options (card arrangements)
  const layoutOptions = {
    masonry: {
      gridTemplate: 'repeat(4, 1fr)',
      gridRows: '300px',
      heroSpan: { col: 2, row: 2 },
      wideSpan: { col: 2, row: 1 },
      description: 'Classic masonry'
    },
    uniform: {
      gridTemplate: 'repeat(3, 1fr)',
      gridRows: '400px',
      heroSpan: { col: 1, row: 1 },
      wideSpan: { col: 1, row: 1 },
      description: 'Equal cards'
    },
    featured: {
      gridTemplate: 'repeat(4, 1fr)',
      gridRows: '250px',
      heroSpan: { col: 3, row: 2 },
      wideSpan: { col: 1, row: 1 },
      description: 'Hero focused'
    },
    pinterest: {
      gridTemplate: 'repeat(5, 1fr)',
      gridRows: 'auto',
      heroSpan: { col: 2, row: 3 },
      wideSpan: { col: 1, row: 2 },
      description: 'Pinterest style',
      heights: [350, 250, 400, 300, 450, 280]
    },
    bento: {
      gridTemplate: 'repeat(6, 1fr)',
      gridRows: '200px',
      heroSpan: { col: 3, row: 3 },
      wideSpan: { col: 2, row: 2 },
      description: 'Bento box'
    },
    zigzag: {
      gridTemplate: 'repeat(3, 1fr)',
      gridRows: '350px',
      heroSpan: { col: 2, row: 1 },
      wideSpan: { col: 2, row: 1 },
      description: 'Zigzag pattern',
      alternating: true
    },
    mosaic: {
      gridTemplate: 'repeat(4, 1fr)',
      gridRows: '280px',
      heroSpan: { col: 2, row: 2 },
      wideSpan: { col: 1, row: 2 },
      description: 'Mixed sizes',
      randomize: true
    },
    editorial: {
      gridTemplate: 'repeat(12, 1fr)',
      gridRows: '100px',
      heroSpan: { col: 7, row: 5 },
      wideSpan: { col: 5, row: 3 },
      description: 'Magazine spread',
      editorial: true,
      asymmetric: [
        { col: 7, row: 5 }, // Hero
        { col: 5, row: 3 }, // Sub-feature
        { col: 5, row: 2 }, // Vertical
        { col: 3, row: 3 }, // Square
        { col: 4, row: 2 }, // Wide
        { col: 8, row: 3 }  // Full-width
      ]
    }
  };

  // Combine all seven filters to create final variant
  const getCurrentVariant = () => {
    const theme = themeModes[themeMode];
    const palette = colorPalettes[colorPalette];
    const style = styleEffects[styleEffect];
    const animation = animationStyles[animationStyle];
    const speed = animationSpeeds[animationSpeed];
    const space = spacingOptions[spacing];
    const grid = layoutOptions[layout];

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
        : style.overlayStyle === 'editorial'
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.3) 100%)`
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
      cardEffect: style.cardEffect,
      backdropFilter: style.backdropFilter,
      border: style.border,
      shadowOffset: style.shadowOffset,
      filter: style.filter,
      glowColor: style.glowColor && palette.primary,
      
      // Animation properties
      imageTransform: animation.imageTransform,
      imageScale: animation.imageScale,
      cardTransform: animation.cardTransform,
      animationDuration: speed.duration,
      animationEasing: speed.easing,
      
      // Shadow strength based on theme
      boxShadow: style.boxShadow === 'none' 
        ? 'none' 
        : isDark 
        ? `0 25px 50px rgba(0, 0, 0, ${theme.shadowStrength + 0.3})`
        : `0 25px 50px rgba(0, 0, 0, ${theme.shadowStrength})`,
      
      // Spacing properties
      gap: space.gap,
      sectionPadding: space.padding,
      
      // Layout properties
      gridTemplate: grid.gridTemplate,
      gridRows: grid.gridRows,
      heroSpan: grid.heroSpan,
      wideSpan: grid.wideSpan,
      heights: grid.heights,
      alternating: grid.alternating,
      randomize: grid.randomize,
      
      // Unique identifier for this combination
      id: `${themeMode}-${colorPalette}-${styleEffect}-${animationStyle}-${animationSpeed}-${spacing}-${layout}`,
      label: `${themeMode} ${colorPalette} ${styleEffect} ${animationStyle} ${animationSpeed} ${spacing} ${layout}`
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

  // Filter button style helper
  const getFilterButtonStyle = (isActive, palette, isDark) => ({
    padding: '8px 16px',
    borderRadius: '20px',
    border: isActive ? '2px solid' : '1px solid',
    borderColor: isActive 
      ? palette.primary 
      : isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
    background: isActive ? palette.primary : 'transparent',
    color: isActive 
      ? '#FFFFFF' 
      : isDark ? '#FFFFFF' : '#374151',
    fontSize: '0.875rem',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: isActive ? 600 : 400,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  });

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
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .gallery-item-five-filters {
          transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
          will-change: transform;
        }
        
        .gallery-item-five-filters img {
          transition: transform ${activeVariant.animationDuration} ${activeVariant.animationEasing};
        }
        
        .gallery-item-five-filters .gallery-overlay {
          transition: opacity ${activeVariant.animationDuration} ${activeVariant.animationEasing};
        }
      `}</style>

      {/* Love Stories Gallery with Seven-Tier Filters */}
      <section className="love-stories-section section" style={{
        background: activeVariant.sectionBg,
        transition: 'background 0.6s ease',
        minHeight: '100vh',
        padding: activeVariant.sectionPadding
      }}>
        <div className="content-wrapper" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 50px'
        }}>
          {/* Five-Tier Filter Controls */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginBottom: '3rem',
            padding: '25px',
            background: themeMode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.95)',
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
                minWidth: '120px'
              }}>
                🌓 Theme:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {Object.keys(themeModes).map(mode => (
                  <button
                    key={mode}
                    onClick={() => setThemeMode(mode)}
                    style={getFilterButtonStyle(
                      themeMode === mode,
                      colorPalettes[colorPalette],
                      themeMode === 'dark'
                    )}
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
                minWidth: '120px'
              }}>
                🎨 Color:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(colorPalettes).map(([key, palette]) => (
                  <button
                    key={key}
                    onClick={() => setColorPalette(key)}
                    style={{
                      ...getFilterButtonStyle(
                        colorPalette === key,
                        palette,
                        themeMode === 'dark'
                      ),
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
                minWidth: '120px'
              }}>
                ✨ Style:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.keys(styleEffects).map(effect => (
                  <button
                    key={effect}
                    onClick={() => setStyleEffect(effect)}
                    style={{
                      ...getFilterButtonStyle(
                        styleEffect === effect,
                        colorPalettes[colorPalette],
                        themeMode === 'dark'
                      ),
                      textTransform: 'capitalize'
                    }}
                  >
                    {effect === 'glassmorphic' ? '🫧' : 
                     effect === 'brutalist' ? '⬛' :
                     effect === 'luxury' ? '👑' :
                     effect === 'neon' ? '💫' :
                     effect === 'minimal' ? '⬜' :
                     effect === 'retro' ? '📸' :
                     effect === 'editorial' ? '📰' :
                     '✨'} {effect}
                  </button>
                ))}
              </div>
            </div>

            {/* Animation Style Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: themeMode === 'dark' ? '#FFFFFF' : '#374151',
                minWidth: '120px'
              }}>
                🎭 Animation:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(animationStyles).map(([key, anim]) => (
                  <button
                    key={key}
                    onClick={() => setAnimationStyle(key)}
                    style={getFilterButtonStyle(
                      animationStyle === key,
                      colorPalettes[colorPalette],
                      themeMode === 'dark'
                    )}
                    title={anim.description}
                  >
                    {key === 'scale' ? '🔍' :
                     key === 'lift' ? '⬆️' :
                     key === 'rotate3d' ? '🔄' :
                     key === 'tilt' ? '📐' :
                     key === 'parallax' ? '📷' :
                     key === 'fade' ? '👻' :
                     key === 'bounce' ? '⚡' :
                     '🎬'} {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Animation Speed Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: themeMode === 'dark' ? '#FFFFFF' : '#374151',
                minWidth: '120px'
              }}>
                ⏱️ Speed:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(animationSpeeds).map(([key, speed]) => (
                  <button
                    key={key}
                    onClick={() => setAnimationSpeed(key)}
                    style={getFilterButtonStyle(
                      animationSpeed === key,
                      colorPalettes[colorPalette],
                      themeMode === 'dark'
                    )}
                    title={`${speed.duration} - ${speed.description}`}
                  >
                    {key === 'instant' ? '⚡' :
                     key === 'fast' ? '🏃' :
                     key === 'smooth' ? '🌊' :
                     key === 'elegant' ? '🦢' :
                     key === 'slow' ? '🐌' :
                     key === 'cinematic' ? '🎬' :
                     key === 'spring' ? '🏀' :
                     '⏰'} {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Spacing Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: themeMode === 'dark' ? '#FFFFFF' : '#374151',
                minWidth: '120px'
              }}>
                📏 Spacing:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(spacingOptions).map(([key, space]) => (
                  <button
                    key={key}
                    onClick={() => setSpacing(key)}
                    style={getFilterButtonStyle(
                      spacing === key,
                      colorPalettes[colorPalette],
                      themeMode === 'dark'
                    )}
                    title={space.description}
                  >
                    {key === 'none' ? '⬜' :
                     key === 'tight' ? '▫️' :
                     key === 'compact' ? '◽' :
                     key === 'comfortable' ? '◻️' :
                     key === 'relaxed' ? '⬜' :
                     key === 'loose' ? '🟦' :
                     key === 'airy' ? '🌐' :
                     '📦'} {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Layout Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: themeMode === 'dark' ? '#FFFFFF' : '#374151',
                minWidth: '120px'
              }}>
                🎯 Layout:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(layoutOptions).map(([key, grid]) => (
                  <button
                    key={key}
                    onClick={() => setLayout(key)}
                    style={getFilterButtonStyle(
                      layout === key,
                      colorPalettes[colorPalette],
                      themeMode === 'dark'
                    )}
                    title={grid.description}
                  >
                    {key === 'masonry' ? '🧱' :
                     key === 'uniform' ? '⬛' :
                     key === 'featured' ? '⭐' :
                     key === 'pinterest' ? '📌' :
                     key === 'bento' ? '🍱' :
                     key === 'zigzag' ? '⚡' :
                     key === 'mosaic' ? '🎨' :
                     key === 'editorial' ? '📖' :
                     '📐'} {key}
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
            gridTemplateColumns: activeVariant.gridTemplate,
            gridAutoRows: activeVariant.gridRows,
            gap: activeVariant.gap,
            marginBottom: '5rem'
          }}>
            {weddings.map((wedding, index) => {
              // Calculate grid spans based on layout
              let gridSpan = {};
              let editorialSpan = null;
              
              if (activeVariant.editorial && activeVariant.asymmetric) {
                // Editorial asymmetric layout
                editorialSpan = activeVariant.asymmetric[index % activeVariant.asymmetric.length];
                gridSpan = {
                  gridColumn: `span ${editorialSpan.col}`,
                  gridRow: `span ${editorialSpan.row}`
                };
              } else if (activeVariant.randomize) {
                // Randomize spans for mosaic layout
                const spanOptions = [
                  { gridColumn: 'span 1', gridRow: 'span 1' },
                  { gridColumn: 'span 2', gridRow: 'span 1' },
                  { gridColumn: 'span 1', gridRow: 'span 2' },
                  { gridColumn: 'span 2', gridRow: 'span 2' }
                ];
                gridSpan = spanOptions[index % spanOptions.length];
              } else if (activeVariant.alternating && index % 2 === 0) {
                // Zigzag pattern
                gridSpan = {
                  gridColumn: `span ${activeVariant.heroSpan.col}`,
                  gridRow: `span ${activeVariant.heroSpan.row}`
                };
              } else if (index === 0) {
                // Hero card
                gridSpan = {
                  gridColumn: `span ${activeVariant.heroSpan.col}`,
                  gridRow: `span ${activeVariant.heroSpan.row}`
                };
              } else if (index === 5) {
                // Wide card
                gridSpan = {
                  gridColumn: `span ${activeVariant.wideSpan.col}`,
                  gridRow: `span ${activeVariant.wideSpan.row}`
                };
              }
              
              // Apply custom heights for pinterest layout
              const customHeight = activeVariant.heights 
                ? { height: `${activeVariant.heights[index % activeVariant.heights.length]}px` }
                : {};
              
              const cardStyle = {
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: activeVariant.borderRadius,
                boxShadow: activeVariant.boxShadow,
                ...(activeVariant.border && { border: activeVariant.border }),
                ...(activeVariant.backdropFilter && { backdropFilter: activeVariant.backdropFilter }),
                ...(activeVariant.filter && { filter: activeVariant.filter }),
                ...gridSpan,
                ...customHeight
              };

              return (
                <div
                  key={index}
                  className="gallery-item-five-filters"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    // Apply animation style transform
                    if (activeVariant.cardTransform !== 'none') {
                      e.currentTarget.style.transform = activeVariant.cardTransform;
                    }
                    
                    // Apply special effects
                    if (activeVariant.cardEffect === 'glow') {
                      e.currentTarget.style.animation = `neonPulse 3s infinite`;
                    } else if (activeVariant.cardEffect === 'hard' && activeVariant.shadowOffset) {
                      e.currentTarget.style.boxShadow = `${activeVariant.shadowOffset} ${colorPalettes[colorPalette].primary}`;
                    } else if (animationStyle === 'bounce' && animationSpeed !== 'instant') {
                      e.currentTarget.style.animation = `bounce ${activeVariant.animationDuration} ${activeVariant.animationEasing}`;
                    }
                    
                    // Apply image transform
                    const img = e.currentTarget.querySelector('img');
                    if (img && activeVariant.imageScale > 1) {
                      if (activeVariant.imageTransform === 'scale') {
                        img.style.transform = `scale(${activeVariant.imageScale})`;
                      } else if (activeVariant.imageTransform) {
                        img.style.transform = activeVariant.imageTransform.replace('scale', `scale(${activeVariant.imageScale})`);
                      }
                    }
                    
                    // Show overlay
                    const overlay = e.currentTarget.querySelector('.gallery-overlay');
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    // Reset transforms
                    e.currentTarget.style.animation = '';
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = activeVariant.boxShadow;
                    
                    // Reset image
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = '';
                    
                    // Hide overlay
                    const overlay = e.currentTarget.querySelector('.gallery-overlay');
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <img
                    src={wedding.image}
                    alt={`${wedding.coupleName} Wedding`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
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
                      opacity: 0
                    }}
                  >
                    {(() => {
                      // Determine if this is a small card based on grid span
                      const isSmallCard = (
                        (gridSpan.gridColumn === 'span 1' && gridSpan.gridRow === 'span 1') ||
                        (gridSpan.gridColumn === 'span 1' && gridSpan.gridRow === 'span 2') ||
                        (gridSpan.gridColumn === 'span 2' && gridSpan.gridRow === 'span 1') ||
                        (activeVariant.editorial && editorialSpan && 
                          (editorialSpan.col <= 3 || editorialSpan.row <= 2))
                      );
                      
                      const isMediumCard = (
                        (gridSpan.gridColumn === 'span 2' && gridSpan.gridRow === 'span 2') ||
                        (gridSpan.gridColumn === 'span 3' && gridSpan.gridRow === 'span 2') ||
                        (activeVariant.editorial && editorialSpan && 
                          (editorialSpan.col === 4 || editorialSpan.col === 5))
                      );
                      
                      // Adjust font sizes based on card size for editorial style
                      const nameFontSize = styleEffect === 'editorial' 
                        ? (isSmallCard ? '1.25rem' : isMediumCard ? '1.75rem' : '2.5rem')
                        : '1.75rem';
                      
                      const seasonFontSize = styleEffect === 'editorial'
                        ? (isSmallCard ? '0.625rem' : '0.75rem')
                        : '0.875rem';
                        
                      const detailsFontSize = styleEffect === 'editorial'
                        ? (isSmallCard ? '0.75rem' : isMediumCard ? '0.875rem' : '1rem')
                        : '0.875rem';
                        
                      const overlayPadding = styleEffect === 'editorial'
                        ? (isSmallCard ? '1.5rem' : '3rem')
                        : '2rem';
                      
                      // Hide details on very small cards in editorial mode
                      const showDetails = !(styleEffect === 'editorial' && isSmallCard && 
                        gridSpan.gridRow === 'span 1');
                      
                      return (
                        <div style={{ padding: overlayPadding, width: '100%' }}>
                          <div className="gallery-couple-names" style={{
                            fontFamily: styleEffect === 'editorial' ? "'Playfair Display', serif" : "'Dancing Script', cursive",
                            fontSize: nameFontSize,
                            color: activeVariant.coupleNameColor,
                            marginBottom: styleEffect === 'editorial' ? (isSmallCard ? '0.5rem' : '1rem') : '0.5rem',
                            fontWeight: styleEffect === 'editorial' ? 700 : 400,
                            letterSpacing: styleEffect === 'editorial' ? '-0.02em' : 'normal',
                            lineHeight: styleEffect === 'editorial' && isSmallCard ? '1.2' : 'normal'
                          }}>
                            {wedding.coupleName}
                          </div>
                          <div className="gallery-season" style={{
                            fontSize: seasonFontSize,
                            color: styleEffect === 'editorial' && colorPalette === 'editorial' ? '#C9302C' : activeVariant.seasonColor,
                            textTransform: 'uppercase',
                            letterSpacing: styleEffect === 'editorial' ? (isSmallCard ? '0.2em' : '0.3em') : '0.1em',
                            marginBottom: styleEffect === 'editorial' ? (isSmallCard ? '0.5rem' : '0.75rem') : '0.25rem',
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: styleEffect === 'editorial' ? 600 : 400
                          }}>
                            {wedding.season}
                          </div>
                          {showDetails && (
                            <div className="gallery-details" style={{
                              fontSize: detailsFontSize,
                              color: activeVariant.detailsColor,
                              fontFamily: styleEffect === 'editorial' ? "'Georgia', serif" : "'Montserrat', sans-serif",
                              lineHeight: styleEffect === 'editorial' ? (isSmallCard ? '1.4' : '1.6') : '1.4',
                              fontStyle: styleEffect === 'editorial' ? 'italic' : 'normal'
                            }}>
                              {wedding.details}
                            </div>
                          )}
                        </div>
                      );
                    })()}
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
          title={`View Love Stories Gallery - Seven Filter Configuration`}
          theme="light"
          sections={[
            {
              title: "Seven-Filter Design Tokens",
              code: `/* Seven-Filter System Design Tokens */
:root {
  /* 1. Theme Mode: ${themeMode} */
  --theme-mode: ${themeMode};
  --shadow-strength: ${themeModes[themeMode].shadowStrength};
  --overlay-darkness: ${themeModes[themeMode].overlayDarkness};
  
  /* 2. Color Palette: ${colorPalette} */
  --color-primary: ${colorPalettes[colorPalette].primary};
  --color-secondary: ${colorPalettes[colorPalette].secondary};
  --color-accent: ${colorPalettes[colorPalette].accent};
  --color-neutral: ${colorPalettes[colorPalette].neutral};
  
  /* 3. Style Effect: ${styleEffect} */
  --border-radius: ${styleEffects[styleEffect].borderRadius};
  --card-effect: ${styleEffects[styleEffect].cardEffect};
  --overlay-style: ${styleEffects[styleEffect].overlayStyle};
  ${styleEffects[styleEffect].backdropFilter ? `--backdrop-filter: ${styleEffects[styleEffect].backdropFilter};` : ''}
  ${styleEffects[styleEffect].border ? `--card-border: ${styleEffects[styleEffect].border};` : ''}
  
  /* 4. Animation Style: ${animationStyle} */
  --animation-type: ${animationStyle};
  --image-transform: ${animationStyles[animationStyle].imageTransform};
  --image-scale: ${animationStyles[animationStyle].imageScale};
  --card-transform: ${animationStyles[animationStyle].cardTransform};
  
  /* 5. Animation Speed: ${animationSpeed} */
  --animation-duration: ${animationSpeeds[animationSpeed].duration};
  --animation-easing: ${animationSpeeds[animationSpeed].easing};
  
  /* 6. Spacing: ${spacing} */
  --gap: ${spacingOptions[spacing].gap};
  --section-padding: ${spacingOptions[spacing].padding};
  
  /* 7. Layout: ${layout} */
  --grid-columns: ${layoutOptions[layout].gridTemplate};
  --grid-rows: ${layoutOptions[layout].gridRows};
  --hero-col-span: ${layoutOptions[layout].heroSpan.col};
  --hero-row-span: ${layoutOptions[layout].heroSpan.row};
  --wide-col-span: ${layoutOptions[layout].wideSpan.col};
  --wide-row-span: ${layoutOptions[layout].wideSpan.row};
  
  /* Combined Values */
  --section-bg: ${activeVariant.sectionBg};
  --overlay-bg: ${activeVariant.overlayBg};
  --box-shadow: ${activeVariant.boxShadow};
}`
            },
            {
              title: "Filter Combinations",
              code: `// Seven Independent Filter System
const filters = {
  themeMode: '${themeMode}',       // Light/Dark (2)
  colorPalette: '${colorPalette}', // 9 color options
  styleEffect: '${styleEffect}',   // 7 visual styles
  animationStyle: '${animationStyle}', // 7 animation types
  animationSpeed: '${animationSpeed}', // 7 speed options
  spacing: '${spacing}',           // 7 spacing options
  layout: '${layout}'              // 7 layout patterns
};

// Total Combinations: 2 × 10 × 8 × 7 × 7 × 7 × 8 = 439,040 unique variants!

// Animation Styles
const animationStyles = {
  scale: { description: 'Zoom in on hover' },
  lift: { description: 'Lift up with shadow' },
  rotate3d: { description: '3D perspective rotation' },
  tilt: { description: 'Tilt at an angle' },
  parallax: { description: 'Depth parallax effect' },
  fade: { description: 'Fade overlay only' },
  bounce: { description: 'Bounce animation' }
};

// Animation Speeds  
const animationSpeeds = {
  instant: { duration: '0s', description: 'No animation' },
  fast: { duration: '0.15s', description: 'Quick snap' },
  smooth: { duration: '0.3s', description: 'Smooth transition' },
  elegant: { duration: '0.6s', description: 'Elegant glide' },
  slow: { duration: '1.2s', description: 'Slow motion' },
  cinematic: { duration: '2.5s', description: 'Cinematic feel' },
  spring: { duration: '0.5s', description: 'Spring bounce' }
};

// Spacing Options
const spacingOptions = {
  none: { gap: '0', description: 'No gap' },
  tight: { gap: '0.5rem', description: 'Minimal space' },
  compact: { gap: '1rem', description: 'Compact' },
  comfortable: { gap: '2rem', description: 'Balanced' },
  relaxed: { gap: '3rem', description: 'Spacious' },
  loose: { gap: '4rem', description: 'Extra space' },
  airy: { gap: '5rem', description: 'Maximum space' }
};

// Layout Patterns
const layoutOptions = {
  masonry: 'Classic masonry grid',
  uniform: 'Equal-sized cards',
  featured: 'Hero-focused layout',
  pinterest: 'Pinterest-style varied heights',
  bento: 'Bento box arrangement',
  zigzag: 'Alternating zigzag pattern',
  mosaic: 'Random mixed sizes'
};`
            },
            {
              title: "CSS Implementation",
              code: `/* CSS for Seven-Filter System */
.gallery-item {
  /* Style properties */
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  
  /* Animation properties */
  transition: all var(--animation-duration) var(--animation-easing);
}

.gallery-item img {
  transition: transform var(--animation-duration) var(--animation-easing);
}

.gallery-item:hover {
  transform: var(--card-transform);
}

.gallery-item:hover img {
  transform: var(--image-transform) scale(var(--image-scale));
}

/* Special animations */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes neonPulse {
  0%, 100% { 
    box-shadow: 0 0 30px var(--color-primary), 
                inset 0 0 20px var(--color-primary);
  }
  50% { 
    box-shadow: 0 0 50px var(--color-primary), 
                0 0 80px var(--color-accent);
  }
}`
            }
          ]}
        />
      </div>
    </>
  );
}