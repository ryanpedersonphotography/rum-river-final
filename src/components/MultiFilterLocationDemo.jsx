import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import CodeAccordion from './CodeAccordion';

export default function MultiFilterLocationDemo() {
  // Phase 1: Foundation - 7 Independent Filter States
  const [themeMode, setThemeMode] = useState('light');
  const [layout, setLayout] = useState('original');
  const [colorPalette, setColorPalette] = useState('original');
  const [displayStyle, setDisplayStyle] = useState('original');
  const [animationStyle, setAnimationStyle] = useState('fade');
  const [animationSpeed, setAnimationSpeed] = useState('smooth');
  const [spacing, setSpacing] = useState('original');

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Location data structure
  const locationData = {
    address: {
      title: 'Address',
      content: '42618 78th Street\nHillman, MN 56338',
      icon: 'location'
    },
    access: {
      title: 'Easy Access From',
      content: '45 min from Minneapolis\n30 min from St. Cloud\n1 hour from Brainerd',
      icon: 'truck'
    },
    airport: {
      title: 'Nearest Airport',
      content: 'Minneapolis-St. Paul International\n55 miles (1 hour drive)',
      icon: 'rocket'
    },
    accommodations: {
      title: 'Accommodations',
      content: 'Partner hotels in Princeton & Milaca\nGroup rates available',
      icon: 'building'
    }
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

  // Layout Options (Different arrangements of map and info)
  const layoutOptions = {
    'original': {
      structure: 'original-location-layout',
      mapPosition: 'right',
      infoPosition: 'left',
      description: 'Original /location layout'
    },
    'map-right': {
      structure: 'info-left-map-right',
      mapPosition: 'right',
      infoPosition: 'left',
      description: 'Info left, map right'
    },
    'map-left': {
      structure: 'map-left-info-right',
      mapPosition: 'left',
      infoPosition: 'right',
      description: 'Map left, info right'
    },
    'map-top': {
      structure: 'map-top-info-bottom',
      mapPosition: 'top',
      infoPosition: 'bottom',
      description: 'Map top, info below'
    },
    'stacked': {
      structure: 'info-top-map-bottom',
      mapPosition: 'bottom',
      infoPosition: 'top',
      description: 'Info top, map below'
    }
  };

  // Color Palette Options (Travel/Location themed)
  const colorPalettes = {
    original: {
      primary: 'var(--warm-walnut, #8B4513)',
      secondary: 'var(--warm-cream, #FEF7ED)',
      accent: 'var(--sage-green, #8B9467)',
      neutral: 'var(--charcoal, #2C2C2C)',
      name: 'Original /location colors'
    },
    travel: {
      primary: '#2563EB',
      secondary: '#F8FAFC',
      accent: '#059669',
      neutral: '#374151',
      name: 'Travel Blue'
    },
    rustic: {
      primary: '#8B4513',
      secondary: '#FEF7ED',
      accent: '#D97706',
      neutral: '#78350F',
      name: 'Rustic Earth'
    },
    modern: {
      primary: '#6366F1',
      secondary: '#F1F5F9',
      accent: '#EC4899',
      neutral: '#475569',
      name: 'Modern Tech'
    },
    nature: {
      primary: '#059669',
      secondary: '#ECFDF5',
      accent: '#10B981',
      neutral: '#065F46',
      name: 'Nature Green'
    }
  };

  // Display Style Options
  const displayStyles = {
    original: {
      borderRadius: '20px',
      cardEffect: 'original',
      overlayStyle: 'none',
      typography: 'original',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
      iconSize: '64px',
      fontSize: 'original'
    },
    classic: {
      borderRadius: '20px',
      cardEffect: 'shadow',
      overlayStyle: 'gradient',
      typography: 'traditional'
    },
    modern: {
      borderRadius: '8px',
      cardEffect: 'geometric',
      overlayStyle: 'sharp',
      border: '1px solid #E5E7EB',
      typography: 'clean'
    },
    minimal: {
      borderRadius: '4px',
      cardEffect: 'none',
      overlayStyle: 'clean',
      boxShadow: 'none',
      typography: 'minimal'
    },
    elegant: {
      borderRadius: '16px',
      cardEffect: 'luxury',
      overlayStyle: 'soft',
      border: '2px solid #F3F4F6',
      typography: 'elegant'
    }
  };

  // Animation Style Options
  const animationStyles = {
    fade: {
      transition: 'opacity',
      transform: 'none',
      description: 'Fade in/out'
    },
    slide: {
      transition: 'transform',
      transform: 'translateY(20px)',
      description: 'Slide up'
    },
    zoom: {
      transition: 'transform',
      transform: 'scale(1.02)',
      description: 'Zoom effect'
    },
    bounce: {
      transition: 'transform',
      transform: 'translateY(-5px)',
      description: 'Bounce effect'
    }
  };

  // Animation Speed Options
  const animationSpeeds = {
    instant: { duration: '0s', easing: 'linear', description: 'No animation' },
    quick: { duration: '0.15s', easing: 'ease-out', description: 'Quick' },
    smooth: { duration: '0.3s', easing: 'cubic-bezier(0.4, 0, 0.2, 1)', description: 'Smooth' },
    elegant: { duration: '0.6s', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Elegant' }
  };

  // Spacing Options
  const spacingOptions = {
    original: { gap: '3rem', padding: '2rem', itemGap: '1.5rem', marginTop: '3rem', description: 'Original /location spacing' },
    compact: { gap: '1rem', padding: '1.5rem', itemGap: '1rem', marginTop: '2rem', description: 'Compact' },
    comfortable: { gap: '2rem', padding: '2rem', itemGap: '1.25rem', marginTop: '2.5rem', description: 'Comfortable' },
    relaxed: { gap: '3rem', padding: '2.5rem', itemGap: '1.5rem', marginTop: '3rem', description: 'Relaxed' },
    spacious: { gap: '4rem', padding: '3rem', itemGap: '2rem', marginTop: '4rem', description: 'Spacious' }
  };

  // Combine all filters to create final variant
  const getCurrentVariant = () => {
    const theme = themeModes[themeMode];
    const layoutConfig = layoutOptions[layout];
    const palette = colorPalettes[colorPalette];
    const style = displayStyles[displayStyle];
    const animation = animationStyles[animationStyle];
    const speed = animationSpeeds[animationSpeed];
    const space = spacingOptions[spacing];

    const isDark = themeMode === 'dark';
    
    return {
      // Theme properties
      sectionBg: isDark 
        ? `linear-gradient(135deg, #0F172A 0%, #1E293B 100%)`
        : palette.secondary,
      textColor: isDark ? '#FFFFFF' : palette.neutral,
      
      // Color properties
      primary: palette.primary,
      secondary: palette.secondary,
      accent: palette.accent,
      neutral: palette.neutral,
      paletteName: palette.name,
      
      // Layout properties
      layoutStructure: layoutConfig.structure,
      mapPosition: layoutConfig.mapPosition,
      infoPosition: layoutConfig.infoPosition,
      
      // Style properties
      borderRadius: style.borderRadius,
      cardEffect: style.cardEffect,
      overlayStyle: style.overlayStyle,
      border: style.border,
      typography: style.typography,
      
      // Animation properties
      animationDuration: speed.duration,
      animationEasing: speed.easing,
      animationTransition: animation.transition,
      animationTransform: animation.transform,
      
      // Spacing properties
      gap: space.gap,
      padding: space.padding,
      itemGap: space.itemGap,
      marginTop: space.marginTop,
      
      // Shadow and styling
      boxShadow: isDark 
        ? `0 25px 50px rgba(0, 0, 0, ${theme.shadowStrength + 0.3})`
        : `0 25px 50px rgba(0, 0, 0, ${theme.shadowStrength})`,
      
      // Unique identifier
      id: `${themeMode}-${layout}-${colorPalette}-${displayStyle}-${animationStyle}-${animationSpeed}-${spacing}`,
      label: `${themeMode} ${layoutConfig.description} ${palette.name} ${displayStyle} ${animationStyle} ${animationSpeed} ${spacing}`
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

  // Render the location content based on layout
  const renderLocationContent = () => {
    // Original layout - exact replica from /location page
    if (layout === 'original') {
      return (
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: activeVariant.gap,
          marginTop: activeVariant.marginTop,
          alignItems: 'start'
        }}>
          {/* Experience Content - Left Side (matches original structure) */}
          <div style={{
            order: isMobile ? 2 : 1
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: activeVariant.itemGap
            }}>
              {Object.entries(locationData).map(([key, item]) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (animationStyle === 'zoom') {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    } else if (animationStyle === 'slide') {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    } else if (animationStyle === 'bounce') {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {/* Feature Icon */}
                  <div 
                    className={displayStyle === 'original' ? 'feature-icon' : ''}
                    style={{
                      width: displayStyle === 'original' ? '64px' : '48px',
                      height: displayStyle === 'original' ? '64px' : '48px',
                      borderRadius: '50%',
                      background: displayStyle === 'original'
                        ? 'var(--warm-walnut, #8B4513)'
                        : `linear-gradient(135deg, ${activeVariant.primary}, ${activeVariant.accent})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: displayStyle === 'original' 
                        ? 'none' 
                        : `0 8px 25px rgba(${activeVariant.primary.replace('#', '')}, 0.3)`,
                      border: displayStyle === 'original' ? 'none' : 'none'
                    }}
                  >
                    <Icon 
                      name={item.icon} 
                      size="lg" 
                      color={displayStyle === 'original' ? 'primary' : 'white'}
                      solid={false}
                      style={displayStyle === 'original' ? {
                        color: 'var(--warm-walnut, #8B4513)'
                      } : {
                        width: '24px',
                        height: '24px',
                        strokeWidth: '1.5',
                        stroke: 'currentColor',
                        fill: 'none'
                      }}
                    />
                  </div>
                  
                  {/* Feature Content */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: displayStyle === 'original' ? '1.25rem' : '1.1rem',
                      fontWeight: displayStyle === 'original' ? 600 : 600,
                      color: activeVariant.primary,
                      marginBottom: '0.5rem',
                      fontFamily: displayStyle === 'original' 
                        ? 'var(--font-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)' 
                        : activeVariant.typography === 'elegant' 
                        ? "'Playfair Display', serif" 
                        : "'Montserrat', sans-serif"
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: displayStyle === 'original' ? '1rem' : '0.95rem',
                      lineHeight: displayStyle === 'original' ? '1.6' : '1.5',
                      color: activeVariant.textColor,
                      opacity: displayStyle === 'original' ? 0.85 : 0.8,
                      whiteSpace: 'pre-line',
                      fontWeight: displayStyle === 'original' ? 400 : 400,
                      fontFamily: displayStyle === 'original' 
                        ? 'var(--font-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)' 
                        : 'inherit'
                    }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Image - Right Side (Map) */}
          <div style={{
            order: isMobile ? 1 : 2
          }}>
            <div style={{
              borderRadius: displayStyle === 'original' ? '20px' : activeVariant.borderRadius,
              overflow: 'hidden',
              height: '500px',
              boxShadow: displayStyle === 'original' ? '0 25px 50px rgba(0, 0, 0, 0.15)' : activeVariant.boxShadow,
              transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rum River Barn Location - 42618 78th Street, Hillman, MN 56338"
              />
            </div>
          </div>
        </div>
      );
    }
    const mapElement = (
      <div style={{
        borderRadius: activeVariant.borderRadius,
        overflow: 'hidden',
        height: '500px',
        boxShadow: activeVariant.boxShadow,
        ...(activeVariant.border && { border: activeVariant.border }),
        transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rum River Barn Location - 42618 78th Street, Hillman, MN 56338"
        />
      </div>
    );

    const infoElement = (
      <div style={{
        padding: activeVariant.padding,
        background: themeMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'rgba(255, 255, 255, 0.95)',
        borderRadius: activeVariant.borderRadius,
        backdropFilter: 'blur(10px)',
        ...(activeVariant.border && { border: activeVariant.border }),
        transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: activeVariant.gap
        }}>
          {Object.entries(locationData).map(([key, item]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '12px',
                background: themeMode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.03)' 
                  : 'rgba(0, 0, 0, 0.02)',
                transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (animationStyle === 'zoom') {
                  e.currentTarget.style.transform = 'scale(1.02)';
                } else if (animationStyle === 'slide') {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                } else if (animationStyle === 'bounce') {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${activeVariant.primary}, ${activeVariant.accent})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Icon name={item.icon} size="lg" color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: activeVariant.primary,
                  marginBottom: '0.5rem',
                  fontFamily: activeVariant.typography === 'elegant' 
                    ? "'Playfair Display', serif" 
                    : "'Montserrat', sans-serif"
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  color: activeVariant.textColor,
                  opacity: 0.8,
                  whiteSpace: 'pre-line'
                }}>
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    // Layout-specific rendering
    if (layout === 'map-left') {
      return (
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: activeVariant.gap,
          alignItems: 'start'
        }}>
          {mapElement}
          {infoElement}
        </div>
      );
    }

    if (layout === 'map-top') {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: activeVariant.gap
        }}>
          {mapElement}
          {infoElement}
        </div>
      );
    }

    if (layout === 'stacked') {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: activeVariant.gap
        }}>
          {infoElement}
          {mapElement}
        </div>
      );
    }

    // Default: map-right layout
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: activeVariant.gap,
        alignItems: 'start'
      }}>
        {infoElement}
        {mapElement}
      </div>
    );
  };

  return (
    <>
      <style>{`
        .location-demo-item {
          transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
        }
        
        .location-demo-item:hover {
          transform: ${activeVariant.animationTransform};
        }
      `}</style>

      {/* Multi-Filter Location Demo Section */}
      <section style={{
        background: activeVariant.sectionBg,
        transition: 'background 0.6s ease',
        padding: `${activeVariant.padding} 0`
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 50px'
        }}>
          {/* Filter Controls */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginBottom: '3rem',
            padding: isMobile ? '15px' : '25px',
            background: themeMode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`
          }}>
            <h3 style={{
              margin: '0 0 20px 0',
              color: activeVariant.textColor,
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              textAlign: 'center'
            }}>
              🗺️ Location Multi-Filter Demo
            </h3>

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

            {/* Display Style */}
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
                ✨ Style:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.keys(displayStyles).map(style => (
                  <button
                    key={style}
                    onClick={() => setDisplayStyle(style)}
                    style={{
                      ...getFilterButtonStyle(displayStyle === style),
                      textTransform: 'capitalize'
                    }}
                  >
                    {style}
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
                    {key}
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

            {/* Spacing */}
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
                📏 Spacing:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(spacingOptions).map(([key, space]) => (
                  <button
                    key={key}
                    onClick={() => setSpacing(key)}
                    style={getFilterButtonStyle(spacing === key)}
                    title={space.description}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.75rem',
              color: activeVariant.primary,
              marginBottom: '1rem'
            }}>
              Find Us
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 500,
              marginBottom: '1.5rem',
              color: activeVariant.textColor,
              margin: '0 0 1.5rem 0'
            }}>
              Getting Here
            </h2>
            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.7',
              fontWeight: 300,
              opacity: 0.9,
              maxWidth: '600px',
              margin: '1.5rem auto 0',
              color: activeVariant.textColor
            }}>
              Conveniently located in the heart of Minnesota with easy access from major cities
            </p>
          </div>

          {/* Dynamic Location Content Based on Layout */}
          {renderLocationContent()}

          {/* Live Code Generation */}
          <div style={{
            marginTop: '4rem',
            padding: '2rem',
            background: themeMode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(0, 0, 0, 0.05)',
            borderRadius: activeVariant.borderRadius,
            border: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`
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
                  code: `/* Location Component Design Tokens - ${activeVariant.label} */
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
  
  /* Layout Configuration */
  --layout-structure: "${activeVariant.layoutStructure}";
  --map-position: ${activeVariant.mapPosition};
  --info-position: ${activeVariant.infoPosition};
  
  /* Visual Style */
  --border-radius: ${activeVariant.borderRadius};
  --box-shadow: ${activeVariant.boxShadow};
  --padding: ${activeVariant.padding};
  --gap: ${activeVariant.gap};
  
  /* Animation Properties */
  --animation-duration: ${activeVariant.animationDuration};
  --animation-easing: ${activeVariant.animationEasing};
  --animation-transform: ${activeVariant.animationTransform};
}`
                },
                {
                  title: "⚛️ React Component",
                  language: "jsx",
                  code: `// Location Component Implementation
// Generated variant: ${activeVariant.id}

import React from 'react';
import Icon from './Icon';

export default function LocationSection() {
  const locationData = {
    address: {
      title: 'Address',
      content: '42618 78th Street\\nHillman, MN 56338',
      icon: 'location'
    },
    access: {
      title: 'Easy Access From',
      content: '45 min from Minneapolis\\n30 min from St. Cloud\\n1 hour from Brainerd',
      icon: 'truck'
    },
    airport: {
      title: 'Nearest Airport',
      content: 'Minneapolis-St. Paul International\\n55 miles (1 hour drive)',
      icon: 'rocket'
    },
    accommodations: {
      title: 'Accommodations',
      content: 'Partner hotels in Princeton & Milaca\\nGroup rates available',
      icon: 'building'
    }
  };

  const mapElement = (
    <div className="location-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Rum River Barn Location"
      />
    </div>
  );

  const infoElement = (
    <div className="location-info">
      <div className="location-grid">
        {Object.entries(locationData).map(([key, item]) => (
          <div key={key} className="location-item">
            <div className="location-icon">
              <Icon name={item.icon} size="lg" color="white" />
            </div>
            <div className="location-content">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="location-section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="script-accent">Find Us</div>
          <h2 className="section-title">Getting Here</h2>
          <p className="lead">
            Conveniently located in the heart of Minnesota with easy access from major cities
          </p>
        </div>
        
        <div className="location-content layout-${layout}">
          ${layout === 'map-left' ? '{mapElement}{infoElement}' : 
            layout === 'map-top' ? '{mapElement}{infoElement}' :
            layout === 'stacked' ? '{infoElement}{mapElement}' :
            '{infoElement}{mapElement}'}
        </div>
      </div>
    </section>
  );
}`
                },
                {
                  title: "🎨 CSS Styles",
                  language: "css",
                  code: `/* Location Section Styles - ${activeVariant.label} */
.location-section {
  background: ${activeVariant.sectionBg.includes('gradient') ? activeVariant.sectionBg : activeVariant.sectionBg};
  padding: ${activeVariant.padding} 0;
  transition: background 0.6s ease;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.script-accent {
  font-family: 'Dancing Script', cursive;
  font-size: 1.75rem;
  color: ${activeVariant.primary};
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 500;
  color: ${activeVariant.textColor};
  margin: 0 0 1.5rem 0;
}

.lead {
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 300;
  opacity: 0.9;
  max-width: 600px;
  margin: 1.5rem auto 0;
  color: ${activeVariant.textColor};
}

.location-content {
  display: grid;
  gap: ${activeVariant.gap};
  align-items: start;
}

.location-content.layout-map-right,
.location-content.layout-map-left {
  grid-template-columns: 1fr 1fr;
}

.location-content.layout-map-left .location-map {
  order: 1;
}

.location-content.layout-map-left .location-info {
  order: 2;
}

.location-content.layout-map-top,
.location-content.layout-stacked {
  grid-template-columns: 1fr;
}

.location-map {
  border-radius: ${activeVariant.borderRadius};
  overflow: hidden;
  height: 500px;
  box-shadow: ${activeVariant.boxShadow};
  ${activeVariant.border ? `border: ${activeVariant.border};` : ''}
  transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
}

.location-info {
  padding: ${activeVariant.padding};
  background: ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.95)'};
  border-radius: ${activeVariant.borderRadius};
  backdrop-filter: blur(10px);
  ${activeVariant.border ? `border: ${activeVariant.border};` : ''}
  transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
}

.location-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${activeVariant.gap};
}

.location-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background: ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'};
  transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
  cursor: pointer;
}

.location-item:hover {
  transform: ${activeVariant.animationTransform};
}

.location-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${activeVariant.primary}, ${activeVariant.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.location-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: ${activeVariant.primary};
  margin-bottom: 0.5rem;
  font-family: ${activeVariant.typography === 'elegant' ? "'Playfair Display', serif" : "'Montserrat', sans-serif"};
}

.location-content p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${activeVariant.textColor};
  opacity: 0.8;
  white-space: pre-line;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 20px;
  }
  
  .location-content {
    grid-template-columns: 1fr !important;
  }
  
  .location-grid {
    grid-template-columns: 1fr;
  }
  
  .location-map {
    height: 300px;
  }
}`
                },
                {
                  title: "📱 Usage Guide",
                  language: "markdown",
                  code: `# Location Component Usage

## Current Configuration
- **Theme**: ${themeMode}
- **Layout**: ${layout} (${layoutOptions[layout].description})
- **Colors**: ${colorPalettes[colorPalette].name}
- **Style**: ${displayStyle}
- **Animation**: ${animationStyle} (${animationSpeeds[animationSpeed].description})
- **Spacing**: ${spacing}

## Implementation Steps

1. **Copy the CSS** into your stylesheet
2. **Import the React component** into your page
3. **Include the Icon component** for proper icons
4. **Adjust the Google Maps embed** URL if needed

## Customization Options

### Layout Variations
- \`map-right\`: Info on left, map on right (default)
- \`map-left\`: Map on left, info on right
- \`map-top\`: Map above info
- \`stacked\`: Info above map

### Color Themes
- **Travel Blue**: Professional travel/direction theme
- **Rustic Earth**: Warm, natural wedding venue feel
- **Modern Tech**: Clean, contemporary styling
- **Nature Green**: Fresh, outdoor venue theme

### Animation Effects
- **Fade**: Simple opacity transitions
- **Slide**: Upward slide on hover
- **Zoom**: Scale effect on hover
- **Bounce**: Subtle bounce animation

## Performance Notes
- Uses CSS Grid for responsive layouts
- Backdrop-filter for modern glass effects
- Optimized for mobile devices
- Lazy loading Google Maps iframe

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Graceful fallbacks for older browsers`
                }
              ]}
              theme={themeMode}
              accent={activeVariant.primary}
            />
          </div>

        </div>
      </section>
    </>
  );
}