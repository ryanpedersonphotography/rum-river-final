import React, { useState, useEffect } from 'react';
import CodeAccordion from '../components/CodeAccordion';

/**
 * ScheduleTourButtonDemoStandalone Component
 * 
 * A comprehensive multi-filter demo of the floating "Schedule Your Tour" button
 * from the home page with 7+ independent filter categories for complete customization.
 * Features scroll interactions, multiple variants, and live code generation.
 */

export default function ScheduleTourButtonDemoStandalone() {
  // Phase 1: Foundation - 7 Independent Filter States
  const [themeMode, setThemeMode] = useState('light');
  const [position, setPosition] = useState('bottom-right');
  const [colorPalette, setColorPalette] = useState('original');
  const [buttonStyle, setButtonStyle] = useState('original');
  const [animationStyle, setAnimationStyle] = useState('slide-up');
  const [animationSpeed, setAnimationSpeed] = useState('smooth');
  const [triggerPoint, setTriggerPoint] = useState('after-hero');

  // Button visibility and interaction state
  const [isVisible, setIsVisible] = useState(false);
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

  // Scroll-triggered visibility logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let shouldShow = false;
      
      switch (triggerPoint) {
        case 'immediate':
          shouldShow = true;
          break;
        case 'after-hero':
          shouldShow = scrollPosition > windowHeight * 0.8;
          break;
        case 'halfway':
          shouldShow = scrollPosition > windowHeight * 1.5;
          break;
        case 'near-bottom':
          const documentHeight = document.documentElement.scrollHeight;
          shouldShow = scrollPosition > documentHeight - windowHeight * 2;
          break;
        default:
          shouldShow = scrollPosition > windowHeight * 0.8;
      }
      
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPoint]);

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

  // Position Options
  const positionOptions = {
    'bottom-right': {
      bottom: '2rem',
      right: '2rem',
      left: 'auto',
      top: 'auto',
      description: 'Bottom Right (Original)'
    },
    'bottom-left': {
      bottom: '2rem',
      left: '2rem',
      right: 'auto',
      top: 'auto',
      description: 'Bottom Left'
    },
    'bottom-center': {
      bottom: '2rem',
      left: '50%',
      right: 'auto',
      top: 'auto',
      transform: 'translateX(-50%)',
      description: 'Bottom Center'
    },
    'top-right': {
      top: '2rem',
      right: '2rem',
      left: 'auto',
      bottom: 'auto',
      description: 'Top Right'
    },
    'center-right': {
      top: '50%',
      right: '2rem',
      left: 'auto',
      bottom: 'auto',
      transform: 'translateY(-50%)',
      description: 'Center Right'
    }
  };

  // Color Palette Options
  const colorPalettes = {
    original: {
      primary: 'var(--dusty-rose, #9D6B7B)',
      hover: 'var(--warm-walnut, #6B4E3D)',
      text: '#FFFFFF',
      name: 'Original (Dusty Rose)'
    },
    elegant: {
      primary: '#8B5A3C',
      hover: '#6B4E3D',
      text: '#FFFFFF',
      name: 'Elegant Brown'
    },
    modern: {
      primary: '#2563EB',
      hover: '#1D4ED8',
      text: '#FFFFFF',
      name: 'Modern Blue'
    },
    nature: {
      primary: '#059669',
      hover: '#047857',
      text: '#FFFFFF',
      name: 'Nature Green'
    },
    luxury: {
      primary: '#7C3AED',
      hover: '#6D28D9',
      text: '#FFFFFF',
      name: 'Luxury Purple'
    }
  };

  // Button Style Options
  const buttonStyles = {
    original: {
      borderRadius: '50px',
      padding: '1rem 2rem',
      fontSize: '0.9rem',
      fontWeight: '500',
      border: 'none',
      description: 'Original Pill Shape'
    },
    rounded: {
      borderRadius: '12px',
      padding: '1rem 1.5rem',
      fontSize: '0.9rem',
      fontWeight: '500',
      border: 'none',
      description: 'Rounded Rectangle'
    },
    circle: {
      borderRadius: '50%',
      padding: '1rem',
      fontSize: '0.8rem',
      fontWeight: '600',
      border: 'none',
      width: '60px',
      height: '60px',
      description: 'Circle Icon Only'
    },
    outlined: {
      borderRadius: '50px',
      padding: '1rem 2rem',
      fontSize: '0.9rem',
      fontWeight: '500',
      border: '2px solid',
      background: 'transparent',
      description: 'Outlined Pill'
    },
    minimal: {
      borderRadius: '8px',
      padding: '0.75rem 1.5rem',
      fontSize: '0.875rem',
      fontWeight: '400',
      border: 'none',
      description: 'Minimal Rectangle'
    }
  };

  // Animation Style Options
  const animationStyles = {
    'slide-up': {
      hidden: 'translateY(20px) scale(0.8)',
      visible: 'translateY(0) scale(1)',
      description: 'Slide Up & Scale'
    },
    'fade': {
      hidden: 'translateY(0) scale(1)',
      visible: 'translateY(0) scale(1)',
      description: 'Fade Only'
    },
    'bounce': {
      hidden: 'translateY(30px) scale(0.7)',
      visible: 'translateY(0) scale(1)',
      description: 'Bounce In'
    },
    'rotate-in': {
      hidden: 'rotate(-180deg) scale(0.5)',
      visible: 'rotate(0deg) scale(1)',
      description: 'Rotate & Scale'
    },
    'slide-right': {
      hidden: 'translateX(100px) scale(0.8)',
      visible: 'translateX(0) scale(1)',
      description: 'Slide From Right'
    }
  };

  // Animation Speed Options
  const animationSpeeds = {
    instant: { duration: '0s', easing: 'linear', description: 'No Animation' },
    quick: { duration: '0.15s', easing: 'ease-out', description: 'Quick' },
    smooth: { duration: '0.4s', easing: 'cubic-bezier(0.4, 0, 0.2, 1)', description: 'Smooth' },
    elegant: { duration: '0.8s', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Elegant' }
  };

  // Trigger Point Options
  const triggerPoints = {
    immediate: { description: 'Always Visible' },
    'after-hero': { description: 'After Hero Section' },
    halfway: { description: 'Halfway Down Page' },
    'near-bottom': { description: 'Near Bottom' }
  };

  // Combine all filters to create final variant
  const getCurrentVariant = () => {
    const theme = themeModes[themeMode];
    const pos = positionOptions[position];
    const palette = colorPalettes[colorPalette];
    const style = buttonStyles[buttonStyle];
    const animation = animationStyles[animationStyle];
    const speed = animationSpeeds[animationSpeed];

    const isDark = themeMode === 'dark';
    
    return {
      // Theme properties
      sectionBg: isDark 
        ? `linear-gradient(135deg, #0F172A 0%, #1E293B 100%)`
        : '#FEFDFB',
      textColor: isDark ? '#FFFFFF' : '#2C2416',
      
      // Position properties
      position: pos,
      
      // Color properties
      primary: palette.primary,
      hover: palette.hover,
      buttonText: style.border && buttonStyle === 'outlined' 
        ? palette.primary 
        : palette.text,
      paletteName: palette.name,
      
      // Style properties
      borderRadius: style.borderRadius,
      padding: style.padding,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      border: style.border,
      width: style.width,
      height: style.height,
      background: style.background,
      
      // Animation properties
      animationDuration: speed.duration,
      animationEasing: speed.easing,
      hiddenTransform: animation.hidden,
      visibleTransform: animation.visible,
      
      // Unique identifier
      id: `${themeMode}-${position}-${colorPalette}-${buttonStyle}-${animationStyle}-${animationSpeed}-${triggerPoint}`,
      label: `${themeMode} ${pos.description} ${palette.name} ${style.description} ${animation.description}`
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

  // Handle button click
  const handleButtonClick = () => {
    // Scroll to bottom of page to simulate going to form
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      lineHeight: 1.6,
      color: activeVariant.textColor,
      margin: 0,
      padding: 0,
      background: activeVariant.sectionBg,
      minHeight: '100vh',
      transition: 'all 0.6s ease'
    }}>
      
      {/* CSS Animations and Styles */}
      <style>{`
        /* Floating CTA Button Styles */
        .schedule-tour-btn {
          position: fixed;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          text-decoration: none;
          font-family: inherit;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
          opacity: 0;
          transform: ${activeVariant.hiddenTransform};
          pointer-events: none;
        }
        
        .schedule-tour-btn.visible {
          opacity: 1;
          transform: ${activeVariant.visibleTransform};
          pointer-events: auto;
        }
        
        .schedule-tour-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .schedule-tour-btn.circle-style {
          justify-content: center;
        }
        
        .schedule-tour-btn.circle-style .btn-text {
          display: none;
        }
        
        .btn-icon {
          width: 1.2rem;
          height: 1.2rem;
          flex-shrink: 0;
        }
        
        /* Demo Content Sections */
        .demo-section {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .demo-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .demo-section p {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .schedule-tour-btn {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.8rem !important;
            bottom: 1rem !important;
            right: 1rem !important;
          }
          
          .demo-section {
            padding: 3rem 1rem;
          }
          
          .demo-section h2 {
            font-size: 2rem;
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
            📅 Schedule Tour Button Multi-Filter Demo
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

            {/* Position */}
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
                📍 Position:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(positionOptions).map(([key, pos]) => (
                  <button
                    key={key}
                    onClick={() => setPosition(key)}
                    style={getFilterButtonStyle(position === key)}
                    title={pos.description}
                  >
                    {pos.description}
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

            {/* Button Style */}
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
                {Object.entries(buttonStyles).map(([key, style]) => (
                  <button
                    key={key}
                    onClick={() => setButtonStyle(key)}
                    style={{
                      ...getFilterButtonStyle(buttonStyle === key),
                      textTransform: 'capitalize'
                    }}
                  >
                    {style.description}
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

            {/* Trigger Point */}
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
                🎯 Trigger:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(triggerPoints).map(([key, trigger]) => (
                  <button
                    key={key}
                    onClick={() => setTriggerPoint(key)}
                    style={getFilterButtonStyle(triggerPoint === key)}
                    title={trigger.description}
                  >
                    {trigger.description}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long Demo Content to Test Scroll Interactions */}
      <section className="demo-section">
        <h2 style={{ color: activeVariant.textColor }}>🏰 Welcome to Rum River Barn</h2>
        <p style={{ color: activeVariant.textColor }}>
          Nestled in the heart of Minnesota's countryside, Rum River Barn offers an enchanting setting for your most precious celebrations. Our historic venue combines rustic charm with modern amenities, creating the perfect backdrop for weddings, events, and unforgettable memories.
        </p>
        <p style={{ color: activeVariant.textColor }}>
          The Schedule Your Tour button should appear based on your selected trigger point. Scroll down to experience the different visibility behaviors and animation styles you've configured above.
        </p>
      </section>

      <section className="demo-section">
        <h2 style={{ color: activeVariant.textColor }}>✨ The Historic Barn Experience</h2>
        <p style={{ color: activeVariant.textColor }}>
          Step into our beautifully restored 1920s barn, where soaring ceilings and original timber beams create an atmosphere of timeless elegance. Every detail has been carefully preserved and enhanced to provide you with a truly magical venue that honors the past while embracing the future.
        </p>
        <p style={{ color: activeVariant.textColor }}>
          Our venue features climate-controlled comfort for year-round celebrations, with capacity for up to 300 guests. Whether you're planning an intimate gathering or a grand celebration, our flexible space adapts to your vision while maintaining its authentic rustic charm.
        </p>
      </section>

      <section className="demo-section">
        <h2 style={{ color: activeVariant.textColor }}>🌿 Gardens & Outdoor Spaces</h2>
        <p style={{ color: activeVariant.textColor }}>
          Beyond our stunning barn, explore our carefully manicured gardens and natural outdoor spaces. The property features multiple ceremony locations, from our charming garden pavilion to scenic meadow views that provide countless photo opportunities throughout your special day.
        </p>
        <p style={{ color: activeVariant.textColor }}>
          Our grounds include a variety of unique features: a romantic swing under ancient oak trees, vineyard-style landscaping, wildflower fields that bloom throughout the seasons, and peaceful walking paths that wind through the property's natural beauty.
        </p>
      </section>

      <section className="demo-section">
        <h2 style={{ color: activeVariant.textColor }}>💒 Planning Your Perfect Day</h2>
        <p style={{ color: activeVariant.textColor }}>
          From the moment you envision your celebration to the last dance of the evening, our experienced team is here to help bring your dreams to life. We understand that every couple has a unique story, and we're committed to creating a personalized experience that reflects your individual style and preferences.
        </p>
        <p style={{ color: activeVariant.textColor }}>
          Our comprehensive planning services include venue coordination, vendor recommendations, timeline development, and day-of coordination. We work closely with trusted local partners to ensure every aspect of your celebration exceeds your expectations.
        </p>
      </section>

      <section className="demo-section">
        <h2 style={{ color: activeVariant.textColor }}>🏡 Accommodations & Amenities</h2>
        <p style={{ color: activeVariant.textColor }}>
          Our venue includes dedicated spaces for your wedding party to prepare for the big day. The elegant bridal suite offers a private retreat with natural light, comfortable seating, and all the amenities needed for getting ready. The groom's quarters provide a relaxed atmosphere for the groomsmen to prepare and celebrate.
        </p>
        <p style={{ color: activeVariant.textColor }}>
          For guests traveling from afar, we maintain partnerships with nearby accommodations and can assist with group booking arrangements. Our convenient location provides easy access from major Minnesota cities while offering the serene countryside setting you desire.
        </p>
      </section>

      <section className="demo-section">
        <h2 style={{ color: activeVariant.textColor }}>📸 Capturing Your Memories</h2>
        <p style={{ color: activeVariant.textColor }}>
          Every corner of Rum River Barn offers a picture-perfect moment. From the dramatic interior architecture to the sweeping outdoor vistas, our venue provides countless opportunities for stunning photography. We work with talented photographers who know how to showcase the unique beauty of our space.
        </p>
        <p style={{ color: activeVariant.textColor }}>
          Golden hour photography sessions in our fields create magical portraits, while the barn's interior lighting provides elegant reception shots. Our property's diverse landscapes ensure you'll have a comprehensive collection of beautiful images to treasure for years to come.
        </p>
      </section>

      <section className="demo-section" id="lets-connect-form">
        <h2 style={{ color: activeVariant.textColor }}>📅 Ready to Visit?</h2>
        <p style={{ color: activeVariant.textColor }}>
          Experience the magic of Rum River Barn in person. Schedule your private tour today and let us show you how our venue can bring your celebration dreams to life. Our team is excited to meet you and discuss the endless possibilities for your special day.
        </p>
        <p style={{ color: activeVariant.textColor }}>
          <strong>Congratulations!</strong> If you clicked the floating Schedule Your Tour button, it would have smoothly scrolled you to this section. This demonstrates the complete user experience from discovery to action.
        </p>
      </section>

      {/* Floating Schedule Tour Button */}
      <a
        href="#lets-connect-form"
        className={`schedule-tour-btn ${isVisible ? 'visible' : ''} ${buttonStyle === 'circle' ? 'circle-style' : ''}`}
        onClick={handleButtonClick}
        style={{
          ...activeVariant.position,
          background: buttonStyle === 'outlined' 
            ? activeVariant.background || 'transparent'
            : activeVariant.primary,
          color: activeVariant.buttonText,
          borderRadius: activeVariant.borderRadius,
          padding: activeVariant.padding,
          fontSize: activeVariant.fontSize,
          fontWeight: activeVariant.fontWeight,
          ...(activeVariant.border && {
            border: `${activeVariant.border} ${activeVariant.primary}`
          }),
          ...(activeVariant.width && { width: activeVariant.width }),
          ...(activeVariant.height && { height: activeVariant.height }),
          ...(activeVariant.position.transform && {
            transform: isVisible 
              ? `${activeVariant.position.transform} ${activeVariant.visibleTransform}` 
              : `${activeVariant.position.transform} ${activeVariant.hiddenTransform}`
          })
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          aria-hidden="true" 
          className="btn-icon"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" 
          />
        </svg>
        <span className="btn-text">Schedule Your Tour</span>
      </a>

      {/* Live Code Generation */}
      <div style={{
        margin: '4rem 2rem',
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
              code: `/* Schedule Tour Button Design Tokens - ${activeVariant.label} */
:root {
  /* Theme Variables */
  --theme-mode: ${themeMode};
  --section-bg: ${activeVariant.sectionBg.includes('gradient') ? activeVariant.sectionBg : `"${activeVariant.sectionBg}"`};
  --text-color: ${activeVariant.textColor};
  
  /* Color Palette - ${activeVariant.paletteName} */
  --button-primary: ${activeVariant.primary};
  --button-hover: ${activeVariant.hover};
  --button-text: ${activeVariant.buttonText};
  
  /* Position Configuration */
  --button-position: fixed;
  --button-bottom: ${activeVariant.position.bottom || 'auto'};
  --button-right: ${activeVariant.position.right || 'auto'};
  --button-left: ${activeVariant.position.left || 'auto'};
  --button-top: ${activeVariant.position.top || 'auto'};
  ${activeVariant.position.transform ? `--button-transform: ${activeVariant.position.transform};` : ''}
  
  /* Visual Style */
  --button-border-radius: ${activeVariant.borderRadius};
  --button-padding: ${activeVariant.padding};
  --button-font-size: ${activeVariant.fontSize};
  --button-font-weight: ${activeVariant.fontWeight};
  ${activeVariant.border ? `--button-border: ${activeVariant.border} var(--button-primary);` : '--button-border: none;'}
  ${activeVariant.width ? `--button-width: ${activeVariant.width};` : ''}
  ${activeVariant.height ? `--button-height: ${activeVariant.height};` : ''}
  
  /* Animation Properties */
  --animation-duration: ${activeVariant.animationDuration};
  --animation-easing: ${activeVariant.animationEasing};
  --hidden-transform: ${activeVariant.hiddenTransform};
  --visible-transform: ${activeVariant.visibleTransform};
}`
            },
            {
              title: "⚛️ React Component",
              language: "jsx",
              code: `// Schedule Tour Button Implementation
// Generated variant: ${activeVariant.id}

import React, { useState, useEffect } from 'react';

export default function ScheduleTourButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Trigger logic: ${triggerPoints[triggerPoint].description}
      ${triggerPoint === 'immediate' ? 
        'const shouldShow = true;' :
        triggerPoint === 'after-hero' ?
        'const shouldShow = scrollPosition > windowHeight * 0.8;' :
        triggerPoint === 'halfway' ?
        'const shouldShow = scrollPosition > windowHeight * 1.5;' :
        `const documentHeight = document.documentElement.scrollHeight;
      const shouldShow = scrollPosition > documentHeight - windowHeight * 2;`
      }
      
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Scroll to contact form or handle navigation
    const targetElement = document.getElementById('lets-connect-form');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className={\`schedule-tour-btn \${isVisible ? 'visible' : ''}\`}
      onClick={handleClick}
      aria-label="Schedule your venue tour"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="btn-icon"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" 
        />
      </svg>
      ${buttonStyle === 'circle' ? '' : '<span className="btn-text">Schedule Your Tour</span>'}
    </button>
  );
}`
            },
            {
              title: "🎨 CSS Styles",
              language: "css",
              code: `/* Schedule Tour Button Styles - ${activeVariant.label} */
.schedule-tour-btn {
  position: ${activeVariant.position.bottom ? 'fixed' : 'fixed'};
  ${Object.entries(activeVariant.position).map(([key, value]) => 
    key !== 'description' && key !== 'transform' ? `${key}: ${value};` : ''
  ).filter(Boolean).join('\n  ')}
  ${activeVariant.position.transform ? `transform: ${activeVariant.position.transform};` : ''}
  
  background: ${buttonStyle === 'outlined' ? (activeVariant.background || 'transparent') : activeVariant.primary};
  color: ${activeVariant.buttonText};
  border-radius: ${activeVariant.borderRadius};
  padding: ${activeVariant.padding};
  font-size: ${activeVariant.fontSize};
  font-weight: ${activeVariant.fontWeight};
  ${activeVariant.border ? `border: ${activeVariant.border} ${activeVariant.primary};` : 'border: none;'}
  ${activeVariant.width ? `width: ${activeVariant.width};` : ''}
  ${activeVariant.height ? `height: ${activeVariant.height};` : ''}
  
  display: flex;
  align-items: center;
  ${buttonStyle === 'circle' ? 'justify-content: center;' : 'gap: 0.5rem;'}
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  z-index: 1000;
  
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
  
  /* Hidden state */
  opacity: 0;
  transform: ${activeVariant.hiddenTransform};
  pointer-events: none;
}

.schedule-tour-btn.visible {
  opacity: 1;
  transform: ${activeVariant.visibleTransform};
  pointer-events: auto;
}

.schedule-tour-btn:hover {
  background: ${activeVariant.hover};
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.btn-icon {
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
}

${buttonStyle === 'circle' ? `
.schedule-tour-btn .btn-text {
  display: none;
}
` : ''}

/* Mobile responsive */
@media (max-width: 768px) {
  .schedule-tour-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
    bottom: 1rem;
    right: 1rem;
  }
}`
            },
            {
              title: "📱 Usage Guide",
              language: "markdown",
              code: `# Schedule Tour Button Usage

## Current Configuration
- **Theme**: ${themeMode}
- **Position**: ${positionOptions[position].description}
- **Colors**: ${activeVariant.paletteName}
- **Style**: ${buttonStyles[buttonStyle].description}
- **Animation**: ${animationStyles[animationStyle].description} (${animationSpeeds[animationSpeed].description})
- **Trigger**: ${triggerPoints[triggerPoint].description}

## Implementation Steps

1. **Copy the CSS** into your stylesheet
2. **Add the React component** to your layout
3. **Ensure target element** exists with id="lets-connect-form"
4. **Test scroll behavior** with your content length

## Position Options

### Standard Positions
- \`bottom-right\`: Traditional floating button position (original)
- \`bottom-left\`: Alternative corner placement
- \`bottom-center\`: Centered at bottom of viewport
- \`top-right\`: Header-adjacent placement
- \`center-right\`: Sidebar-style positioning

### Style Variations
- **Original**: Pill-shaped button with text and icon
- **Circle**: Icon-only circular button for minimal design
- **Outlined**: Transparent background with colored border
- **Rounded**: Modern rectangular with rounded corners
- **Minimal**: Simple, understated design

### Animation Types
- **Slide Up & Scale**: Default entrance animation
- **Fade Only**: Simple opacity transition
- **Bounce In**: Playful bounce effect
- **Rotate & Scale**: Dramatic rotating entrance
- **Slide From Right**: Horizontal slide animation

### Trigger Points
- **Always Visible**: Button appears immediately
- **After Hero Section**: Appears after scrolling past viewport
- **Halfway Down Page**: Appears at 1.5x viewport height
- **Near Bottom**: Appears when approaching page end

## Accessibility Features
- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators
- Color contrast compliance

## Performance Notes
- Optimized scroll event handling
- CSS transforms for smooth animations
- Mobile-responsive design
- Cross-browser compatibility

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
  );
}