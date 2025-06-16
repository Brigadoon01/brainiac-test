import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ 
  id, 
  checked, 
  onChange, 
  error, 
  disabled = false,
  style = {},
  ...rest 
}) => {
  const handleChange = (e) => {
    if (onChange && !disabled) {
      onChange(e.target.checked);
    }
  };

  const wrapperStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    ...style
  };

  const checkboxStyles = {
    marginTop: '0.125rem',
    height: '1rem',
    width: '1rem',
    color: '#2563eb',
    border: error ? '1px solid #ef4444' : '1px solid #d1d5db',
    borderRadius: '0.25rem',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    boxShadow: 'none',
    transition: 'all 0.2s'
  };

  return (
    <div style={wrapperStyles}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        style={checkboxStyles}
        onFocus={(e) => {
          if (!disabled) {
            e.target.style.boxShadow = error ? '0 0 0 2px rgba(239, 68, 68, 0.2)' : '0 0 0 2px rgba(37, 99, 235, 0.2)';
          }
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = 'none';
        }}
        aria-invalid={!!error}
        {...rest}
      />
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

export default Checkbox;