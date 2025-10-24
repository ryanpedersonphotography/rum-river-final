import React, { useState, useEffect, useRef } from 'react';

/**
 * SpacesGalleryShowcase Component
 * 
 * A comprehensive showcase of 4 different gallery variants:
 * 1. Original Dramatic - Wild morphing animations with bounce physics
 * 2. Professional Sophisticated - Elegant with refined transitions
 * 3. Magazine Editorial - Creative split-screen layout
 * 4. Ultimate Hybrid - Best elements from all variants combined
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
      '/images/2014/04/Kliewer-6227075.jpg'
    ],
    description: 'Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests', icon: '👥' },
      { label: 'Built', value: '1920s architecture', icon: '🏛️' },
      { label: 'Features', value: 'Climate controlled', icon: '🌡️' },
      { label: 'Style', value: 'Rustic elegance', icon: '✨' }
    ]
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
      '/images/2014/05/LB1_64311.jpg'
    ],
    description: 'A luxurious private space for the bride and bridal party to prepare for the big day, featuring elegant furnishings and ample natural light.',
    features: [
      { label: 'Capacity', value: 'Up to 8 people', icon: '👗' },
      { label: 'Amenities', value: 'Full mirror, seating', icon: '💄' },
      { label: 'Natural Light', value: 'Large windows', icon: '☀️' },
      { label: 'Privacy', value: 'Separate entrance', icon: '🚪' }
    ]
  }
};

export default function SpacesGalleryShowcase() {
  const [activeVariant, setActiveVariant] = useState(1);
  const [activeVenues, setActiveVenues] = useState({
    variant1: 'barn',
    variant2: 'barn',
    variant3: 'barn',
    variant4: 'barn'
  });
  const [currentImages, setCurrentImages] = useState({
    variant1: 0,
    variant2: 0,
    variant3: 0,
    variant4: 0
  });
  const [expandedGalleries, setExpandedGalleries] = useState({});
  const [hoveredPanel, setHoveredPanel] = useState(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [autoPlayActive, setAutoPlayActive] = useState(true);

  // Auto-play for certain variants
  useEffect(() => {
    if (!autoPlayActive) return;
    
    const interval = setInterval(() => {
      if (activeVariant === 3 || activeVariant === 4) {
        const variantKey = `variant${activeVariant}`;
        setCurrentImages(prev => ({
          ...prev,
          [variantKey]: (prev[variantKey] + 1) % 3
        }));
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeVariant, autoPlayActive]);

  // Handle parallax mouse movement for variant 4
  const handleMouseMove = (e) => {
    if (activeVariant !== 4) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 20;
    const y = (clientY / height - 0.5) * 20;
    setParallaxOffset({ x, y });
  };

  const handleVenueChange = (variant, venue) => {
    setActiveVenues(prev => ({
      ...prev,
      [`variant${variant}`]: venue
    }));
    setCurrentImages(prev => ({
      ...prev,
      [`variant${variant}`]: 0
    }));
  };

  const toggleExpandedGallery = (variant, venue) => {
    const key = `variant${variant}-${venue}`;
    setExpandedGalleries(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      background: 'linear-gradient(180deg, #FEFDFB 0%, #FBF8F4 25%, #FEFDFB 50%, #FBF8F4 75%, #FEFDFB 100%)',
      minHeight: '100vh'
    }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        
        /* Showcase Header */
        .showcase-header {
          text-align: center;
          padding: 80px 20px 60px;
          background: linear-gradient(135deg, rgba(157, 107, 123, 0.05), transparent);
        }
        
        .showcase-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          color: #2C2416;
          margin-bottom: 1rem;
          font-weight: 400;
        }
        
        .showcase-subtitle {
          font-size: 1.25rem;
          color: #6B4E3D;
          margin-bottom: 3rem;
          opacity: 0.8;
        }
        
        /* Variant Selector Tabs */
        .variant-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        
        .variant-tab {
          padding: 1rem 2rem;
          background: white;
          border: 2px solid #9D6B7B;
          border-radius: 50px;
          color: #9D6B7B;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .variant-tab.active {
          background: #9D6B7B;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(157, 107, 123, 0.25);
        }
        
        .variant-number {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          font-size: 0.875rem;
          line-height: 24px;
          text-align: center;
          margin-right: 0.5rem;
        }
        
        /* ============================================
           VARIANT 1: ORIGINAL DRAMATIC
           ============================================ */
        
        .variant1-container {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .variant1-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .variant1-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        .variant1-tab {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid #9D6B7B;
          color: #9D6B7B;
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .variant1-tab::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        
        .variant1-tab:hover::before {
          transform: translateX(100%);
        }
        
        .variant1-tab.active {
          background: #9D6B7B;
          color: white;
        }
        
        .variant1-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .variant1-image-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          cursor: pointer;
        }
        
        .variant1-image-container img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .variant1-image-container:hover img {
          transform: scale(1.05);
        }
        
        .variant1-thumbnails {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .variant1-thumbnail {
          aspect-ratio: 16/10;
          border-radius: 8px;
          overflow: hidden;
          border: 3px solid transparent;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
        
        .variant1-thumbnail.morphing {
          opacity: 0;
          transform: scale(0.8) translateY(20px);
        }
        
        .variant1-thumbnail.active {
          border-color: #9D6B7B;
          transform: translateY(-4px) scale(1.02);
        }
        
        .variant1-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .variant1-expand-btn {
          background: linear-gradient(135deg, rgba(157, 107, 123, 0.05), transparent);
          border: 2px solid #9D6B7B;
          color: #9D6B7B;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          margin-top: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .variant1-expand-btn::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #9D6B7B, #C899A3, #9D6B7B);
          border-radius: 50px;
          opacity: 0;
          z-index: -1;
          animation: shimmerGradient 3s linear infinite;
        }
        
        @keyframes shimmerGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        .variant1-expand-btn:hover::before {
          opacity: 0.2;
        }
        
        .variant1-expand-btn:hover {
          background: #9D6B7B;
          color: white;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 30px rgba(157, 107, 123, 0.3);
        }
        
        .variant1-expanded {
          margin-top: 2rem;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .variant1-expanded.show {
          max-height: 2000px;
          opacity: 1;
        }
        
        .variant1-masonry {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          padding: 2rem 0;
        }
        
        .variant1-masonry-item {
          border-radius: 12px;
          overflow: hidden;
          background: #f8f8f8;
          cursor: pointer;
          animation: morphExpand 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @keyframes morphExpand {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(-100px) rotate(-10deg);
          }
          40% {
            opacity: 0.5;
            transform: scale(0.6) translateY(-50px) rotate(-5deg);
          }
          70% {
            opacity: 0.9;
            transform: scale(1.1) translateY(10px) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0) rotate(0deg);
          }
        }
        
        .variant1-masonry-item:nth-child(1) { 
          grid-column: span 2; 
          grid-row: span 2;
          animation-delay: 0s;
        }
        
        .variant1-masonry-item:nth-child(odd) { animation-delay: 0.1s; }
        .variant1-masonry-item:nth-child(even) { animation-delay: 0.2s; }
        
        .variant1-masonry-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .variant1-masonry-item:hover img {
          transform: scale(1.1);
        }
        
        /* ============================================
           VARIANT 2: PROFESSIONAL SOPHISTICATED
           ============================================ */
        
        .variant2-container {
          padding: 60px 20px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .variant2-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .variant2-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 300;
          color: #9D6B7B;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }
        
        .variant2-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 300;
          color: #2C2416;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .variant2-tabs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 60px;
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }
        
        .variant2-tab {
          padding: 0.875rem 2rem;
          background: transparent;
          border: none;
          color: #6B4E3D;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .variant2-tab.active {
          background: linear-gradient(90deg, #9D6B7B, #B899A3);
          color: white;
        }
        
        .variant2-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
        }
        
        .variant2-image-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 40px rgba(0, 0, 0, 0.08);
          background: white;
          padding: 0.5rem;
        }
        
        .variant2-main-image {
          border-radius: 16px;
          overflow: hidden;
          height: 500px;
        }
        
        .variant2-main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .variant2-dots {
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
        }
        
        .variant2-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(157, 107, 123, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .variant2-dot.active {
          width: 24px;
          border-radius: 4px;
          background: #9D6B7B;
        }
        
        .variant2-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .variant2-feature {
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(157, 107, 123, 0.08);
          transition: all 0.3s ease;
        }
        
        .variant2-feature:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        
        /* ============================================
           VARIANT 3: MAGAZINE EDITORIAL
           ============================================ */
        
        .variant3-container {
          padding: 60px 20px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .variant3-header {
          margin-bottom: 3rem;
        }
        
        .variant3-editorial-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9D6B7B;
          margin-bottom: 1rem;
        }
        
        .variant3-headline {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 700;
          color: #2C2416;
          line-height: 0.9;
          margin-bottom: 1rem;
        }
        
        .variant3-lead {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #6B4E3D;
          font-style: italic;
          max-width: 600px;
        }
        
        .variant3-tabs {
          display: flex;
          gap: 2px;
          margin-bottom: 3rem;
          border-bottom: 2px solid #2C2416;
        }
        
        .variant3-tab {
          padding: 1rem 2rem;
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .variant3-tab.active {
          border-bottom-color: #9D6B7B;
          color: #9D6B7B;
        }
        
        .variant3-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .variant3-main-feature {
          position: relative;
          border-radius: 0;
          overflow: hidden;
          height: 600px;
          background: #1a1a1a;
        }
        
        .variant3-main-feature img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 8s ease-in-out;
        }
        
        .variant3-main-feature:hover img {
          transform: scale(1.1);
        }
        
        .variant3-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 3rem 2rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
        }
        
        .variant3-overlay-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }
        
        .variant3-overlay-subtitle {
          font-size: 1rem;
          opacity: 0.8;
          letter-spacing: 0.05em;
        }
        
        .variant3-side-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .variant3-side-image {
          position: relative;
          height: 290px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .variant3-side-image.active {
          border-color: #9D6B7B;
        }
        
        .variant3-side-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .variant3-side-image:hover img {
          transform: scale(1.05);
        }
        
        .variant3-side-number {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: white;
          color: #2C2416;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.25rem;
        }
        
        .variant3-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }
        
        .variant3-column {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.125rem;
          line-height: 1.8;
          color: #2C2416;
        }
        
        .variant3-dropcap {
          float: left;
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          line-height: 0.8;
          margin-right: 0.5rem;
          margin-top: 0.25rem;
          font-weight: 700;
          color: #9D6B7B;
        }
        
        /* ============================================
           VARIANT 4: ULTIMATE HYBRID
           ============================================ */
        
        .variant4-container {
          padding: 60px 20px;
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
        }
        
        .variant4-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }
        
        .variant4-title {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #9D6B7B, #6B4E3D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }
        
        .variant4-subtitle {
          font-family: 'Dancing Script', cursive;
          font-size: 2rem;
          color: #9D6B7B;
          opacity: 0.7;
        }
        
        .variant4-tabs {
          display: flex;
          justify-content: center;
          gap: 0;
          margin-bottom: 4rem;
          position: relative;
        }
        
        .variant4-tabs::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #9D6B7B, transparent);
        }
        
        .variant4-tab {
          padding: 1rem 2.5rem;
          background: transparent;
          border: none;
          color: #6B4E3D;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          transition: all 0.4s ease;
        }
        
        .variant4-tab::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 100%;
          height: 3px;
          background: #9D6B7B;
          transition: transform 0.4s ease;
        }
        
        .variant4-tab.active::after,
        .variant4-tab:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
        
        .variant4-tab.active {
          color: #9D6B7B;
        }
        
        .variant4-showcase {
          position: relative;
          margin-bottom: 4rem;
        }
        
        .variant4-parallax-container {
          position: relative;
          height: 700px;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .variant4-layer {
          position: absolute;
          inset: 0;
          transition: transform 0.3s ease-out;
        }
        
        .variant4-layer-bg {
          z-index: 1;
          opacity: 0.3;
          filter: blur(8px);
          transform: scale(1.1);
        }
        
        .variant4-layer-mid {
          z-index: 2;
          opacity: 0.5;
          filter: blur(2px);
          transform: scale(1.05);
        }
        
        .variant4-layer-front {
          z-index: 3;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }
        
        .variant4-layer img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .variant4-split-panels {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          z-index: 4;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .variant4-showcase:hover .variant4-split-panels {
          opacity: 1;
        }
        
        .variant4-panel {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .variant4-panel-text {
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        .variant4-timeline {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 60px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .variant4-timeline-track {
          width: 200px;
          height: 4px;
          background: rgba(157, 107, 123, 0.2);
          border-radius: 2px;
          position: relative;
          cursor: pointer;
        }
        
        .variant4-timeline-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: #9D6B7B;
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        
        .variant4-timeline-handle {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          background: white;
          border: 3px solid #9D6B7B;
          border-radius: 50%;
          cursor: grab;
          transition: transform 0.3s ease;
        }
        
        .variant4-timeline-handle:active {
          cursor: grabbing;
          transform: translate(-50%, -50%) scale(1.2);
        }
        
        .variant4-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }
        
        .variant4-feature-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(157, 107, 123, 0.1);
        }
        
        .variant4-feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #9D6B7B, #B899A3);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        
        .variant4-feature-card:hover::before {
          transform: scaleX(1);
        }
        
        .variant4-feature-card:hover {
          transform: translateY(-8px) rotate(-1deg);
          box-shadow: 0 20px 40px rgba(157, 107, 123, 0.2);
        }
        
        .variant4-icon-float {
          font-size: 2rem;
          animation: floatIcon 3s ease-in-out infinite;
        }
        
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .variant4-mosaic-preview {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
          margin-top: 3rem;
          position: relative;
        }
        
        .variant4-mosaic-tile {
          aspect-ratio: 1;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .variant4-mosaic-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .variant4-mosaic-tile:hover {
          z-index: 10;
          transform: scale(1.5) rotate(0deg);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .variant4-mosaic-tile:hover img {
          transform: scale(1.1);
        }
        
        .variant4-expand-area {
          margin-top: 3rem;
          padding: 3rem;
          background: linear-gradient(135deg, rgba(157, 107, 123, 0.05), transparent);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
        }
        
        .variant4-expand-area::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(157, 107, 123, 0.1), transparent);
          animation: pulseGlow 4s ease-in-out infinite;
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .showcase-title {
            font-size: 2.5rem;
          }
          
          .variant-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .variant1-display,
          .variant2-display {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .variant3-layout {
            grid-template-columns: 1fr;
          }
          
          .variant3-content {
            grid-template-columns: 1fr;
          }
          
          .variant4-title {
            font-size: 3rem;
          }
          
          .variant4-content-grid {
            grid-template-columns: 1fr;
          }
          
          .variant4-mosaic-preview {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      {/* Main Header */}
      <div className="showcase-header">
        <h1 className="showcase-title">Gallery Showcase Collection</h1>
        <p className="showcase-subtitle">Four unique approaches to showcasing your venue spaces</p>
        
        {/* Variant Selector */}
        <div className="variant-tabs">
          <button
            className={`variant-tab ${activeVariant === 1 ? 'active' : ''}`}
            onClick={() => setActiveVariant(1)}
          >
            <span className="variant-number">1</span>
            Dramatic Original
          </button>
          <button
            className={`variant-tab ${activeVariant === 2 ? 'active' : ''}`}
            onClick={() => setActiveVariant(2)}
          >
            <span className="variant-number">2</span>
            Professional Sophisticated
          </button>
          <button
            className={`variant-tab ${activeVariant === 3 ? 'active' : ''}`}
            onClick={() => setActiveVariant(3)}
          >
            <span className="variant-number">3</span>
            Magazine Editorial
          </button>
          <button
            className={`variant-tab ${activeVariant === 4 ? 'active' : ''}`}
            onClick={() => setActiveVariant(4)}
          >
            <span className="variant-number">4</span>
            Ultimate Hybrid
          </button>
        </div>
      </div>

      {/* VARIANT 1: Original Dramatic */}
      {activeVariant === 1 && (
        <div className="variant1-container">
          <div className="variant1-header">
            <div style={{ fontFamily: 'Dancing Script', fontSize: '1.75rem', color: '#9D6B7B', marginBottom: '1rem' }}>
              Your Perfect Setting
            </div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '3rem', color: '#6B4E3D', marginBottom: '1rem' }}>
              Discover Our Spaces
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#2C2416', opacity: 0.9 }}>
              Every corner tells a story, every space creates memories
            </p>
          </div>

          <div className="variant1-tabs">
            {Object.keys(venueData).map(key => (
              <button
                key={key}
                className={`variant1-tab ${activeVenues.variant1 === key ? 'active' : ''}`}
                onClick={() => handleVenueChange(1, key)}
              >
                {venueData[key].title}
              </button>
            ))}
          </div>

          <div className="variant1-display">
            <div className="variant1-image-container">
              <img 
                src={venueData[activeVenues.variant1].images[currentImages.variant1]}
                alt={venueData[activeVenues.variant1].title}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display', color: '#2C2416', marginBottom: '1.5rem' }}>
                {venueData[activeVenues.variant1].title}
              </h3>
              <p style={{ fontSize: '1.125rem', color: '#6B4E3D', lineHeight: 1.8, marginBottom: '2rem' }}>
                {venueData[activeVenues.variant1].description}
              </p>

              <div className="variant1-thumbnails">
                {venueData[activeVenues.variant1].images.map((image, index) => (
                  <div
                    key={index}
                    className={`variant1-thumbnail ${currentImages.variant1 === index ? 'active' : ''} ${expandedGalleries[`variant1-${activeVenues.variant1}`] ? 'morphing' : ''}`}
                    onClick={() => setCurrentImages(prev => ({ ...prev, variant1: index }))}
                  >
                    <img src={image} alt={`View ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button 
                className="variant1-expand-btn"
                onClick={() => toggleExpandedGallery(1, activeVenues.variant1)}
              >
                {expandedGalleries[`variant1-${activeVenues.variant1}`] ? 'Hide' : 'View'} Extended Gallery
              </button>

              <div className={`variant1-expanded ${expandedGalleries[`variant1-${activeVenues.variant1}`] ? 'show' : ''}`}>
                <div className="variant1-masonry">
                  {venueData[activeVenues.variant1].expandedImages?.map((image, index) => (
                    <div key={index} className="variant1-masonry-item">
                      <img src={image} alt={`Gallery ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VARIANT 2: Professional Sophisticated */}
      {activeVariant === 2 && (
        <div className="variant2-container">
          <div className="variant2-header">
            <div className="variant2-subtitle">Exquisite Venues</div>
            <h2 className="variant2-title">Our Distinguished Spaces</h2>
          </div>

          <div className="variant2-tabs">
            {Object.keys(venueData).map(key => (
              <button
                key={key}
                className={`variant2-tab ${activeVenues.variant2 === key ? 'active' : ''}`}
                onClick={() => handleVenueChange(2, key)}
              >
                {venueData[key].title}
              </button>
            ))}
          </div>

          <div className="variant2-display">
            <div className="variant2-image-frame">
              <div className="variant2-main-image">
                <img 
                  src={venueData[activeVenues.variant2].images[currentImages.variant2]}
                  alt={venueData[activeVenues.variant2].title}
                />
              </div>
              <div className="variant2-dots">
                {venueData[activeVenues.variant2].images.map((_, index) => (
                  <button
                    key={index}
                    className={`variant2-dot ${currentImages.variant2 === index ? 'active' : ''}`}
                    onClick={() => setCurrentImages(prev => ({ ...prev, variant2: index }))}
                  />
                ))}
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(157, 107, 123, 0.1)' }}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '1rem', color: '#9D6B7B', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {venueData[activeVenues.variant2].subtitle}
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '3rem', fontWeight: 300, color: '#2C2416', marginBottom: '1.5rem' }}>
                  {venueData[activeVenues.variant2].title}
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#6B4E3D', fontWeight: 300 }}>
                  {venueData[activeVenues.variant2].description}
                </p>
              </div>

              <div className="variant2-features">
                {venueData[activeVenues.variant2].features.map((feature, index) => (
                  <div key={index} className="variant2-feature">
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9D6B7B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                      {feature.label}
                    </div>
                    <div style={{ fontSize: '1rem', color: '#2C2416' }}>{feature.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VARIANT 3: Magazine Editorial */}
      {activeVariant === 3 && (
        <div className="variant3-container">
          <div className="variant3-header">
            <div className="variant3-editorial-tag">Exclusive Feature</div>
            <h2 className="variant3-headline">
              VENUE<br />
              SPACES
            </h2>
            <p className="variant3-lead">
              An intimate look at the stunning locations that set the stage for your celebration
            </p>
          </div>

          <div className="variant3-tabs">
            {Object.keys(venueData).map(key => (
              <button
                key={key}
                className={`variant3-tab ${activeVenues.variant3 === key ? 'active' : ''}`}
                onClick={() => handleVenueChange(3, key)}
              >
                {venueData[key].title}
              </button>
            ))}
          </div>

          <div className="variant3-layout">
            <div className="variant3-main-feature">
              <img 
                src={venueData[activeVenues.variant3].images[currentImages.variant3]}
                alt={venueData[activeVenues.variant3].title}
              />
              <div className="variant3-overlay">
                <h3 className="variant3-overlay-title">{venueData[activeVenues.variant3].title}</h3>
                <p className="variant3-overlay-subtitle">{venueData[activeVenues.variant3].subtitle}</p>
              </div>
            </div>

            <div className="variant3-side-stack">
              {venueData[activeVenues.variant3].images.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className={`variant3-side-image ${currentImages.variant3 === index ? 'active' : ''}`}
                  onClick={() => setCurrentImages(prev => ({ ...prev, variant3: index }))}
                >
                  <img src={image} alt={`View ${index + 1}`} />
                  <div className="variant3-side-number">{index + 1}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="variant3-content">
            <div className="variant3-column">
              <span className="variant3-dropcap">O</span>
              ur {venueData[activeVenues.variant3].title.toLowerCase()} represents more than just a venue—it's a canvas 
              for your dreams. {venueData[activeVenues.variant3].description.slice(0, 150)}...
            </div>
            <div className="variant3-column">
              {venueData[activeVenues.variant3].description.slice(150)}
            </div>
            <div className="variant3-column">
              <strong>Features & Amenities:</strong><br />
              {venueData[activeVenues.variant3].features.map((f, i) => (
                <div key={i} style={{ marginTop: '0.5rem' }}>
                  • {f.label}: {f.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VARIANT 4: Ultimate Hybrid */}
      {activeVariant === 4 && (
        <div className="variant4-container" onMouseMove={handleMouseMove}>
          <div className="variant4-header">
            <h2 className="variant4-title">The Ultimate Experience</h2>
            <p className="variant4-subtitle">Where every element comes together</p>
          </div>

          <div className="variant4-tabs">
            {Object.keys(venueData).map(key => (
              <button
                key={key}
                className={`variant4-tab ${activeVenues.variant4 === key ? 'active' : ''}`}
                onClick={() => handleVenueChange(4, key)}
              >
                {venueData[key].title}
              </button>
            ))}
          </div>

          <div className="variant4-showcase">
            <div className="variant4-parallax-container">
              {/* Parallax Layers */}
              <div 
                className="variant4-layer variant4-layer-bg"
                style={{ transform: `translate(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px)` }}
              >
                <img src={venueData[activeVenues.variant4].images[2]} alt="Background" />
              </div>
              <div 
                className="variant4-layer variant4-layer-mid"
                style={{ transform: `translate(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px)` }}
              >
                <img src={venueData[activeVenues.variant4].images[1]} alt="Midground" />
              </div>
              <div 
                className="variant4-layer variant4-layer-front"
                style={{ transform: `translate(${parallaxOffset.x * 0.1}px, ${parallaxOffset.y * 0.1}px)` }}
              >
                <img src={venueData[activeVenues.variant4].images[currentImages.variant4]} alt="Foreground" />
              </div>

              {/* Split Panel Overlay */}
              <div className="variant4-split-panels">
                {venueData[activeVenues.variant4].images.map((_, index) => (
                  <div key={index} className="variant4-panel">
                    <div className="variant4-panel-text">View {index + 1}</div>
                  </div>
                ))}
              </div>

              {/* Timeline Scrubber */}
              <div className="variant4-timeline">
                <div className="variant4-timeline-track">
                  <div 
                    className="variant4-timeline-progress"
                    style={{ width: `${(currentImages.variant4 / 2) * 100}%` }}
                  />
                  <div 
                    className="variant4-timeline-handle"
                    style={{ left: `${(currentImages.variant4 / 2) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="variant4-content-grid">
            {venueData[activeVenues.variant4].features.map((feature, index) => (
              <div 
                key={index} 
                className="variant4-feature-card"
                onMouseEnter={() => setHoveredPanel(index)}
                onMouseLeave={() => setHoveredPanel(null)}
              >
                <div className="variant4-icon-float">{feature.icon}</div>
                <h4 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#2C2416', marginTop: '1rem', marginBottom: '0.5rem' }}>
                  {feature.label}
                </h4>
                <p style={{ color: '#6B4E3D' }}>{feature.value}</p>
              </div>
            ))}
          </div>

          <div className="variant4-mosaic-preview">
            {[...venueData[activeVenues.variant4].images, ...venueData[activeVenues.variant4].expandedImages.slice(0, 5)].map((image, index) => (
              <div
                key={index}
                className="variant4-mosaic-tile"
                style={{
                  gridColumn: index === 0 ? 'span 2' : 'span 1',
                  gridRow: index === 0 ? 'span 2' : 'span 1'
                }}
              >
                <img src={image} alt={`Mosaic ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="variant4-expand-area">
            <h3 style={{ 
              textAlign: 'center', 
              fontFamily: 'Playfair Display', 
              fontSize: '2.5rem', 
              color: '#2C2416',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              The Complete Collection
            </h3>
            <p style={{ 
              textAlign: 'center', 
              fontSize: '1.125rem', 
              color: '#6B4E3D',
              marginBottom: '2rem',
              position: 'relative',
              zIndex: 1
            }}>
              {venueData[activeVenues.variant4].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}