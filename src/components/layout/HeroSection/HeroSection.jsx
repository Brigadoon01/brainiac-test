import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ 
  title, 
  imageSrc, 
  imageAlt,
  indicators = 3,
  activeIndicator = 0 
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroStyles = {
    backgroundColor: '#2563eb',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    height: '100%',
    minHeight: '100vh'
  };

  const titleStyles = {
    fontSize: isMobile ? '1.5rem' : '1.875rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  };

  const imageContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  const circleStyles = {
    position: 'absolute',
    width: isMobile ? '400px' : '500px',
    height: isMobile ? '400px' : '500px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #0F70DA 0%, #007AFF 100%)',
    zIndex: 1
  };

  const imageStyles = {
    width: isMobile ? '280px' : '360px',
    height: 'auto',
    position: 'relative',
    zIndex: 2
  };

  const indicatorsStyles = {
    marginTop: '1rem',
    display: 'flex',
    gap: '0.5rem'
  };

  const indicatorStyles = {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    transition: 'all 0.2s',
    position: 'relative'
  };

  const activeIndicatorStyles = {
    ...indicatorStyles,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid white',
    position: 'relative'
  };

  const activeIndicatorCurveStyles = {
    position: 'absolute',
    top: '50%',
    left: '65%',
    transform: 'translateY(-50%)',
    width: '0.6rem',
    height: '1.1rem',
    borderRadius: '0 0.6rem 0.6rem 0',
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderLeft: 'none'
  };

  // Center indicator should be active (index 1 for 3 indicators)
  const centerIndex = Math.floor(indicators / 2);

  return (
    <div style={heroStyles}>
      <h1 style={titleStyles}>
        {title}
      </h1>
      
      <div style={imageContainerStyles}>
        <div style={circleStyles}></div>
        <img 
          src={imageSrc}
          alt={imageAlt}
          style={imageStyles}
          loading="lazy"
        />
      </div>
      
      {indicators > 0 && (
        <div style={indicatorsStyles} role="tablist" aria-label="Carousel indicators">
          {Array.from({ length: indicators }, (_, index) => (
            <span
              key={index}
              style={index === centerIndex ? activeIndicatorStyles : indicatorStyles}
              role="tab"
              aria-selected={index === centerIndex}
            >
              {index === centerIndex && (
                <span style={activeIndicatorCurveStyles}></span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  indicators: PropTypes.number,
  activeIndicator: PropTypes.number,
};

export default HeroSection;