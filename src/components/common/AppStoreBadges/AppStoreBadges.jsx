import React from 'react';

const AppStoreBadges = () => {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '0.75rem', 
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      width: '100%',
      maxWidth: '43rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '1rem'
    }}>
      <a 
        href="https://play.google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ display: 'block' }}
      >
        <img 
          src="/assets/googlePlayBadge.png" 
          alt="Get it on Google Play" 
          style={{ 
            height: '2.25rem',
            width: 'auto',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        />
      </a>
      
      <a 
        href="https://apps.apple.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ display: 'block' }}
      >
        <img 
          src="/assets/appStoreBadge.png" 
          alt="Download on the App Store" 
          style={{ 
            height: '2.25rem',
            width: 'auto',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        />
      </a>
    </div>
  );
};

export default AppStoreBadges;