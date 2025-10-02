import React from 'react';

/**
 * CarouselControls Component
 * Reusable carousel navigation with prev/next buttons and dots
 * Follows button system rules with carousel-nav and carousel-dot classes
 */
export const CarouselControls = ({ 
  totalItems,
  currentIndex, 
  onNext, 
  onPrev, 
  onDotClick,
  showDots = true,
  showArrows = true
}) => {
  return (
    <>
      {showArrows && (
        <>
          <button 
            className="carousel-nav prev" 
            onClick={onPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button 
            className="carousel-nav next" 
            onClick={onNext}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}
      
      {showDots && (
        <div className="carousel-dots">
          {Array.from({ length: totalItems }, (_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => onDotClick(index)}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CarouselControls;