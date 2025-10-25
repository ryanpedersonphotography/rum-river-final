import React, { useState, useEffect } from 'react';
import CodeAccordion from './CodeAccordion';

export default function MultiFilterSpacesDemo() {
  // Phase 1: Foundation - 7 Independent Filter States
  const [themeMode, setThemeMode] = useState('light');
  const [colorPalette, setColorPalette] = useState('rustic');
  const [displayStyle, setDisplayStyle] = useState('classic');
  const [animationStyle, setAnimationStyle] = useState('fade');
  const [animationSpeed, setAnimationSpeed] = useState('smooth');
  const [spacing, setSpacing] = useState('comfortable');
  const [layout, setLayout] = useState('classic');

  // Venue state management
  const [activeVenue, setActiveVenue] = useState('barn');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedGallery, setExpandedGallery] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Complete venue data with images and features
  const venueData = {
    barn: {
      title: 'The Historic Barn',
      images: [
        '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
        '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
        '/images/venue/barn-exterior-full-view-landscape.jpg'
      ],
      expandedImages: [
        '/images/2014/04/Loria-Jason-wedding-2-0026.jpg',
        '/images/2014/04/Kliewer-6227225.jpg',
        '/images/2014/04/Kliewer-6226667.jpg',
        '/images/2014/04/Kage0213.jpg'
      ],
      description: 'Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.',
      features: [
        { label: 'Capacity', value: 'Up to 300 guests' },
        { label: 'Built', value: '1920s architecture' },
        { label: 'Features', value: 'Climate controlled' },
        { label: 'Style', value: 'Rustic elegance' }
      ]
    },
    bridal: {
      title: 'Bridal Suite',
      images: [
        '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
        '/images/venue/details-antique-wheel-rustic-decor.jpg',
        '/images/venue/barn-exterior-welcome-sign-entrance.jpg'
      ],
      expandedImages: [
        '/images/2014/05/Loria-Jason-wedding-1-0205.jpg',
        '/images/2014/05/IMG_7929-2.jpg',
        '/images/2014/05/Loria-and-Jason-XORDER-2-0030.jpg'
      ],
      description: 'A luxurious private space for the bride and bridal party to prepare for the big day, featuring elegant furnishings and ample natural light.',
      features: [
        { label: 'Capacity', value: 'Up to 8 people' },
        { label: 'Amenities', value: 'Full mirror, seating' },
        { label: 'Natural Light', value: 'Large windows' },
        { label: 'Privacy', value: 'Separate entrance' }
      ]
    },
    groom: {
      title: "Groom's Quarters",
      images: [
        '/images/venue/barn-exterior-welcome-sign-entrance.jpg',
        '/images/venue/details-building-entrance-door.jpg',
        '/images/venue/barn-exterior-front-entrance-concrete-pad.jpg'
      ],
      expandedImages: [
        '/images/2014/05/LB1_7023.jpg',
        '/images/2014/05/Kage0921.jpg',
        '/images/2014/05/Reins-Wedding_1-631.jpg'
      ],
      description: 'A comfortable retreat for the groom and groomsmen, offering a relaxed atmosphere to prepare and celebrate before the ceremony.',
      features: [
        { label: 'Capacity', value: 'Up to 6 people' },
        { label: 'Atmosphere', value: 'Relaxed and private' },
        { label: 'Facilities', value: 'Seating and storage' },
        { label: 'Location', value: 'Separate from bridal' }
      ]
    },
    pavilion: {
      title: 'Garden Pavilion',
      images: [
        '/images/venue/property-field-wildflowers-natural.jpg',
        '/images/venue/barn-exterior-deck-swing-under-tree.jpg',
        '/images/venue/property-vineyard-rows-landscape.jpg'
      ],
      expandedImages: [
        '/images/2014/05/LCB_6258.jpg',
        '/images/2014/05/Loria-Jason-wedding-1-0038.jpg',
        '/images/2014/05/LCB_6661.jpg'
      ],
      description: 'An enchanting outdoor space perfect for ceremonies or cocktail hours, surrounded by lush gardens and natural beauty.',
      features: [
        { label: 'Setting', value: 'Outdoor garden' },
        { label: 'Use', value: 'Ceremonies, cocktails' },
        { label: 'Surroundings', value: 'Natural gardens' },
        { label: 'Season', value: 'Spring through fall' }
      ]
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

  // Color Palette Options (Venue-Themed)
  const colorPalettes = {
    rustic: {
      primary: '#8B4513',
      secondary: '#F5E6D3',
      accent: '#D2691E',
      neutral: '#5D4037',
      name: 'Rustic Barn'
    },
    elegant: {
      primary: '#2C2C2C',
      secondary: '#FAFAFA',
      accent: '#D4AF37',
      neutral: '#666666',
      name: 'Elegant White'
    },
    garden: {
      primary: '#4A6741',
      secondary: '#F0F8F0',
      accent: '#E91E63',
      neutral: '#2E7D32',
      name: 'Garden Romance'
    },
    industrial: {
      primary: '#37474F',
      secondary: '#ECEFF1',
      accent: '#607D8B',
      neutral: '#263238',
      name: 'Modern Industrial'
    },
    vintage: {
      primary: '#5D4E75',
      secondary: '#F3F0E8',
      accent: '#FFC107',
      neutral: '#6A4C93',
      name: 'Vintage Country'
    },
    autumn: {
      primary: '#BF360C',
      secondary: '#FFF3E0',
      accent: '#FF8F00',
      neutral: '#D84315',
      name: 'Autumn Harvest'
    },
    blacktie: {
      primary: '#000000',
      secondary: '#FFFFFF',
      accent: '#FFD700',
      neutral: '#424242',
      name: 'Classic Black Tie'
    },
    spring: {
      primary: '#388E3C',
      secondary: '#E8F5E8',
      accent: '#7B1FA2',
      neutral: '#2E7D32',
      name: 'Spring Meadow'
    },
    vineyard: {
      primary: '#6A1B9A',
      secondary: '#F3E5F5',
      accent: '#FF8F00',
      neutral: '#4A148C',
      name: 'Sunset Vineyard'
    },
    winter: {
      primary: '#1565C0',
      secondary: '#E3F2FD',
      accent: '#E1F5FE',
      neutral: '#0D47A1',
      name: 'Winter Wonderland'
    }
  };

  // Display Style Options
  const displayStyles = {
    classic: {
      borderRadius: '12px',
      cardEffect: 'shadow',
      overlayStyle: 'gradient',
      typography: 'traditional'
    },
    glassmorphic: {
      borderRadius: '20px',
      cardEffect: 'glass',
      overlayStyle: 'blur',
      backdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      typography: 'modern'
    },
    editorial: {
      borderRadius: '0',
      cardEffect: 'dramatic',
      overlayStyle: 'editorial',
      border: '2px solid #000000',
      typography: 'serif'
    },
    minimal: {
      borderRadius: '0',
      cardEffect: 'none',
      overlayStyle: 'clean',
      boxShadow: 'none',
      typography: 'clean'
    },
    rustic: {
      borderRadius: '8px',
      cardEffect: 'textured',
      overlayStyle: 'warm',
      border: '3px solid #8B4513',
      typography: 'rustic'
    },
    modern: {
      borderRadius: '4px',
      cardEffect: 'geometric',
      overlayStyle: 'sharp',
      border: '1px solid #37474F',
      typography: 'geometric'
    },
    vintage: {
      borderRadius: '15px',
      cardEffect: 'film',
      overlayStyle: 'sepia',
      filter: 'sepia(0.3) contrast(1.1)',
      border: '4px solid #5D4E75',
      typography: 'vintage'
    },
    luxury: {
      borderRadius: '0',
      cardEffect: 'premium',
      overlayStyle: 'gold',
      border: '2px solid #D4AF37',
      typography: 'luxury'
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
      transform: 'translateX(20px)',
      description: 'Slide transition'
    },
    zoom: {
      transition: 'transform',
      transform: 'scale(1.05)',
      description: 'Zoom effect'
    },
    parallax: {
      transition: 'transform',
      transform: 'translateY(-10px) scale(1.02)',
      description: 'Parallax scroll'
    },
    flip: {
      transition: 'transform',
      transform: 'perspective(1000px) rotateY(10deg)',
      description: '3D flip'
    },
    morph: {
      transition: 'border-radius, transform',
      transform: 'scale(1.02)',
      description: 'Shape morph'
    },
    stagger: {
      transition: 'transform, opacity',
      transform: 'translateY(10px)',
      description: 'Staggered reveal'
    }
  };

  // Animation Speed Options
  const animationSpeeds = {
    instant: { duration: '0s', easing: 'linear', description: 'No animation' },
    quick: { duration: '0.15s', easing: 'ease-out', description: 'Quick snap' },
    smooth: { duration: '0.3s', easing: 'cubic-bezier(0.4, 0, 0.2, 1)', description: 'Smooth' },
    elegant: { duration: '0.6s', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Elegant' },
    slow: { duration: '1.2s', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Slow motion' },
    cinematic: { duration: '2.5s', easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)', description: 'Cinematic' },
    spring: { duration: '0.5s', easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', description: 'Spring bounce' }
  };

  // Spacing Options
  const spacingOptions = {
    ultraCompact: { gap: '0.25rem', padding: '20px 0 60px', description: 'Ultra compact' },
    tight: { gap: '0.5rem', padding: '30px 0 70px', description: 'Tight spacing' },
    standard: { gap: '1rem', padding: '40px 0 80px', description: 'Standard' },
    comfortable: { gap: '2rem', padding: '50px 0 100px', description: 'Comfortable' },
    relaxed: { gap: '3rem', padding: '60px 0 120px', description: 'Relaxed' },
    loose: { gap: '4rem', padding: '70px 0 140px', description: 'Loose spacing' },
    airy: { gap: '5rem', padding: '80px 0 160px', description: 'Maximum airy' }
  };

  // Layout Pattern Options - Different ways to display the tabbed venue showcase
  const layoutOptions = {
    classic: {
      structure: 'tabs-top',
      imageDisplay: 'carousel',
      infoPosition: 'right',
      description: 'Classic tabbed'
    },
    split: {
      structure: 'tabs-left',
      imageDisplay: 'carousel',
      infoPosition: 'right',
      description: 'Sidebar tabs'
    },
    stacked: {
      structure: 'tabs-top',
      imageDisplay: 'grid',
      infoPosition: 'below',
      description: 'Vertical stack'
    },
    magazine: {
      structure: 'tabs-minimal',
      imageDisplay: 'hero',
      infoPosition: 'overlay',
      description: 'Magazine style'
    },
    gallery: {
      structure: 'tabs-top',
      imageDisplay: 'masonry',
      infoPosition: 'sidebar',
      description: 'Gallery focus'
    },
    minimal: {
      structure: 'tabs-dots',
      imageDisplay: 'single',
      infoPosition: 'below',
      description: 'Minimalist'
    },
    immersive: {
      structure: 'tabs-hidden',
      imageDisplay: 'fullscreen',
      infoPosition: 'overlay',
      description: 'Full immersion'
    },
    showcase: {
      structure: 'tabs-bottom',
      imageDisplay: 'slider',
      infoPosition: 'split',
      description: 'Showcase mode'
    }
  };

  // Combine all filters to create final variant
  const getCurrentVariant = () => {
    const theme = themeModes[themeMode];
    const palette = colorPalettes[colorPalette];
    const style = displayStyles[displayStyle];
    const animation = animationStyles[animationStyle];
    const speed = animationSpeeds[animationSpeed];
    const space = spacingOptions[spacing];
    const grid = layoutOptions[layout];

    const isDark = themeMode === 'dark';
    
    return {
      // Theme properties
      sectionBg: isDark 
        ? `linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)`
        : palette.secondary,
      textColor: isDark ? '#FFFFFF' : palette.neutral,
      
      // Color properties
      primary: palette.primary,
      secondary: palette.secondary,
      accent: palette.accent,
      neutral: palette.neutral,
      paletteName: palette.name,
      
      // Style properties
      borderRadius: style.borderRadius,
      cardEffect: style.cardEffect,
      overlayStyle: style.overlayStyle,
      backdropFilter: style.backdropFilter,
      border: style.border,
      filter: style.filter,
      typography: style.typography,
      
      // Animation properties
      animationDuration: speed.duration,
      animationEasing: speed.easing,
      animationTransition: animation.transition,
      animationTransform: animation.transform,
      
      // Spacing properties
      gap: space.gap,
      padding: space.padding,
      
      // Layout properties
      layoutStructure: grid.structure,
      imageDisplay: grid.imageDisplay,
      infoPosition: grid.infoPosition,
      
      // Shadow and overlay adjustments
      boxShadow: isDark 
        ? `0 20px 40px rgba(0, 0, 0, ${theme.shadowStrength + 0.3})`
        : `0 20px 40px rgba(0, 0, 0, ${theme.shadowStrength})`,
      
      overlayBg: style.overlayStyle === 'blur' 
        ? `rgba(255, 255, 255, ${isDark ? 0.1 : 0.2})`
        : style.overlayStyle === 'editorial'
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%)`
        : style.overlayStyle === 'gold'
        ? `linear-gradient(to top, rgba(212, 175, 55, 0.8) 0%, transparent 100%)`
        : `linear-gradient(to top, rgba(${isDark ? '0, 0, 0' : '139, 69, 19'}, ${theme.overlayDarkness}) 0%, transparent 100%)`,
      
      // Unique identifier
      id: `${themeMode}-${colorPalette}-${displayStyle}-${animationStyle}-${animationSpeed}-${spacing}-${layout}`,
      label: `${themeMode} ${palette.name} ${displayStyle} ${animationStyle} ${animationSpeed} ${spacing} ${layout}`
    };
  };

  const activeVariant = getCurrentVariant();
  const currentVenue = venueData[activeVenue];

  // Handle venue tab change
  const handleVenueChange = (venueKey) => {
    setActiveVenue(venueKey);
    setCurrentImageIndex(0);
  };

  // Handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % currentVenue.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentVenue.images.length - 1 : prev - 1
    );
  };

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

  // Render venue content based on layout
  const renderVenueContent = () => {
    // Classic layout (tabs on top, carousel with info on right)
    if (layout === 'classic') {
      return (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: activeVariant.gap,
          marginTop: '2rem'
        }}>
          {/* Image Carousel */}
          <div style={{
            position: 'relative',
            borderRadius: activeVariant.borderRadius,
            overflow: 'hidden',
            boxShadow: activeVariant.boxShadow,
            ...(activeVariant.border && { border: activeVariant.border }),
            ...(activeVariant.filter && { filter: activeVariant.filter })
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              background: '#000'
            }}>
              {currentVenue.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${currentVenue.title} view ${idx + 1}`}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: idx === currentImageIndex ? 1 : 0,
                    transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                    transform: animationStyle === 'zoom' && idx === currentImageIndex 
                      ? 'scale(1.05)' 
                      : animationStyle === 'slide' && idx === currentImageIndex
                      ? 'translateX(0)'
                      : animationStyle === 'slide'
                      ? idx < currentImageIndex ? 'translateX(-100%)' : 'translateX(100%)'
                      : 'scale(1)'
                  }}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                cursor: 'pointer',
                fontSize: '20px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.8)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.6)'}
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                cursor: 'pointer',
                fontSize: '20px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.8)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.6)'}
            >
              ›
            </button>

            {/* Image Dots */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px',
              padding: '10px 15px',
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '25px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {currentVenue.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    width: index === currentImageIndex ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    background: index === currentImageIndex 
                      ? activeVariant.accent 
                      : 'rgba(255, 255, 255, 0.4)',
                    cursor: 'pointer',
                    transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                    transform: index === currentImageIndex ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Venue Information */}
          <div style={{
            padding: '2rem',
            background: themeMode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.95)',
            borderRadius: activeVariant.borderRadius,
            ...(activeVariant.backdropFilter && { backdropFilter: activeVariant.backdropFilter })
          }}>
            <h3 style={{
              fontFamily: activeVariant.typography === 'serif' 
                ? "'Playfair Display', serif" 
                : "'Dancing Script', cursive",
              fontSize: '2rem',
              color: activeVariant.primary,
              marginBottom: '1rem'
            }}>
              {currentVenue.title}
            </h3>
            
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: activeVariant.textColor,
              marginBottom: '2rem'
            }}>
              {currentVenue.description}
            </p>

            {/* Features List */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: activeVariant.primary,
                marginBottom: '1rem'
              }}>
                Features
              </h4>
              {currentVenue.features.map((feature, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0',
                  borderBottom: `1px solid ${themeMode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.1)'}`
                }}>
                  <span style={{ color: activeVariant.textColor, opacity: 0.8 }}>
                    {feature.label}
                  </span>
                  <span style={{ color: activeVariant.accent, fontWeight: 500 }}>
                    {feature.value}
                  </span>
                </div>
              ))}
            </div>

            {/* View Gallery Button */}
            <button
              onClick={() => setExpandedGallery(!expandedGallery)}
              style={{
                width: '100%',
                padding: '12px',
                background: activeVariant.primary,
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }}
            >
              {expandedGallery ? 'Hide' : 'View'} Full Gallery
            </button>
          </div>
        </div>
      );
    }

    // Split layout (tabs on left sidebar)
    if (layout === 'split') {
      return (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: activeVariant.gap,
          marginTop: '2rem'
        }}>
          {/* Left Sidebar Tabs */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {Object.entries(venueData).map(([key, venue]) => (
              <button
                key={key}
                onClick={() => handleVenueChange(key)}
                style={{
                  padding: '15px',
                  textAlign: 'left',
                  background: key === activeVenue 
                    ? activeVariant.primary 
                    : 'transparent',
                  color: key === activeVenue 
                    ? '#FFFFFF' 
                    : activeVariant.textColor,
                  border: `1px solid ${activeVariant.primary}`,
                  borderRadius: activeVariant.borderRadius,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem',
                  fontWeight: key === activeVenue ? 600 : 400
                }}
              >
                {venue.title}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div>
            {/* Image Gallery */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {currentVenue.images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    borderRadius: activeVariant.borderRadius,
                    overflow: 'hidden',
                    boxShadow: activeVariant.boxShadow,
                    cursor: 'pointer',
                    transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                    transform: currentImageIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                  onClick={() => setCurrentImageIndex(index)}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = currentImageIndex === index ? 'scale(1.05)' : 'scale(1)'}
                >
                  <img
                    src={image}
                    alt={`${currentVenue.title} view ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
                    }}
                  />
                  {currentImageIndex === index && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: `3px solid ${activeVariant.accent}`,
                      background: `linear-gradient(to bottom, transparent 0%, ${activeVariant.accent}20 100%)`,
                      pointerEvents: 'none'
                    }} />
                  )}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '8px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                    color: 'white',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    opacity: currentImageIndex === index ? 1 : 0,
                    transition: `opacity ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
                  }}>
                    View {index + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Venue Info */}
            <div style={{
              padding: '2rem',
              background: themeMode === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(255, 255, 255, 0.95)',
              borderRadius: activeVariant.borderRadius
            }}>
              <h3 style={{
                fontSize: '2rem',
                color: activeVariant.primary,
                marginBottom: '1rem'
              }}>
                {currentVenue.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: activeVariant.textColor,
                marginBottom: '1.5rem'
              }}>
                {currentVenue.description}
              </p>
              
              {/* Features Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}>
                {currentVenue.features.map((feature, index) => (
                  <div key={index} style={{
                    padding: '1rem',
                    background: themeMode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.03)' 
                      : 'rgba(0, 0, 0, 0.03)',
                    borderRadius: '8px'
                  }}>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: activeVariant.textColor, 
                      opacity: 0.7,
                      marginBottom: '4px'
                    }}>
                      {feature.label}
                    </div>
                    <div style={{ 
                      fontSize: '1rem', 
                      color: activeVariant.accent,
                      fontWeight: 500
                    }}>
                      {feature.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Magazine layout (dramatic full-width with overlay info)
    if (layout === 'magazine') {
      return (
        <div style={{ marginTop: '2rem' }}>
          {/* Hero Image */}
          <div style={{
            position: 'relative',
            height: '600px',
            borderRadius: activeVariant.borderRadius,
            overflow: 'hidden',
            boxShadow: activeVariant.boxShadow
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              background: '#000'
            }}>
              {currentVenue.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${currentVenue.title} view ${idx + 1}`}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: idx === currentImageIndex ? 1 : 0,
                    transition: `opacity ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                    transform: animationStyle === 'parallax' && idx === currentImageIndex
                      ? 'scale(1.1)'
                      : 'scale(1)'
                  }}
                />
              ))}
            </div>
            
            {/* Overlay Content */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '3rem',
              background: activeVariant.overlayBg
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3rem',
                color: '#FFFFFF',
                marginBottom: '1rem',
                fontWeight: 700
              }}>
                {currentVenue.title}
              </h3>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2rem',
                maxWidth: '600px'
              }}>
                {currentVenue.description}
              </p>
              
              {/* Features Row */}
              <div style={{
                display: 'flex',
                gap: '2rem'
              }}>
                {currentVenue.features.slice(0, 3).map((feature, index) => (
                  <div key={index}>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: activeVariant.accent,
                      marginBottom: '4px'
                    }}>
                      {feature.label}
                    </div>
                    <div style={{ 
                      fontSize: '1.1rem', 
                      color: '#FFFFFF',
                      fontWeight: 500
                    }}>
                      {feature.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '10px',
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px'
            }}>
              {currentVenue.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    width: '80px',
                    height: '60px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: currentImageIndex === index 
                      ? `2px solid ${activeVariant.accent}`
                      : '2px solid rgba(255, 255, 255, 0.2)',
                    transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                    transform: currentImageIndex === index ? 'scale(1.05)' : 'scale(1)',
                    opacity: currentImageIndex === index ? 1 : 0.7
                  }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Stacked layout (tabs on top, images in grid below, info at bottom)
    if (layout === 'stacked') {
      return (
        <div style={{ marginTop: '2rem' }}>
          {/* Image Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {currentVenue.images.map((image, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  borderRadius: activeVariant.borderRadius,
                  overflow: 'hidden',
                  boxShadow: activeVariant.boxShadow,
                  cursor: 'pointer',
                  transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                  transform: currentImageIndex === index ? 'scale(1.05)' : 'scale(1)'
                }}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${currentVenue.title} view ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                {currentImageIndex === index && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    border: `3px solid ${activeVariant.accent}`,
                    background: `${activeVariant.accent}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      background: activeVariant.accent,
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      Selected
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Venue Information Below */}
          <div style={{
            padding: '2rem',
            background: themeMode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.95)',
            borderRadius: activeVariant.borderRadius,
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              color: activeVariant.primary,
              marginBottom: '1rem',
              fontFamily: "'Playfair Display', serif"
            }}>
              {currentVenue.title}
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: activeVariant.textColor,
              marginBottom: '2rem',
              maxWidth: '800px',
              margin: '0 auto 2rem'
            }}>
              {currentVenue.description}
            </p>

            {/* Features in horizontal layout */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              {currentVenue.features.map((feature, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: themeMode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.03)' 
                    : 'rgba(0, 0, 0, 0.03)',
                  borderRadius: '12px',
                  minWidth: '120px'
                }}>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: activeVariant.textColor, 
                    opacity: 0.7,
                    marginBottom: '4px'
                  }}>
                    {feature.label}
                  </div>
                  <div style={{ 
                    fontSize: '1rem', 
                    color: activeVariant.accent,
                    fontWeight: 600
                  }}>
                    {feature.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Gallery layout (masonry-style focus on images)
    if (layout === 'gallery') {
      return (
        <div style={{ marginTop: '2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
            gap: activeVariant.gap
          }}>
            {/* Masonry-style Gallery */}
            <div>
              <div style={{
                columns: isMobile ? 1 : 2,
                columnGap: '1rem',
                marginBottom: '2rem'
              }}>
                {[...currentVenue.images, ...currentVenue.expandedImages.slice(0, 3)].map((image, index) => (
                  <div
                    key={index}
                    style={{
                      breakInside: 'avoid',
                      marginBottom: '1rem',
                      borderRadius: activeVariant.borderRadius,
                      overflow: 'hidden',
                      boxShadow: activeVariant.boxShadow,
                      cursor: 'pointer',
                      transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
                    }}
                    onClick={() => setCurrentImageIndex(index % currentVenue.images.length)}
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Info */}
            <div style={{
              padding: '2rem',
              background: themeMode === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(255, 255, 255, 0.95)',
              borderRadius: activeVariant.borderRadius,
              height: 'fit-content',
              position: 'sticky',
              top: '2rem'
            }}>
              <h3 style={{
                fontSize: '2rem',
                color: activeVariant.primary,
                marginBottom: '1rem'
              }}>
                {currentVenue.title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: activeVariant.textColor,
                marginBottom: '2rem'
              }}>
                {currentVenue.description}
              </p>

              {currentVenue.features.map((feature, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0',
                  borderBottom: `1px solid ${themeMode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.1)'}`
                }}>
                  <span style={{ color: activeVariant.textColor, opacity: 0.8 }}>
                    {feature.label}
                  </span>
                  <span style={{ color: activeVariant.accent, fontWeight: 500 }}>
                    {feature.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Minimal layout (clean, simple design with dot navigation)
    if (layout === 'minimal') {
      return (
        <div style={{ marginTop: '2rem' }}>
          {/* Single Large Image */}
          <div style={{
            position: 'relative',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            <img
              src={currentVenue.images[currentImageIndex]}
              alt={currentVenue.title}
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: activeVariant.borderRadius,
                boxShadow: activeVariant.boxShadow,
                transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
              }}
            />
            
            {/* Minimal Dots Navigation */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '2rem'
            }}>
              {currentVenue.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    width: index === currentImageIndex ? '40px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: index === currentImageIndex 
                      ? activeVariant.primary 
                      : 'rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                    transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Clean Info Section */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '2rem',
              color: activeVariant.primary,
              marginBottom: '1rem',
              fontWeight: 300
            }}>
              {currentVenue.title}
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: activeVariant.textColor,
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              {currentVenue.description}
            </p>

            {/* Minimal Features */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {currentVenue.features.map((feature, index) => (
                <span
                  key={index}
                  style={{
                    padding: '6px 12px',
                    background: 'transparent',
                    border: `1px solid ${activeVariant.primary}`,
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: activeVariant.primary
                  }}
                >
                  {feature.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Immersive layout (fullscreen experience)
    if (layout === 'immersive') {
      return (
        <div style={{
          position: 'relative',
          marginTop: '2rem',
          minHeight: '80vh'
        }}>
          {/* Fullscreen Background Image */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: activeVariant.borderRadius,
            overflow: 'hidden'
          }}>
            <img
              src={currentVenue.images[currentImageIndex]}
              alt={currentVenue.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)'
            }} />
          </div>

          {/* Content Overlay */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '3rem'
          }}>
            {/* Top: Hidden tabs shown as overlay pills */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '2rem'
            }}>
              {Object.entries(venueData).map(([key, venue]) => (
                <button
                  key={key}
                  onClick={() => handleVenueChange(key)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: 'none',
                    background: key === activeVenue 
                      ? 'rgba(255, 255, 255, 0.9)' 
                      : 'rgba(255, 255, 255, 0.2)',
                    color: key === activeVenue ? '#000' : '#fff',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {venue.title}
                </button>
              ))}
            </div>

            {/* Bottom: Content */}
            <div>
              <h3 style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700
              }}>
                {currentVenue.title}
              </h3>
              
              <p style={{
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2rem',
                maxWidth: '600px',
                lineHeight: '1.6'
              }}>
                {currentVenue.description}
              </p>

              {/* Image Navigation */}
              <div style={{
                display: 'flex',
                gap: '15px',
                marginBottom: '2rem'
              }}>
                {currentVenue.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: index === currentImageIndex ? '50px' : '15px',
                      height: '15px',
                      borderRadius: '8px',
                      border: 'none',
                      background: index === currentImageIndex 
                        ? activeVariant.accent 
                        : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`
                    }}
                  />
                ))}
              </div>

              {/* Features */}
              <div style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap'
              }}>
                {currentVenue.features.slice(0, 3).map((feature, index) => (
                  <div key={index} style={{
                    color: '#FFFFFF'
                  }}>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: activeVariant.accent,
                      marginBottom: '4px'
                    }}>
                      {feature.label}
                    </div>
                    <div style={{ 
                      fontSize: '1.1rem',
                      fontWeight: 500
                    }}>
                      {feature.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Showcase layout (tabs at bottom, large slider)
    if (layout === 'showcase') {
      return (
        <div style={{ marginTop: '2rem' }}>
          {/* Large Image Slider */}
          <div style={{
            position: 'relative',
            height: '500px',
            marginBottom: '2rem',
            borderRadius: activeVariant.borderRadius,
            overflow: 'hidden',
            boxShadow: activeVariant.boxShadow
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              background: '#000'
            }}>
              {currentVenue.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${currentVenue.title} view ${idx + 1}`}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: idx === currentImageIndex ? 1 : 0,
                    transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                    transform: animationStyle === 'zoom' && idx === currentImageIndex 
                      ? 'scale(1.1)' 
                      : 'scale(1)'
                  }}
                />
              ))}
            </div>

            {/* Slider Controls */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                fontSize: '20px'
              }}
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                fontSize: '20px'
              }}
            >
              ›
            </button>
          </div>

          {/* Split Info Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: activeVariant.gap
          }}>
            {/* Left: Venue Info */}
            <div style={{
              padding: '2rem',
              background: themeMode === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(255, 255, 255, 0.95)',
              borderRadius: activeVariant.borderRadius
            }}>
              <h3 style={{
                fontSize: '2rem',
                color: activeVariant.primary,
                marginBottom: '1rem'
              }}>
                {currentVenue.title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: activeVariant.textColor,
                marginBottom: '1.5rem'
              }}>
                {currentVenue.description}
              </p>
            </div>

            {/* Right: Features */}
            <div style={{
              padding: '2rem',
              background: themeMode === 'dark' 
                ? 'rgba(255, 255, 255, 0.03)' 
                : 'rgba(0, 0, 0, 0.03)',
              borderRadius: activeVariant.borderRadius
            }}>
              <h4 style={{
                fontSize: '1.3rem',
                color: activeVariant.primary,
                marginBottom: '1.5rem'
              }}>
                Key Features
              </h4>
              
              <div style={{
                display: 'grid',
                gap: '1rem'
              }}>
                {currentVenue.features.map((feature, index) => (
                  <div key={index} style={{
                    padding: '1rem',
                    background: themeMode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.05)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    borderLeft: `4px solid ${activeVariant.accent}`
                  }}>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: activeVariant.textColor, 
                      opacity: 0.7,
                      marginBottom: '4px'
                    }}>
                      {feature.label}
                    </div>
                    <div style={{ 
                      fontSize: '1.1rem', 
                      color: activeVariant.accent,
                      fontWeight: 600
                    }}>
                      {feature.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default to classic layout for any unhandled options
    return renderVenueContent();
  };

  return (
    <>
      <style>{`
        .spaces-demo-item {
          transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
        }
        
        .spaces-demo-item:hover {
          transform: ${activeVariant.animationTransform};
        }
      `}</style>

      {/* Multi-Filter Spaces Demo Section */}
      <section style={{
        background: activeVariant.sectionBg,
        transition: 'background 0.6s ease',
        minHeight: '100vh',
        padding: activeVariant.padding
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
            padding: '25px',
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
              🏗️ Venue Spaces Multi-Filter Demo
            </h3>

            {/* Theme Mode */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: '120px'
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

            {/* Color Palette */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: '120px'
              }}>
                🎨 Palette:
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: '120px'
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: '120px'
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: '120px'
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: '120px'
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

            {/* Layout */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeVariant.textColor,
                minWidth: '120px'
              }}>
                🎯 Layout:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {Object.entries(layoutOptions).map(([key, grid]) => (
                  <button
                    key={key}
                    onClick={() => setLayout(key)}
                    style={getFilterButtonStyle(layout === key)}
                    title={grid.description}
                  >
                    {grid.description}
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
              Your Perfect Setting
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 500,
              marginBottom: '1.5rem',
              color: activeVariant.textColor,
              margin: '0 0 1.5rem 0'
            }}>
              Discover Our Spaces
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
              Every corner tells a story, every space creates memories
            </p>
          </div>

          {/* Venue Tabs (hidden for split layout since it has sidebar tabs) */}
          {layout !== 'split' && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {Object.entries(venueData).map(([key, venue]) => (
                <button
                  key={key}
                  onClick={() => handleVenueChange(key)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '25px',
                    border: key === activeVenue 
                      ? `2px solid ${activeVariant.primary}` 
                      : '1px solid transparent',
                    background: key === activeVenue 
                      ? activeVariant.primary 
                      : 'rgba(255, 255, 255, 0.1)',
                    color: key === activeVenue 
                      ? '#FFFFFF' 
                      : activeVariant.textColor,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: key === activeVenue ? 600 : 400,
                    fontSize: '0.95rem'
                  }}
                >
                  {venue.title}
                </button>
              ))}
            </div>
          )}

          {/* Dynamic Venue Content Based on Layout */}
          {renderVenueContent()}

          {/* Expanded Gallery (if active) */}
          {expandedGallery && (
            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              background: themeMode === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(0, 0, 0, 0.05)',
              borderRadius: activeVariant.borderRadius
            }}>
              <h4 style={{
                fontSize: '1.5rem',
                color: activeVariant.primary,
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Extended Gallery
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile 
                  ? '1fr' 
                  : 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                {currentVenue.expandedImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      borderRadius: activeVariant.borderRadius,
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      transition: `all ${activeVariant.animationDuration} ${activeVariant.animationEasing}`,
                      cursor: 'pointer'
                    }}
                    className="spaces-demo-item"
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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
                  code: `/* Spaces Component Design Tokens - ${activeVariant.label} */
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
  --grid-columns: ${activeVariant.gridColumns};
  --grid-arrangement: "${activeVariant.gridArrangement}";
  
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
                  code: `// Spaces Component Implementation
// Generated variant: ${activeVariant.id}

import React, { useState } from 'react';

export default function SpacesSection() {
  const [activeVenue, setActiveVenue] = useState('barn');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const venueData = {
    barn: {
      title: 'The Historic Barn',
      images: [
        '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
        '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
        '/images/venue/barn-exterior-full-view-landscape.jpg'
      ],
      description: 'Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.',
      features: [
        { label: 'Capacity', value: 'Up to 300 guests' },
        { label: 'Built', value: '1920s architecture' },
        { label: 'Features', value: 'Climate controlled' },
        { label: 'Style', value: 'Rustic elegance' }
      ]
    },
    bridal: {
      title: 'Bridal Suite',
      images: [
        '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
        '/images/venue/details-antique-wheel-rustic-decor.jpg'
      ],
      description: 'A luxurious private space for the bride and bridal party to prepare for the big day.',
      features: [
        { label: 'Capacity', value: 'Up to 8 people' },
        { label: 'Amenities', value: 'Full mirror, seating' },
        { label: 'Natural Light', value: 'Large windows' },
        { label: 'Privacy', value: 'Separate entrance' }
      ]
    },
    groom: {
      title: "Groom's Quarters",
      images: [
        '/images/venue/barn-exterior-welcome-sign-entrance.jpg',
        '/images/venue/details-building-entrance-door.jpg'
      ],
      description: 'A comfortable retreat for the groom and groomsmen.',
      features: [
        { label: 'Capacity', value: 'Up to 6 people' },
        { label: 'Atmosphere', value: 'Relaxed and private' }
      ]
    },
    pavilion: {
      title: 'Garden Pavilion',
      images: [
        '/images/venue/property-field-wildflowers-natural.jpg',
        '/images/venue/barn-exterior-deck-swing-under-tree.jpg'
      ],
      description: 'An enchanting outdoor space perfect for ceremonies or cocktail hours.',
      features: [
        { label: 'Setting', value: 'Outdoor garden' },
        { label: 'Use', value: 'Ceremonies, cocktails' }
      ]
    }
  };

  const handleVenueChange = (venue) => {
    setActiveVenue(venue);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % venueData[activeVenue].images.length
    );
  };

  return (
    <section className="spaces-section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="script-accent">Your Perfect Setting</div>
          <h2 className="section-title">Discover Our Spaces</h2>
          <p className="lead">
            Every corner tells a story, every space creates memories
          </p>
        </div>
        
        <div className="venue-tabs">
          {Object.entries(venueData).map(([key, venue]) => (
            <button
              key={key}
              className={\`venue-tab \${activeVenue === key ? 'active' : ''}\`}
              onClick={() => handleVenueChange(key)}
            >
              {venue.title}
            </button>
          ))}
        </div>
        
        <div className="spaces-content layout-${layout}">
          <div className="venue-main-image">
            <img 
              src={venueData[activeVenue].images[currentImageIndex]} 
              alt={venueData[activeVenue].title} 
            />
            <button className="carousel-arrow prev" onClick={prevImage}>←</button>
            <button className="carousel-arrow next" onClick={nextImage}>→</button>
          </div>
          
          <div className="venue-details">
            <h3>{venueData[activeVenue].title}</h3>
            <p>{venueData[activeVenue].description}</p>
            <div className="venue-features">
              {venueData[activeVenue].features.map((feature, index) => (
                <div key={index} className="venue-feature">
                  <h5>{feature.label}</h5>
                  <p>{feature.value}</p>
                </div>
              ))}
            </div>
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
                  code: `/* Spaces Section Styles - ${activeVariant.label} */
.spaces-section {
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

.venue-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.venue-tab {
  padding: 12px 24px;
  border-radius: 25px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  color: ${activeVariant.textColor};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 400;
  font-size: 0.95rem;
}

.venue-tab.active {
  border: 2px solid ${activeVariant.primary};
  background: ${activeVariant.primary};
  color: #FFFFFF;
  font-weight: 600;
}

.spaces-content {
  display: grid;
  gap: ${activeVariant.gap};
  align-items: start;
}

.spaces-content.layout-classic,
.spaces-content.layout-split {
  grid-template-columns: 1fr 1fr;
}

.spaces-content.layout-stacked,
.spaces-content.layout-carousel {
  grid-template-columns: 1fr;
}

.venue-main-image {
  position: relative;
  border-radius: ${activeVariant.borderRadius};
  overflow: hidden;
  box-shadow: ${activeVariant.boxShadow};
  transition: all ${activeVariant.animationDuration} ${activeVariant.animationEasing};
}

.venue-main-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  opacity: 0;
}

.venue-main-image:hover .carousel-arrow {
  opacity: 1;
}

.carousel-arrow.prev {
  left: 1rem;
}

.carousel-arrow.next {
  right: 1rem;
}

.venue-details h3 {
  font-size: 2rem;
  color: ${activeVariant.textColor};
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
}

.venue-details > p {
  font-size: 1.125rem;
  color: ${activeVariant.textColor};
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.venue-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.venue-feature {
  text-align: left;
}

.venue-feature h5 {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: ${activeVariant.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.venue-feature p {
  font-size: 0.875rem;
  color: ${activeVariant.textColor};
  opacity: 0.8;
  margin: 0;
}

/* Layout Variations */
.spaces-content.layout-grid {
  grid-template-columns: repeat(${activeVariant.gridColumns}, 1fr);
  grid-template-rows: ${activeVariant.gridArrangement};
}

.spaces-content.layout-masonry {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  gap: ${activeVariant.gap};
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 20px;
  }
  
  .spaces-content {
    grid-template-columns: 1fr !important;
  }
  
  .venue-features {
    grid-template-columns: 1fr;
  }
  
  .venue-main-image img {
    height: 250px;
  }
}`
                },
                {
                  title: "📱 Usage Guide",
                  language: "markdown",
                  code: `# Spaces Component Usage

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
3. **Add venue data** with images and descriptions
4. **Customize the layout** using the grid options

## Layout Options

### Classic Layouts
- \`classic\`: Traditional side-by-side layout (default)
- \`stacked\`: Image above, content below
- \`split\`: Sidebar navigation with main content

### Advanced Layouts
- \`carousel\`: Full-width carousel with overlaid content
- \`grid\`: Custom grid arrangement (${activeVariant.gridColumns} columns)
- \`masonry\`: Pinterest-style masonry layout

### Color Themes
- **Rustic**: Warm earth tones for traditional venues
- **Elegant**: Sophisticated jewel tones for luxury events
- **Modern**: Clean contemporary colors for modern venues
- **Nature**: Fresh greens for outdoor and garden venues
- **Classic**: Timeless neutrals for versatile styling

### Animation Effects
- **Fade**: Simple opacity transitions
- **Slide**: Smooth sliding animations
- **Zoom**: Scale effects on hover
- **Bounce**: Playful bounce animations

## Performance Notes
- Uses CSS Grid for responsive layouts
- Efficient state management with React hooks
- Optimized for mobile devices
- Lazy loading support for gallery images

## Customization Tips
- Adjust grid columns for different venue counts
- Modify aspect ratios for different image sizes
- Add transition delays for staggered animations
- Use CSS custom properties for theme consistency

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