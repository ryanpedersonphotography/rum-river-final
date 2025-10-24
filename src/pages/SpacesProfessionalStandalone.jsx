import React, { useState, useEffect, useRef } from 'react';

/**
 * SpacesProfessionalStandalone Component
 * 
 * A sophisticated, professional variant of the spaces gallery with:
 * - Elegant micro-interactions and refined animations
 * - Advanced parallax effects and smooth transitions
 * - Professional color treatment with subtle gradients
 * - Sophisticated typography and spacing
 * - Premium feel with attention to detail
 */

const venueData = {
  barn: {
    title: 'The Historic Barn',
    subtitle: 'Timeless Elegance',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-exterior-full-view-landscape.jpg'
    ],
    expandedImages: [
      '/images/2014/04/Loria-Jason-wedding-2-0026.jpg',
      '/images/2014/04/Kliewer-6227225.jpg',
      '/images/2014/04/Kliewer-6226667.jpg',
      '/images/2014/04/Kage0213.jpg',
      '/images/2014/04/wedding-32.jpg',
      '/images/2014/04/Kliewer-6227075.jpg',
      '/images/2014/04/Kliewer-6227270.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0198.jpg',
      '/images/2014/05/LCB_6267.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0365.jpg',
      '/images/2014/05/LB1_6499.jpg',
      '/images/2014/05/LB1_6880.jpg'
    ],
    description: 'Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests', icon: '👥' },
      { label: 'Built', value: '1920s architecture', icon: '🏛️' },
      { label: 'Features', value: 'Climate controlled', icon: '🌡️' },
      { label: 'Style', value: 'Rustic elegance', icon: '✨' }
    ],
    accentColor: 'rgba(157, 107, 123, 0.15)'
  },
  bridal: {
    title: 'Bridal Suite',
    subtitle: 'Your Private Haven',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/details-antique-wheel-rustic-decor.jpg',
      '/images/venue/barn-exterior-welcome-sign-entrance.jpg'
    ],
    expandedImages: [
      '/images/2014/05/Loria-Jason-wedding-1-0205.jpg',
      '/images/2014/05/IMG_7929-2.jpg',
      '/images/2014/05/Loria-and-Jason-XORDER-2-0030.jpg',
      '/images/2014/05/LB1_64311.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0007.jpg',
      '/images/2014/05/IMG_8298.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0012.jpg',
      '/images/2014/05/LB1_7342-2.jpg'
    ],
    description: 'A luxurious private space for the bride and bridal party to prepare for the big day, featuring elegant furnishings and ample natural light.',
    features: [
      { label: 'Capacity', value: 'Up to 8 people', icon: '👗' },
      { label: 'Amenities', value: 'Full mirror, seating', icon: '💄' },
      { label: 'Natural Light', value: 'Large windows', icon: '☀️' },
      { label: 'Privacy', value: 'Separate entrance', icon: '🚪' }
    ],
    accentColor: 'rgba(244, 228, 225, 0.3)'
  },
  groom: {
    title: "Groom's Quarters",
    subtitle: 'Distinguished Space',
    images: [
      '/images/venue/barn-exterior-welcome-sign-entrance.jpg',
      '/images/venue/details-building-entrance-door.jpg',
      '/images/venue/barn-exterior-front-entrance-concrete-pad.jpg'
    ],
    expandedImages: [
      '/images/2014/05/LB1_7023.jpg',
      '/images/2014/05/Kage0921.jpg',
      '/images/2014/05/Reins-Wedding_1-631.jpg',
      '/images/2014/05/LB1_6739.jpg',
      '/images/2014/05/Reins-Wedding_2-269.jpg',
      '/images/2014/05/LB1_6922.jpg',
      '/images/2014/05/Kage0937.jpg'
    ],
    description: 'A comfortable retreat for the groom and groomsmen, offering a relaxed atmosphere to prepare and celebrate before the ceremony.',
    features: [
      { label: 'Capacity', value: 'Up to 6 people', icon: '🤵' },
      { label: 'Atmosphere', value: 'Relaxed and private', icon: '🥃' },
      { label: 'Facilities', value: 'Seating and storage', icon: '🪑' },
      { label: 'Location', value: 'Separate from bridal', icon: '📍' }
    ],
    accentColor: 'rgba(107, 78, 61, 0.1)'
  },
  pavilion: {
    title: 'Garden Pavilion',
    subtitle: 'Natural Beauty',
    images: [
      '/images/venue/property-field-wildflowers-natural.jpg',
      '/images/venue/barn-exterior-deck-swing-under-tree.jpg',
      '/images/venue/property-vineyard-rows-landscape.jpg'
    ],
    expandedImages: [
      '/images/2014/05/LCB_6258.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0038.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0004.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0010.jpg',
      '/images/2014/05/IMG_8503.jpg',
      '/images/2014/05/LCB_6661.jpg',
      '/images/2014/05/LCB_6649.jpg',
      '/images/2014/05/LB2_6386.jpg',
      '/images/2014/05/LCB_6715.jpg'
    ],
    description: 'An enchanting outdoor space perfect for ceremonies or cocktail hours, surrounded by lush gardens and natural beauty.',
    features: [
      { label: 'Setting', value: 'Outdoor garden', icon: '🌿' },
      { label: 'Use', value: 'Ceremonies, cocktails', icon: '🥂' },
      { label: 'Surroundings', value: 'Natural gardens', icon: '🌺' },
      { label: 'Season', value: 'Spring through fall', icon: '🍃' }
    ],
    accentColor: 'rgba(156, 170, 158, 0.15)'
  }
}

export default function SpacesProfessionalStandalone() {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedGalleries, setExpandedGalleries] = useState({})
  const [imageLoadStates, setImageLoadStates] = useState({})
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const containerRef = useRef(null)

  // Preload images for smooth transitions
  useEffect(() => {
    const preloadImages = () => {
      venueData[activeVenue].images.forEach(src => {
        const img = new Image()
        img.onload = () => {
          setImageLoadStates(prev => ({ ...prev, [src]: true }))
        }
        img.src = src
      })
    }
    preloadImages()
  }, [activeVenue])

  const handleVenueChange = (venue) => {
    setActiveVenue(venue)
    setCurrentImageIndex(0)
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  const toggleExpandedGallery = (venue) => {
    setExpandedGalleries(prev => ({
      ...prev,
      [venue]: !prev[venue]
    }))
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % venueData[activeVenue].images.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? venueData[activeVenue].images.length - 1 : prev - 1
    )
  }

  // Advanced parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY
        const parallaxElements = containerRef.current.querySelectorAll('.parallax-element')
        parallaxElements.forEach(el => {
          const speed = el.dataset.speed || 0.5
          el.style.transform = `translateY(${scrolled * speed}px)`
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} style={{
      fontFamily: "'Montserrat', sans-serif",
      lineHeight: 1.6,
      color: '#2C2416',
      margin: 0,
      padding: 0,
      background: 'linear-gradient(180deg, #FEFDFB 0%, #FBF8F4 50%, #FEFDFB 100%)'
    }}>
      
      {/* Professional CSS Animations and Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        
        /* Smooth Entrance Animations */
        @keyframes elegantFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        
        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(0.5deg);
          }
        }
        
        @keyframes gentleGlow {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(157, 107, 123, 0);
          }
          50% {
            box-shadow: 0 10px 40px rgba(157, 107, 123, 0.2);
          }
        }
        
        /* Main Section */
        .professional-spaces-section {
          position: relative;
          padding: 120px 0;
          overflow: hidden;
        }
        
        .professional-spaces-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 50%, rgba(157, 107, 123, 0.03) 0%, transparent 50%);
          animation: subtleFloat 20s ease-in-out infinite;
        }
        
        .professional-header {
          text-align: center;
          margin-bottom: 5rem;
          animation: elegantFadeIn 1s ease-out;
        }
        
        .professional-header .elegant-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 300;
          color: #9D6B7B;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }
        
        .professional-header .main-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem;
          font-weight: 300;
          color: #2C2416;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        
        .professional-header .tagline {
          font-size: 1.125rem;
          color: #6B4E3D;
          opacity: 0.7;
          font-weight: 300;
          letter-spacing: 0.05em;
        }
        
        /* Professional Tab Navigation */
        .professional-tabs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 4rem;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 60px;
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
        }
        
        .professional-tab {
          padding: 0.875rem 2rem;
          background: transparent;
          border: none;
          color: #6B4E3D;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .professional-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, #9D6B7B, #B899A3);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50px;
          z-index: -1;
        }
        
        .professional-tab:hover::before,
        .professional-tab.active::before {
          width: 100%;
        }
        
        .professional-tab:hover,
        .professional-tab.active {
          color: white;
          transform: translateY(-1px);
        }
        
        .professional-tab.active {
          box-shadow: 0 4px 15px rgba(157, 107, 123, 0.3);
        }
        
        /* Professional Content Display */
        .professional-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        /* Main Image with Premium Frame */
        .professional-image-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 2px 40px rgba(0, 0, 0, 0.08),
            0 10px 60px rgba(0, 0, 0, 0.06);
          background: white;
          padding: 0.5rem;
          animation: elegantFadeIn 1s ease-out;
        }
        
        .professional-image-frame::before {
          content: '';
          position: absolute;
          inset: 0.5rem;
          border: 1px solid rgba(157, 107, 123, 0.1);
          border-radius: 16px;
          pointer-events: none;
          z-index: 1;
        }
        
        .professional-main-image {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          height: 600px;
        }
        
        .professional-main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .professional-image-frame:hover .professional-main-image img {
          transform: scale(1.05);
        }
        
        /* Image Navigation Dots */
        .professional-dots {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          z-index: 10;
        }
        
        .professional-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(157, 107, 123, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .professional-dot.active {
          width: 24px;
          border-radius: 4px;
          background: #9D6B7B;
        }
        
        /* Subtle Arrow Controls */
        .professional-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(157, 107, 123, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          z-index: 10;
          font-size: 20px;
          color: #9D6B7B;
        }
        
        .professional-image-frame:hover .professional-arrow {
          opacity: 1;
        }
        
        .professional-arrow:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .professional-arrow.prev { left: 1rem; }
        .professional-arrow.next { right: 1rem; }
        
        /* Content Area */
        .professional-content {
          animation: elegantFadeIn 1.2s ease-out;
        }
        
        .professional-content-header {
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(157, 107, 123, 0.1);
        }
        
        .venue-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 400;
          color: #9D6B7B;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          opacity: 0.7;
        }
        
        .venue-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          color: #2C2416;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        
        .venue-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #6B4E3D;
          font-weight: 300;
          letter-spacing: 0.01em;
        }
        
        /* Feature Cards with Icons */
        .professional-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .professional-feature {
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(157, 107, 123, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .professional-feature::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #9D6B7B, #B899A3);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        
        .professional-feature:hover::before {
          transform: scaleX(1);
        }
        
        .professional-feature:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        
        .feature-icon {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          filter: grayscale(0.3);
          transition: filter 0.3s ease;
        }
        
        .professional-feature:hover .feature-icon {
          filter: grayscale(0);
        }
        
        .feature-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #9D6B7B;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
          opacity: 0.7;
        }
        
        .feature-value {
          font-size: 1rem;
          color: #2C2416;
          font-weight: 400;
        }
        
        /* Sophisticated Thumbnail Gallery */
        .professional-thumbnails {
          margin-top: 3rem;
        }
        
        .thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        
        .professional-thumbnail {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 2px solid transparent;
          background: white;
          padding: 0.25rem;
        }
        
        .professional-thumbnail::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(157, 107, 123, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        
        .professional-thumbnail:hover::before {
          opacity: 1;
        }
        
        .professional-thumbnail.active {
          border-color: #9D6B7B;
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(157, 107, 123, 0.2);
        }
        
        .professional-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          transition: transform 0.4s ease;
        }
        
        .professional-thumbnail:hover img {
          transform: scale(1.1);
        }
        
        /* Elegant Expand Button */
        .professional-expand-section {
          margin-top: 3rem;
          text-align: center;
        }
        
        .professional-expand-btn {
          background: white;
          border: 1px solid rgba(157, 107, 123, 0.2);
          color: #6B4E3D;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .professional-expand-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(157, 107, 123, 0.1), rgba(157, 107, 123, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .professional-expand-btn:hover::after {
          opacity: 1;
        }
        
        .professional-expand-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: #9D6B7B;
          color: #9D6B7B;
        }
        
        .expand-icon {
          transition: transform 0.3s ease;
          font-size: 1rem;
        }
        
        .professional-expand-btn:hover .expand-icon {
          transform: translateY(2px);
        }
        
        /* Professional Expanded Gallery */
        .professional-expanded-gallery {
          margin-top: 3rem;
          height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .professional-expanded-gallery.expanded {
          height: auto;
          opacity: 1;
          margin-bottom: 3rem;
        }
        
        .professional-masonry {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          padding: 2rem 0;
        }
        
        .professional-masonry-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: white;
          padding: 0.375rem;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: professionalFadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes professionalFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(30px);
          }
        }
        
        .professional-masonry-item:nth-child(1) { animation-delay: 0.1s; grid-column: span 2; grid-row: span 2; }
        .professional-masonry-item:nth-child(2) { animation-delay: 0.15s; }
        .professional-masonry-item:nth-child(3) { animation-delay: 0.2s; }
        .professional-masonry-item:nth-child(4) { animation-delay: 0.25s; grid-column: span 2; }
        .professional-masonry-item:nth-child(5) { animation-delay: 0.3s; grid-row: span 2; }
        .professional-masonry-item:nth-child(6) { animation-delay: 0.35s; }
        .professional-masonry-item:nth-child(7) { animation-delay: 0.4s; grid-column: span 2; }
        .professional-masonry-item:nth-child(8) { animation-delay: 0.45s; }
        .professional-masonry-item:nth-child(9) { animation-delay: 0.5s; grid-row: span 2; }
        
        .professional-masonry-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .professional-masonry-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          z-index: 10;
        }
        
        .professional-masonry-item:hover img {
          transform: scale(1.08);
        }
        
        /* Subtle Overlay */
        .professional-masonry-item::after {
          content: '';
          position: absolute;
          inset: 0.375rem;
          background: linear-gradient(
            to bottom,
            transparent 60%,
            rgba(0, 0, 0, 0.03) 100%
          );
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .professional-masonry-item:hover::after {
          opacity: 1;
        }
        
        /* Mobile Responsive with Grace */
        @media (max-width: 1024px) {
          .professional-display {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          .professional-header .main-title {
            font-size: 3rem;
          }
          
          .venue-title {
            font-size: 2.5rem;
          }
          
          .professional-features {
            grid-template-columns: 1fr;
          }
          
          .professional-tabs {
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          
          .professional-tab {
            padding: 0.75rem 1.5rem;
            font-size: 0.8rem;
          }
          
          .professional-masonry {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .professional-main-image {
            height: 400px;
          }
          
          .professional-masonry-item:nth-child(1) { grid-column: span 1; grid-row: span 1; }
          .professional-masonry-item:nth-child(4) { grid-column: span 1; }
          .professional-masonry-item:nth-child(5) { grid-row: span 1; }
          .professional-masonry-item:nth-child(7) { grid-column: span 1; }
          .professional-masonry-item:nth-child(9) { grid-row: span 1; }
        }
      `}</style>

      {/* Professional Spaces Section */}
      <section className="professional-spaces-section">
        <div className="professional-header">
          <div className="elegant-subtitle">Exquisite Venues</div>
          <h1 className="main-title">Our Distinguished Spaces</h1>
          <p className="tagline">Where elegance meets celebration</p>
        </div>

        {/* Tab Navigation */}
        <div className="professional-tabs">
          {Object.keys(venueData).map(key => (
            <button
              key={key}
              className={`professional-tab ${activeVenue === key ? 'active' : ''}`}
              onClick={() => handleVenueChange(key)}
            >
              {venueData[key].title}
            </button>
          ))}
        </div>

        {/* Main Content Display */}
        <div className="professional-display">
          {/* Image Section */}
          <div className="professional-image-frame">
            <div className="professional-main-image">
              <img 
                src={venueData[activeVenue].images[currentImageIndex]}
                alt={venueData[activeVenue].title}
              />
            </div>
            
            {/* Navigation */}
            <button 
              className="professional-arrow prev"
              onClick={prevImage}
              aria-label="Previous"
            >
              ‹
            </button>
            <button 
              className="professional-arrow next"
              onClick={nextImage}
              aria-label="Next"
            >
              ›
            </button>
            
            {/* Dots */}
            <div className="professional-dots">
              {venueData[activeVenue].images.map((_, index) => (
                <button
                  key={index}
                  className={`professional-dot ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="professional-content">
            <div className="professional-content-header">
              <div className="venue-subtitle">{venueData[activeVenue].subtitle}</div>
              <h2 className="venue-title">{venueData[activeVenue].title}</h2>
              <p className="venue-description">{venueData[activeVenue].description}</p>
            </div>

            {/* Features Grid */}
            <div className="professional-features">
              {venueData[activeVenue].features.map((feature, index) => (
                <div 
                  key={index} 
                  className="professional-feature"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    background: hoveredFeature === index ? venueData[activeVenue].accentColor : 'white'
                  }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-label">{feature.label}</div>
                  <div className="feature-value">{feature.value}</div>
                </div>
              ))}
            </div>

            {/* Thumbnail Gallery */}
            <div className="professional-thumbnails">
              <div className="thumbnail-grid">
                {venueData[activeVenue].images.map((image, index) => (
                  <div
                    key={index}
                    className={`professional-thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img src={image} alt={`View ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Expand Button */}
            <div className="professional-expand-section">
              <button 
                className="professional-expand-btn"
                onClick={() => toggleExpandedGallery(activeVenue)}
              >
                <span>
                  {expandedGalleries[activeVenue] ? 'Hide' : 'View'} Extended Gallery
                </span>
                <span className="expand-icon">
                  {expandedGalleries[activeVenue] ? '↑' : '↓'}
                </span>
              </button>
            </div>

            {/* Expanded Gallery */}
            <div className={`professional-expanded-gallery ${expandedGalleries[activeVenue] ? 'expanded' : ''}`}>
              <div className="professional-masonry">
                {/* First 3 venue images */}
                {venueData[activeVenue].images.map((image, index) => (
                  <div 
                    key={`venue-${index}`}
                    className="professional-masonry-item"
                  >
                    <img src={image} alt={`${venueData[activeVenue].title} ${index + 1}`} />
                  </div>
                ))}
                {/* Additional expanded images */}
                {venueData[activeVenue].expandedImages?.slice(0, 12).map((image, index) => (
                  <div 
                    key={`expanded-${index}`}
                    className="professional-masonry-item"
                  >
                    <img 
                      src={image} 
                      alt={`${venueData[activeVenue].title} gallery ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}