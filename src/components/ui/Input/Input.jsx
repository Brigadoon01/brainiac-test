import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ 
  id, 
  name,
  type = 'text', 
  placeholder, 
  required = false, 
  value, 
  onChange, 
  error,
  style = {},
  disabled = false,
  autoComplete,
  icon,
  'aria-describedby': ariaDescribedBy,
  ...rest
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  };

  const inputStyles = {
    width: '100%',
    padding: icon ? '0.5rem 2.5rem 0.5rem 0.75rem' : '0.5rem 0.75rem',
    border: error ? '1px solid #ef4444' : '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    backgroundColor: disabled ? '#f9fafb' : 'white',
    color: disabled ? '#6b7280' : '#000',
    cursor: disabled ? 'not-allowed' : 'text',
    outline: 'none',
    boxShadow: 'none',
    transition: 'all 0.2s',
    ...style
  };

  const inputContainerStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  };

  const iconStyles = {
    position: 'absolute',
    right: '0.75rem',
    color: '#6b7280',
    pointerEvents: 'none',
    fontSize: '1.25rem'
  };

  const errorMessageStyles = {
    color: '#ef4444',
    fontSize: '0.75rem',
    margin: 0
  };

  return (
    <div style={wrapperStyles}>
      <div style={inputContainerStyles}>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          autoComplete={autoComplete}
          style={inputStyles}
          onFocus={(e) => {
            if (!disabled) {
              e.target.style.borderColor = error ? '#ef4444' : '#2563eb';
              e.target.style.boxShadow = error ? '0 0 0 2px rgba(239, 68, 68, 0.2)' : '0 0 0 2px rgba(37, 99, 235, 0.2)';
            }
          }}
          onBlur={(e) => {
            e.target.style.borderColor = error ? '#ef4444' : '#d1d5db';
            e.target.style.boxShadow = 'none';
          }}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : ariaDescribedBy}
          {...rest}
        />
        {icon && (
          <div style={iconStyles}>
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} style={errorMessageStyles} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  icon: PropTypes.node,
  'aria-describedby': PropTypes.string,
};

export default Input;