import { useState, useRef, useEffect } from 'react';

const SmartImage = ({ src, alt, className, style, ...props }) => {
  const [isLowRes, setIsLowRes] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageStats, setImageStats] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const img = imgRef.current;
    
    const handleLoad = () => {
      // Define thresholds for low-res detection
      const LOW_RES_THRESHOLD = 500;
      const THUMBNAIL_THRESHOLD = 400;
      
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      const isSmall = width < LOW_RES_THRESHOLD || height < LOW_RES_THRESHOLD;
      const isThumbnail = width < THUMBNAIL_THRESHOLD && height < THUMBNAIL_THRESHOLD;
      
      setImageStats({ width, height, isThumbnail, isSmall });
      setIsLowRes(isSmall);
      setIsLoading(false);
      
      if (isSmall) {
        console.log(`📸 Low-res image detected: ${src} (${width}x${height})`);
        if (isThumbnail) {
          console.log(`🔍 Thumbnail detected - applying enhanced upscaling`);
        }
      }
    };

    const handleError = () => {
      setIsLoading(false);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  // Enhanced CSS filters for different image qualities
  const getEnhancementLevel = () => {
    if (!imageStats) return 'normal';
    
    const { width, height, isThumbnail } = imageStats;
    
    // Severe thumbnails (316x237 etc)
    if (width <= 350 && height <= 350) return 'severe';
    
    // Medium low-res (400-600px)
    if (width <= 600 && height <= 600) return 'medium';
    
    // Slightly low-res (600-800px)
    if (width <= 800 && height <= 800) return 'light';
    
    return 'normal';
  };

  const enhancementLevel = getEnhancementLevel();

  const getSmartStyle = () => {
    const baseStyle = { ...style };
    
    if (!isLowRes) return baseStyle;

    const enhancements = {
      severe: {
        filter: 'contrast(1.15) saturate(1.2) brightness(1.05) unsharp-mask(0.5px 1 0.4)',
        imageRendering: 'auto',
        transform: 'scale(1.02)', // Slight scale to trigger browser smoothing
      },
      medium: {
        filter: 'contrast(1.1) saturate(1.1) brightness(1.02)',
        imageRendering: 'auto',
      },
      light: {
        filter: 'contrast(1.05) saturate(1.05)',
        imageRendering: 'auto',
      }
    };

    return {
      ...baseStyle,
      ...enhancements[enhancementLevel],
      transition: 'all 0.3s ease',
    };
  };

  const smartClassName = `${className || ''} ${isLowRes ? `low-res-enhanced enhancement-${enhancementLevel}` : ''}`.trim();

  return (
    <>
      {/* Enhanced CSS for different enhancement levels */}
      <style>{`
        .enhancement-severe {
          /* Aggressive enhancement for severe thumbnails */
          image-rendering: -webkit-optimize-contrast;
          -webkit-filter: contrast(1.15) saturate(1.2) brightness(1.05);
          filter: contrast(1.15) saturate(1.2) brightness(1.05);
        }
        
        .enhancement-severe:hover {
          -webkit-filter: contrast(1.2) saturate(1.25) brightness(1.08);
          filter: contrast(1.2) saturate(1.25) brightness(1.08);
        }
        
        .enhancement-medium {
          /* Moderate enhancement for medium low-res */
          -webkit-filter: contrast(1.1) saturate(1.1) brightness(1.02);
          filter: contrast(1.1) saturate(1.1) brightness(1.02);
        }
        
        .enhancement-medium:hover {
          -webkit-filter: contrast(1.15) saturate(1.15) brightness(1.05);
          filter: contrast(1.15) saturate(1.15) brightness(1.05);
        }
        
        .enhancement-light {
          /* Light enhancement for slightly low-res */
          -webkit-filter: contrast(1.05) saturate(1.05);
          filter: contrast(1.05) saturate(1.05);
        }

        /* Visual indicator for enhanced images */
        .low-res-enhanced {
          position: relative;
        }
        
        .enhancement-severe::before {
          content: '🔍';
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 12px;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 2px 4px;
          border-radius: 2px;
          z-index: 10;
          opacity: 0.8;
        }
      `}</style>
      
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={smartClassName}
        style={getSmartStyle()}
        {...props}
      />
      
      {isLoading && (
        <div style={{ 
          width: '100px', 
          height: '100px', 
          background: '#f0f0f0',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.8rem',
          color: '#999'
        }}>
          Loading...
        </div>
      )}
    </>
  );
};

export default SmartImage;