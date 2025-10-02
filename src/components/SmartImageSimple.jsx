import { useState, useRef, useEffect } from 'react';

const SmartImageSimple = ({ src, alt, className, style, ...props }) => {
  const [isLowRes, setIsLowRes] = useState(false);
  const [dimensions, setDimensions] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const img = imgRef.current;
    
    const handleLoad = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      // Only upscale truly tiny thumbnails (like 316x237), not regular small images
      const isTinyThumbnail = (width <= 350 && height <= 350);
      
      setDimensions({ width, height });
      setIsLowRes(isTinyThumbnail);
      
      // Log ALL images for debugging
      console.log(`📸 IMAGE: ${src} (${width}x${height}) - Enhanced: ${isTinyThumbnail ? 'YES' : 'NO'}`);
    };

    img.addEventListener('load', handleLoad);
    return () => img.removeEventListener('load', handleLoad);
  }, [src]);

  const enhancedStyle = {
    ...style,
    ...(isLowRes && {
      // More aggressive enhancement for lightbox viewing
      filter: 'contrast(1.3) saturate(1.2) brightness(1.1) sharpen(1px)',
      // CSS upscaling with smoothing
      imageRendering: '-webkit-optimize-contrast',
      // More moderate scaling to avoid pixelated look
      transform: dimensions && dimensions.width < 400 ? 'scale(1.5)' : 'scale(1.2)', 
      transition: 'all 0.3s ease',
      // Visual indicator for enhanced images
      position: 'relative',
    })
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={enhancedStyle}
      {...props}
    />
  );
};

export default SmartImageSimple;