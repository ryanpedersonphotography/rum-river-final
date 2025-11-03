import React, { useState, useEffect } from 'react';
import Icon from '../components/Icon';
import CodeAccordion from '../components/CodeAccordion';

/**
 * RumRiverExperienceDemoStandalone Component
 * 
 * A comprehensive multi-filter demo of "The Rum River Experience - More Than a Venue" 
 * section from the home page with magazine-style editorial variants and live code generation.
 */

export default function RumRiverExperienceDemoStandalone() {
  // Phase 1: Foundation - 8 Independent Filter States
  const [themeMode, setThemeMode] = useState('light');
  const [layout, setLayout] = useState('original');
  const [colorPalette, setColorPalette] = useState('original');
  const [featureStyle, setFeatureStyle] = useState('original');
  const [imageStyle, setImageStyle] = useState('standard');
  const [animationStyle, setAnimationStyle] = useState('fade');
  const [animationSpeed, setAnimationSpeed] = useState('smooth');
  const [typography, setTypography] = useState('elegant');

  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Experience data structure
  const experienceData = {
    scriptAccent: "The Rum River Experience",
    title: "More Than a Venue",
    description: "We don't just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.",
    features: [
      {
        title: "All-Inclusive Planning",
        description: "From conception to celebration, our experienced team handles every detail so you can focus on what matters most—each other.",
        icon: "check",
        iconColor: "primary"
      },
      {
        title: "Customizable Packages",
        description: "Every love story is unique, and your wedding should be too. We offer flexible packages that adapt to your vision and budget.",
        icon: "sparkles",
        iconColor: "primary"
      },
      {
        title: "Historic Charm",
        description: "Our beautifully restored 1920s barn combines rustic elegance with modern amenities for a truly timeless celebration.",
        icon: "home",
        iconColor: "primary"
      },
      {
        title: "Dedicated Support",
        description: "Your dedicated coordinator will be with you every step of the way, ensuring your day unfolds exactly as you've dreamed.",
        icon: "heart",
        iconColor: "primary"
      }
    ],
    image: "/images/venue/barn-interior-exposed-beams-chandeliers.jpg",
    imageAlt: "Beautiful barn interior with exposed beams and elegant chandeliers"
  };

  // Theme Mode Options
  const themeModes = {
    light: {
      bgMultiplier: 1,
      textInvert: false,
      shadowStrength: 0.15,
      overlayDarkness: 0.7
    },
    dark: {
      bgMultiplier: 0.1,
      textInvert: true,
      shadowStrength: 0.5,
      overlayDarkness: 0.9
    }
  };

  // Layout Options (Magazine-style editorial variants)
  const layoutOptions = {
    'original': {
      structure: 'content-left-image-right',
      gridColumns: '1fr 1fr',
      contentOrder: 1,
      imageOrder: 2,
      description: 'Original Home Page Layout'
    },
    'editorial-split': {
      structure: 'split-screen-magazine',
      gridColumns: '60% 40%',
      contentOrder: 1,
      imageOrder: 2,
      description: 'Editorial Split Screen'
    },
    'feature-focus': {
      structure: 'large-feature-cards',
      gridColumns: '1fr',
      contentOrder: 1,
      imageOrder: 2,
      description: 'Feature Focus Cards'
    },
    'asymmetrical': {
      structure: 'off-grid-magazine',
      gridColumns: '45% 55%',
      contentOrder: 2,
      imageOrder: 1,
      description: 'Asymmetrical Magazine'
    },
    'minimal': {
      structure: 'clean-editorial',
      gridColumns: '50% 50%',
      contentOrder: 1,
      imageOrder: 2,
      description: 'Minimal Editorial'
    },
    'stacked': {
      structure: 'vertical-stack',
      gridColumns: '1fr',
      contentOrder: 1,
      imageOrder: 2,
      description: 'Stacked Vertical'
    }
  };

  // Color Palette Options
  const colorPalettes = {
    original: {
      primary: 'var(--dusty-rose, #9D6B7B)',
      secondary: 'var(--blush-pink, #F4E4E1)',
      accent: 'var(--warm-walnut, #6B4E3D)',
      neutral: 'var(--text-dark, #2C2416)',
      scriptColor: 'var(--dusty-rose, #9D6B7B)',
      name: 'Original Blush'
    },
    elegant: {
      primary: '#8B5A3C',
      secondary: '#F5F1EC',
      accent: '#6B4E3D',
      neutral: '#2C2416',
      scriptColor: '#8B5A3C',
      name: 'Elegant Brown'
    },
    modern: {
      primary: '#2563EB',
      secondary: '#F8FAFC',
      accent: '#1E40AF',
      neutral: '#1F2937',
      scriptColor: '#2563EB',
      name: 'Modern Blue'
    },
    nature: {
      primary: '#059669',
      secondary: '#ECFDF5',
      accent: '#047857',
      neutral: '#064E3B',
      scriptColor: '#059669',
      name: 'Nature Green'
    },
    luxury: {
      primary: '#7C3AED',
      secondary: '#FAF5FF',
      accent: '#6D28D9',
      neutral: '#4C1D95',
      scriptColor: '#7C3AED',
      name: 'Luxury Purple'
    }
  };

  // Feature Style Options
  const featureStyles = {
    original: {
      layout: 'horizontal-list',
      cardStyle: 'minimal',
      iconPosition: 'left',
      spacing: 'comfortable',
      description: 'Original List Style'
    },
    cards: {
      layout: 'grid-cards',
      cardStyle: 'elevated',
      iconPosition: 'top',
      spacing: 'compact',
      description: 'Feature Cards'
    },
    magazine: {
      layout: 'magazine-grid',
      cardStyle: 'editorial',
      iconPosition: 'floating',
      spacing: 'editorial',
      description: 'Magazine Style'
    },
    minimal: {
      layout: 'clean-list',
      cardStyle: 'borderless',
      iconPosition: 'inline',
      spacing: 'minimal',
      description: 'Minimal Clean'
    },
    showcase: {
      layout: 'hero-features',
      cardStyle: 'hero',
      iconPosition: 'large',
      spacing: 'spacious',
      description: 'Feature Showcase'
    }
  };

  // Image Style Options
  const imageStyles = {
    standard: {
      borderRadius: '12px',
      aspectRatio: '4/3',
      objectFit: 'cover',
      filter: 'none',
      description: 'Standard Photo'
    },
    magazine: {
      borderRadius: '0',
      aspectRatio: '3/4',
      objectFit: 'cover',
      filter: 'contrast(1.1) saturate(1.1)',
      description: 'Magazine Portrait'
    },
    artistic: {
      borderRadius: '20px',
      aspectRatio: '16/10',
      objectFit: 'cover',
      filter: 'sepia(0.1) contrast(1.05)',
      description: 'Artistic Wide'
    },
    editorial: {
      borderRadius: '8px',
      aspectRatio: '1/1',
      objectFit: 'cover',
      filter: 'brightness(1.05) contrast(1.02)',
      description: 'Editorial Square'
    },
    vintage: {
      borderRadius: '16px',
      aspectRatio: '5/4',
      objectFit: 'cover',
      filter: 'sepia(0.2) brightness(0.95) contrast(1.1)',
      description: 'Vintage Film'
    }
  };

  // Animation Style Options
  const animationStyles = {
    fade: {
      entrance: 'opacity',
      transform: 'none',
      description: 'Fade In'
    },
    slide: {
      entrance: 'transform',
      transform: 'translateY(30px)',
      description: 'Slide Up'
    },
    scale: {
      entrance: 'transform',
      transform: 'scale(0.95)',
      description: 'Scale In'
    },
    editorial: {
      entrance: 'transform',
      transform: 'translateX(-20px)',
      description: 'Editorial Slide'
    }
  };

  // Animation Speed Options
  const animationSpeeds = {
    instant: { duration: '0s', easing: 'linear', description: 'No Animation' },
    quick: { duration: '0.2s', easing: 'ease-out', description: 'Quick' },
    smooth: { duration: '0.4s', easing: 'cubic-bezier(0.4, 0, 0.2, 1)', description: 'Smooth' },
    elegant: { duration: '0.8s', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Elegant' }
  };

  // Typography Options
  const typographyOptions = {
    elegant: {
      scriptFont: "'Dancing Script', cursive",
      titleFont: "'Playfair Display', serif",
      bodyFont: "'Montserrat', sans-serif",
      scriptSize: '1.75rem',
      titleSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      description: 'Elegant Classic'
    },
    modern: {
      scriptFont: "'Inter', sans-serif",
      titleFont: "'Inter', sans-serif",
      bodyFont: "'Inter', sans-serif",
      scriptSize: '1.5rem',
      titleSize: 'clamp(2rem, 4vw, 3rem)',
      description: 'Modern Clean'
    },
    editorial: {
      scriptFont: "'Playfair Display', serif",
      titleFont: "'Playfair Display', serif",
      bodyFont: "'Source Sans Pro', sans-serif",
      scriptSize: '1.625rem',
      titleSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
      description: 'Editorial Magazine'
    },
    minimal: {
      scriptFont: "'Helvetica Neue', sans-serif",
      titleFont: "'Helvetica Neue', sans-serif",
      bodyFont: "'Helvetica Neue', sans-serif",
      scriptSize: '1.25rem',
      titleSize: 'clamp(2rem, 3.5vw, 2.75rem)',
      description: 'Minimal Sans'
    }
  };

  // Combine all filters to create final variant
  const getCurrentVariant = () => {
    const theme = themeModes[themeMode];
    const layoutConfig = layoutOptions[layout];
    const palette = colorPalettes[colorPalette];
    const featureConfig = featureStyles[featureStyle];
    const imageConfig = imageStyles[imageStyle];
    const animation = animationStyles[animationStyle];
    const speed = animationSpeeds[animationSpeed];
    const typo = typographyOptions[typography];

    const isDark = themeMode === 'dark';
    
    return {
      // Theme properties
      sectionBg: isDark 
        ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
        : palette.secondary,
      textColor: isDark ? '#FFFFFF' : palette.neutral,
      
      // Layout properties
      layoutStructure: layoutConfig.structure,
      gridColumns: layoutConfig.gridColumns,
      contentOrder: layoutConfig.contentOrder,
      imageOrder: layoutConfig.imageOrder,
      
      // Color properties
      primary: palette.primary,
      secondary: palette.secondary,
      accent: palette.accent,
      neutral: palette.neutral,
      scriptColor: palette.scriptColor,
      paletteName: palette.name,
      
      // Feature properties
      featureLayout: featureConfig.layout,
      featureCardStyle: featureConfig.cardStyle,
      featureIconPosition: featureConfig.iconPosition,
      featureSpacing: featureConfig.spacing,
      
      // Image properties
      imageBorderRadius: imageConfig.borderRadius,
      imageAspectRatio: imageConfig.aspectRatio,
      imageObjectFit: imageConfig.objectFit,
      imageFilter: imageConfig.filter,
      
      // Typography properties
      scriptFont: typo.scriptFont,
      titleFont: typo.titleFont,
      bodyFont: typo.bodyFont,
      scriptSize: typo.scriptSize,
      titleSize: typo.titleSize,
      
      // Animation properties
      animationDuration: speed.duration,
      animationEasing: speed.easing,
      animationEntrance: animation.entrance,
      animationTransform: animation.transform,
      
      // Shadow and styling
      boxShadow: isDark 
        ? `0 25px 50px rgba(0, 0, 0, ${theme.shadowStrength + 0.3})`
        : `0 25px 50px rgba(0, 0, 0, ${theme.shadowStrength})`,
      
      // Unique identifier
      id: `${themeMode}-${layout}-${colorPalette}-${featureStyle}-${imageStyle}-${animationStyle}-${animationSpeed}-${typography}`,
      label: `${themeMode} ${layoutConfig.description} ${palette.name} ${featureConfig.description}`
    };
  };

  const activeVariant = getCurrentVariant();

  // Filter button style helper
  const getFilterButtonStyle = (isActive) => ({
    padding: '8px 16px',
    borderRadius: '20px',
    border: isActive ? '2px solid' : '1px solid',
    borderColor: isActive 
      ? activeVariant.primary 
      : themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
    background: isActive ? activeVariant.primary : 'transparent',
    color: isActive 
      ? '#FFFFFF' 
      : themeMode === 'dark' ? '#FFFFFF' : '#374151',
    fontSize: '0.875rem',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: isActive ? 600 : 400,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  });

  // Render features based on style
  const renderFeatures = () => {
    const isCardStyle = featureStyle === 'cards' || featureStyle === 'magazine' || featureStyle === 'showcase';
    const isMinimalStyle = featureStyle === 'minimal';
    
    if (isCardStyle) {
      return (
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 
            featureStyle === 'showcase' ? '1fr 1fr' : 'repeat(2, 1fr)',
          gap: featureStyle === 'showcase' ? '2rem' : '1.5rem',
          marginTop: '3rem'
        }}>
          {experienceData.features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: featureStyle === 'showcase' ? '2.5rem' : '1.5rem',
                background: themeMode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : 'rgba(255, 255, 255, 0.8)',
                borderRadius: featureStyle === 'magazine' ? '8px' : '16px',
                boxShadow: featureStyle === 'showcase' 
                  ? `0 20px 40px rgba(0, 0, 0, 0.1)` 
                  : `0 8px 20px rgba(0, 0, 0, 0.08)`,
                transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                cursor: 'pointer',
                border: featureStyle === 'magazine' ? `1px solid ${activeVariant.primary}` : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = featureStyle === 'showcase' 
                  ? `0 20px 40px rgba(0, 0, 0, 0.1)` 
                  : `0 8px 20px rgba(0, 0, 0, 0.08)`;
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: featureStyle === 'showcase' ? 'column' : 'row',
                alignItems: featureStyle === 'showcase' ? 'center' : 'flex-start',
                gap: featureStyle === 'showcase' ? '1rem' : '1rem',
                textAlign: featureStyle === 'showcase' ? 'center' : 'left'
              }}>
                <div style={{
                  width: featureStyle === 'showcase' ? '4rem' : '3rem',
                  height: featureStyle === 'showcase' ? '4rem' : '3rem',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${activeVariant.primary}, ${activeVariant.accent})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 8px 20px rgba(0, 0, 0, 0.15)`
                }}>
                  <Icon 
                    name={feature.icon} 
                    size={featureStyle === 'showcase' ? 'xl' : 'lg'} 
                    color="white" 
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: featureStyle === 'showcase' ? '1.5rem' : '1.25rem',
                    fontWeight: 600,
                    color: activeVariant.primary,
                    marginBottom: '0.75rem',
                    fontFamily: activeVariant.titleFont
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{
                    fontSize: featureStyle === 'showcase' ? '1rem' : '0.95rem',
                    lineHeight: '1.6',
                    color: activeVariant.textColor,
                    opacity: 0.9,
                    margin: 0
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Original/minimal list style
    return (
      <div style={{
        marginTop: '2rem'
      }}>
        {experienceData.features.map((feature, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: isMinimalStyle ? '0.75rem' : '1rem',
              marginBottom: isMinimalStyle ? '1.5rem' : '2rem',
              alignItems: 'flex-start',
              padding: isMinimalStyle ? '0' : '0.5rem',
              borderRadius: isMinimalStyle ? '0' : '8px',
              transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
            }}
          >
            <div style={{
              fontSize: isMinimalStyle ? '1.5rem' : '2rem',
              flexShrink: 0,
              color: activeVariant.primary,
              marginTop: '0.25rem'
            }}>
              <Icon 
                name={feature.icon} 
                size={isMinimalStyle ? 'md' : 'lg'} 
                color="primary" 
              />
            </div>
            <div>
              <h4 style={{
                fontSize: isMinimalStyle ? '1.125rem' : '1.25rem',
                fontWeight: isMinimalStyle ? 500 : 600,
                color: activeVariant.accent,
                marginBottom: '0.5rem',
                fontFamily: activeVariant.titleFont
              }}>
                {feature.title}
              </h4>
              <p style={{
                fontSize: isMinimalStyle ? '0.9rem' : '1rem',
                lineHeight: '1.6',
                color: activeVariant.textColor,
                opacity: 0.8,
                margin: 0
              }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{
      fontFamily: activeVariant.bodyFont,
      lineHeight: 1.6,
      color: activeVariant.textColor,
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      transition: 'all 0.6s ease'
    }}>
      
      {/* CSS Animations and Styles */}
      <style>{`
        .experience-demo-item {
          transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
        }
        
        .experience-demo-item:hover {
          transform: translateY(-5px);
        }
        
        .magazine-feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .editorial-feature {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          background: linear-gradient(135deg, ${activeVariant.primary}10, ${activeVariant.secondary});
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .magazine-feature-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      {/* Multi-Filter Controls */}
      <section style={{
        background: themeMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '2rem',
            fontFamily: "'Playfair Display', serif"
          }}>
            🏰 Rum River Experience Multi-Filter Demo
          </h1>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            
            {/* Theme Mode */}
            <div style={{ 
              display: 'flex', 
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? '10px' : '20px',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: isMobile ? 'auto' : '120px'
              }}>
                🌓 Theme:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {Object.keys(themeModes).map(mode => (
                  <button
                    key={mode}
                    onClick={() => setThemeMode(mode)}
                    style={getFilterButtonStyle(themeMode === mode)}
                  >
                    {mode === 'light' ? '☀️' : '🌙'} {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Layout */}
            <div style={{ 
              display: 'flex', 
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? '10px' : '20px',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: isMobile ? 'auto' : '120px'
              }}>
                📐 Layout:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(layoutOptions).map(([key, layoutConfig]) => (
                  <button
                    key={key}
                    onClick={() => setLayout(key)}
                    style={getFilterButtonStyle(layout === key)}
                    title={layoutConfig.description}
                  >
                    {layoutConfig.description}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div style={{ 
              display: 'flex', 
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? '10px' : '20px',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: isMobile ? 'auto' : '120px'
              }}>
                🎨 Colors:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(colorPalettes).map(([key, palette]) => (
                  <button
                    key={key}
                    onClick={() => setColorPalette(key)}
                    style={{
                      ...getFilterButtonStyle(colorPalette === key),
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
                    {palette.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Style */}
            <div style={{ 
              display: 'flex', 
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? '10px' : '20px',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: isMobile ? 'auto' : '120px'
              }}>
                ⭐ Features:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(featureStyles).map(([key, feature]) => (
                  <button
                    key={key}
                    onClick={() => setFeatureStyle(key)}
                    style={getFilterButtonStyle(featureStyle === key)}
                  >
                    {feature.description}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Style */}
            <div style={{ 
              display: 'flex', 
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? '10px' : '20px',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: isMobile ? 'auto' : '120px'
              }}>
                📸 Image:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(imageStyles).map(([key, imageStyle]) => (
                  <button
                    key={key}
                    onClick={() => setImageStyle(key)}
                    style={getFilterButtonStyle(imageStyle === key)}
                  >
                    {imageStyle.description}
                  </button>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div style={{ 
              display: 'flex', 
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? '10px' : '20px',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: isMobile ? 'auto' : '120px'
              }}>
                ✍️ Typography:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(typographyOptions).map(([key, typo]) => (
                  <button
                    key={key}
                    onClick={() => setTypography(key)}
                    style={getFilterButtonStyle(typography === key)}
                  >
                    {typo.description}
                  </button>
                ))}
              </div>
            </div>

            {/* Animation Style */}
            <div style={{ 
              display: 'flex', 
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? '10px' : '20px',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: isMobile ? 'auto' : '120px'
              }}>
                🎭 Animation:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(animationStyles).map(([key, anim]) => (
                  <button
                    key={key}
                    onClick={() => setAnimationStyle(key)}
                    style={getFilterButtonStyle(animationStyle === key)}
                    title={anim.description}
                  >
                    {anim.description}
                  </button>
                ))}
              </div>
            </div>

            {/* Animation Speed */}
            <div style={{ 
              display: 'flex', 
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? '10px' : '20px',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: isMobile ? 'auto' : '120px'
              }}>
                ⏱️ Speed:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(animationSpeeds).map(([key, speed]) => (
                  <button
                    key={key}
                    onClick={() => setAnimationSpeed(key)}
                    style={getFilterButtonStyle(animationSpeed === key)}
                    title={speed.description}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Experience Section */}
      <section style={{
        background: activeVariant.sectionBg,
        padding: '5rem 0',
        transition: 'background 0.6s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 50px'
        }}>
          <div 
            className="experience-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : activeVariant.gridColumns,
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            {/* Content Section */}
            <div style={{
              order: isMobile ? 1 : activeVariant.contentOrder
            }}>
              <div style={{
                fontFamily: activeVariant.scriptFont,
                fontSize: activeVariant.scriptSize,
                color: activeVariant.scriptColor,
                marginBottom: '1rem',
                fontWeight: 400
              }}>
                {experienceData.scriptAccent}
              </div>
              
              <h2 style={{
                fontFamily: activeVariant.titleFont,
                fontSize: activeVariant.titleSize,
                fontWeight: 500,
                marginBottom: '1.5rem',
                color: activeVariant.textColor,
                margin: '0 0 1.5rem 0',
                lineHeight: 1.2
              }}>
                {experienceData.title}
              </h2>
              
              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.7',
                fontWeight: 300,
                opacity: 0.9,
                marginBottom: '2rem',
                color: activeVariant.textColor,
                fontFamily: activeVariant.bodyFont
              }}>
                {experienceData.description}
              </p>

              {/* Dynamic Features Based on Style */}
              {renderFeatures()}
            </div>

            {/* Image Section */}
            <div style={{
              order: isMobile ? 2 : activeVariant.imageOrder
            }}>
              <div style={{
                borderRadius: activeVariant.imageBorderRadius,
                overflow: 'hidden',
                aspectRatio: activeVariant.imageAspectRatio,
                boxShadow: activeVariant.boxShadow,
                transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
              }}>
                <img
                  src={experienceData.image}
                  alt={experienceData.imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: activeVariant.imageObjectFit,
                    filter: activeVariant.imageFilter,
                    transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Code Generation */}
      <div style={{
        padding: '2rem',
        background: themeMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'rgba(0, 0, 0, 0.05)',
        borderRadius: '20px',
        border: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
        maxWidth: '1200px',
        margin: '4rem auto'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          color: activeVariant.primary,
          marginBottom: '1.5rem',
          fontFamily: "'Playfair Display', serif",
          textAlign: 'center'
        }}>
          🔧 Generated Code
        </h3>
        
        <CodeAccordion
          sections={[
            {
              title: "📦 Design Tokens",
              language: "css",
              code: `/* Rum River Experience Design Tokens - ${activeVariant.label} */
:root {
  /* Theme Variables */
  --theme-mode: ${themeMode};
  --section-bg: ${activeVariant.sectionBg.includes('gradient') ? activeVariant.sectionBg : `"${activeVariant.sectionBg}"`};
  --text-color: ${activeVariant.textColor};
  
  /* Color Palette - ${activeVariant.paletteName} */
  --primary-color: ${activeVariant.primary};
  --secondary-color: ${activeVariant.secondary};
  --accent-color: ${activeVariant.accent};
  --neutral-color: ${activeVariant.neutral};
  --script-color: ${activeVariant.scriptColor};
  
  /* Layout Configuration */
  --layout-structure: "${activeVariant.layoutStructure}";
  --grid-columns: ${activeVariant.gridColumns};
  --content-order: ${activeVariant.contentOrder};
  --image-order: ${activeVariant.imageOrder};
  
  /* Feature Styling */
  --feature-layout: ${activeVariant.featureLayout};
  --feature-card-style: ${activeVariant.featureCardStyle};
  --feature-icon-position: ${activeVariant.featureIconPosition};
  --feature-spacing: ${activeVariant.featureSpacing};
  
  /* Image Properties */
  --image-border-radius: ${activeVariant.imageBorderRadius};
  --image-aspect-ratio: ${activeVariant.imageAspectRatio};
  --image-object-fit: ${activeVariant.imageObjectFit};
  --image-filter: ${activeVariant.imageFilter};
  
  /* Typography */
  --script-font: ${activeVariant.scriptFont};
  --title-font: ${activeVariant.titleFont};
  --body-font: ${activeVariant.bodyFont};
  --script-size: ${activeVariant.scriptSize};
  --title-size: ${activeVariant.titleSize};
  
  /* Animation Properties */
  --animation-duration: ${activeVariant.animationDuration};
  --animation-easing: ${activeVariant.animationEasing};
  --animation-entrance: ${activeVariant.animationEntrance};
  --animation-transform: ${activeVariant.animationTransform};
}`
            },
            {
              title: "⚛️ React Component",
              language: "jsx",
              code: `// Rum River Experience Implementation
// Generated variant: ${activeVariant.id}

import React from 'react';
import Icon from './Icon';

export default function RumRiverExperience() {
  const experienceData = {
    scriptAccent: "The Rum River Experience",
    title: "More Than a Venue",
    description: "We don't just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.",
    features: [
      {
        title: "All-Inclusive Planning",
        description: "From conception to celebration, our experienced team handles every detail so you can focus on what matters most—each other.",
        icon: "check"
      },
      {
        title: "Customizable Packages", 
        description: "Every love story is unique, and your wedding should be too. We offer flexible packages that adapt to your vision and budget.",
        icon: "sparkles"
      },
      {
        title: "Historic Charm",
        description: "Our beautifully restored 1920s barn combines rustic elegance with modern amenities for a truly timeless celebration.",
        icon: "home"
      },
      {
        title: "Dedicated Support",
        description: "Your dedicated coordinator will be with you every step of the way, ensuring your day unfolds exactly as you've dreamed.",
        icon: "heart"
      }
    ],
    image: "/images/venue/barn-interior-exposed-beams-chandeliers.jpg",
    imageAlt: "Beautiful barn interior with exposed beams and elegant chandeliers"
  };

  return (
    <section className="experience-section">
      <div className="content-wrapper">
        <div className="experience-grid layout-${layout}">
          {/* Content Section */}
          <div className="experience-content">
            <div className="script-accent">{experienceData.scriptAccent}</div>
            <h2 className="section-title">{experienceData.title}</h2>
            <p className="lead">{experienceData.description}</p>
            
            <div className="experience-features feature-style-${featureStyle}">
              {experienceData.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <Icon name={feature.icon} size="lg" color="primary" />
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="experience-image">
            <img 
              src={experienceData.image} 
              alt={experienceData.imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}`
            },
            {
              title: "🎨 CSS Styles",
              language: "css",
              code: `/* Rum River Experience Styles - ${activeVariant.label} */
.experience-section {
  background: ${activeVariant.sectionBg.includes('gradient') ? activeVariant.sectionBg : activeVariant.sectionBg};
  padding: 5rem 0;
  transition: background 0.6s ease;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
}

.experience-grid {
  display: grid;
  grid-template-columns: ${activeVariant.gridColumns};
  gap: 4rem;
  align-items: center;
}

.experience-grid.layout-asymmetrical .experience-content {
  order: ${activeVariant.contentOrder};
}

.experience-grid.layout-asymmetrical .experience-image {
  order: ${activeVariant.imageOrder};
}

.script-accent {
  font-family: ${activeVariant.scriptFont};
  font-size: ${activeVariant.scriptSize};
  color: ${activeVariant.scriptColor};
  margin-bottom: 1rem;
  font-weight: 400;
}

.section-title {
  font-family: ${activeVariant.titleFont};
  font-size: ${activeVariant.titleSize};
  font-weight: 500;
  color: ${activeVariant.textColor};
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.lead {
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 2rem;
  color: ${activeVariant.textColor};
  font-family: ${activeVariant.bodyFont};
}

.experience-features {
  margin-top: ${featureStyle === 'cards' || featureStyle === 'magazine' || featureStyle === 'showcase' ? '3rem' : '2rem'};
}

${featureStyle === 'cards' || featureStyle === 'magazine' || featureStyle === 'showcase' ? `
.experience-features {
  display: grid;
  grid-template-columns: ${featureStyle === 'showcase' ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)'};
  gap: ${featureStyle === 'showcase' ? '2rem' : '1.5rem'};
}

.feature-item {
  padding: ${featureStyle === 'showcase' ? '2.5rem' : '1.5rem'};
  background: ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)'};
  border-radius: ${featureStyle === 'magazine' ? '8px' : '16px'};
  box-shadow: ${featureStyle === 'showcase' ? '0 20px 40px rgba(0, 0, 0, 0.1)' : '0 8px 20px rgba(0, 0, 0, 0.08)'};
  transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
  cursor: pointer;
  ${featureStyle === 'magazine' ? `border: 1px solid ${activeVariant.primary};` : ''}
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.feature-item .feature-icon {
  width: ${featureStyle === 'showcase' ? '4rem' : '3rem'};
  height: ${featureStyle === 'showcase' ? '4rem' : '3rem'};
  border-radius: 50%;
  background: linear-gradient(135deg, ${activeVariant.primary}, ${activeVariant.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
` : `
.feature-item {
  display: flex;
  gap: ${featureStyle === 'minimal' ? '0.75rem' : '1rem'};
  margin-bottom: ${featureStyle === 'minimal' ? '1.5rem' : '2rem'};
  align-items: flex-start;
}

.feature-item .feature-icon {
  font-size: ${featureStyle === 'minimal' ? '1.5rem' : '2rem'};
  flex-shrink: 0;
  color: ${activeVariant.primary};
  margin-top: 0.25rem;
}
`}

.feature-content h4 {
  font-size: ${featureStyle === 'showcase' ? '1.5rem' : featureStyle === 'minimal' ? '1.125rem' : '1.25rem'};
  font-weight: ${featureStyle === 'minimal' ? '500' : '600'};
  color: ${featureStyle === 'cards' || featureStyle === 'magazine' || featureStyle === 'showcase' ? activeVariant.primary : activeVariant.accent};
  margin-bottom: ${featureStyle === 'showcase' ? '0.75rem' : '0.5rem'};
  font-family: ${activeVariant.titleFont};
}

.feature-content p {
  font-size: ${featureStyle === 'showcase' ? '1rem' : featureStyle === 'minimal' ? '0.9rem' : '0.95rem'};
  line-height: 1.6;
  color: ${activeVariant.textColor};
  opacity: ${featureStyle === 'cards' || featureStyle === 'magazine' || featureStyle === 'showcase' ? '0.9' : '0.8'};
  margin: 0;
}

.experience-image {
  border-radius: ${activeVariant.imageBorderRadius};
  overflow: hidden;
  aspect-ratio: ${activeVariant.imageAspectRatio};
  box-shadow: ${activeVariant.boxShadow};
  transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
}

.experience-image img {
  width: 100%;
  height: 100%;
  object-fit: ${activeVariant.imageObjectFit};
  filter: ${activeVariant.imageFilter};
  transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 20px;
  }
  
  .experience-grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
  
  .experience-features {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
}`
            },
            {
              title: "📱 Usage Guide",
              language: "markdown",
              code: `# Rum River Experience Component Usage

## Current Configuration
- **Theme**: ${themeMode}
- **Layout**: ${layoutOptions[layout].description}
- **Colors**: ${activeVariant.paletteName}
- **Features**: ${featureStyles[featureStyle].description}
- **Image**: ${imageStyles[imageStyle].description}
- **Typography**: ${typographyOptions[typography].description}
- **Animation**: ${animationStyles[animationStyle].description} (${animationSpeeds[animationSpeed].description})

## Layout Variants

### Traditional Layouts
- **Original**: Exact home page replica with content left, image right
- **Stacked**: Vertical layout with content above image

### Magazine Editorial Layouts
- **Editorial Split**: 60/40 split with magazine-style proportions
- **Asymmetrical**: 45/55 creative off-grid magazine design
- **Minimal**: Clean 50/50 editorial approach

### Content-Focused Layouts
- **Feature Focus**: Single column with large feature cards

## Feature Styles

### List Styles
- **Original**: Traditional horizontal list with icons (home page style)
- **Minimal**: Clean, understated list format

### Card Styles
- **Cards**: Elevated grid cards with hover effects
- **Magazine**: Editorial-style cards with borders
- **Showcase**: Large hero-style feature cards

## Image Treatments
- **Standard**: Traditional 4:3 aspect ratio photo
- **Magazine**: Portrait 3:4 editorial style
- **Artistic**: Wide 16:10 cinematic format
- **Editorial**: Square 1:1 magazine style
- **Vintage**: 5:4 with film-style filters

## Typography Options
- **Elegant Classic**: Dancing Script + Playfair Display + Montserrat
- **Modern Clean**: Inter for all text elements
- **Editorial Magazine**: Playfair Display + Source Sans Pro
- **Minimal Sans**: Helvetica Neue throughout

## Implementation Steps

1. **Copy the CSS** into your stylesheet
2. **Import the React component** into your page
3. **Customize feature data** with your content
4. **Adjust layout** using the filter options
5. **Test responsive behavior** on mobile devices

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Graceful fallbacks for older browsers

## Performance Notes
- CSS Grid for responsive layouts
- Optimized animations with CSS transforms
- Image optimization with aspect-ratio and object-fit
- Efficient hover effects with hardware acceleration`
            }
          ]}
          theme={themeMode}
          accent={activeVariant.primary}
        />
      </div>

    </div>
  );
}