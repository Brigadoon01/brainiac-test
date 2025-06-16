import React from 'react';
import PropTypes from 'prop-types';

// Add keyframes for spinner animation
const spinKeyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Button = ({ 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  children, 
  onClick, 
  disabled = false,
  loading = false,
  style = {},
  ...rest
}) => {
  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  // Base styles
  const baseStyles = {
    fontWeight: '500',
    borderRadius: '0.375rem',
    transition: 'all 0.2s',
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    border: 'none',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.5 : 1,
    pointerEvents: disabled || loading ? 'none' : 'auto'
  };

  // Size styles
  const sizeStyles = {
    small: { padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
    medium: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    large: { padding: '0.75rem 1.5rem', fontSize: '1rem' }
  };

  // Variant styles
  const variantStyles = {
    primary: {
      backgroundColor: '#2563eb',
      color: 'white',
      ':hover': { backgroundColor: '#1d4ed8' },
      ':active': { backgroundColor: '#1e40af' }
    },
    secondary: {
      backgroundColor: '#4b5563',
      color: 'white',
      ':hover': { backgroundColor: '#374151' },
      ':active': { backgroundColor: '#1f2937' }
    },
    outline: {
      border: '1px solid #d1d5db',
      backgroundColor: 'white',
      color: '#374151',
      ':hover': { backgroundColor: '#f9fafb' }
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#374151',
      ':hover': { backgroundColor: '#f3f4f6' }
    }
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style
  };

  // Inject keyframes if not already present
  React.useEffect(() => {
    if (!document.querySelector('#button-spinner-keyframes')) {
      const style = document.createElement('style');
      style.id = 'button-spinner-keyframes';
      style.textContent = spinKeyframes;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      style={combinedStyles}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          if (variant === 'primary') e.target.style.backgroundColor = '#1d4ed8';
          if (variant === 'secondary') e.target.style.backgroundColor = '#374151';
          if (variant === 'outline') e.target.style.backgroundColor = '#f9fafb';
          if (variant === 'ghost') e.target.style.backgroundColor = '#f3f4f6';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          if (variant === 'primary') e.target.style.backgroundColor = '#2563eb';
          if (variant === 'secondary') e.target.style.backgroundColor = '#4b5563';
          if (variant === 'outline') e.target.style.backgroundColor = 'white';
          if (variant === 'ghost') e.target.style.backgroundColor = 'transparent';
        }
      }}
      {...rest}
    >
      {loading ? (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: '1rem',
            height: '1rem',
            border: '2px solid currentColor',
            borderTop: '2px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  style: PropTypes.object,
};

export default Button;