import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

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

  const getInputClassName = () => {
    let className = 'input-base';
    if (error) className += ' input-error';
    if (disabled) className += ' input-disabled';
    return className;
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

  const inputStyles = {
    paddingRight: icon ? '2.5rem' : undefined,
    ...style
  };

  return (
    <div className="input-wrapper">
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
          className={getInputClassName()}
          style={inputStyles}
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
        <p id={`${id}-error`} className="input-error-message" role="alert">
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