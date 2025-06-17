import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineCalendarDays } from 'react-icons/hi2';

const DateInput = ({
  id,
  name,
  label,
  required = false,
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
  autoComplete,
  max,
  style = {},
  ...rest
}) => {
  
  const dateInputRef = useRef(null);

  const handleContainerClick = () => {
    if (!disabled && dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const handleDateChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const fieldStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    ...style
  };

  const labelStyles = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem'
  };

  const containerStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0.5rem 0.75rem',
    border: error ? '2px solid #ef4444' : '2px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    backgroundColor: disabled ? '#f9fafb' : 'white',
    color: disabled ? '#6b7280' : '#000',
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    transition: 'border-color 0.2s ease-in-out',
    height: '2.1rem'
  };

  const displayTextStyles = {
    flex: 1,
    color: value ? '#000' : '#9ca3af',
    fontSize: '0.875rem'
  };

  const iconStyles = {
    color: '#6b7280',
    fontSize: '1.25rem',
    marginLeft: '0.5rem'
  };

  const hiddenInputStyles = {
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    height: '100%'
  };

  const errorMessageStyles = {
    color: '#ef4444',
    fontSize: '0.75rem',
    margin: 0
  };

  return (
    <div style={fieldStyles}>
      <label htmlFor={id} style={labelStyles}>
        {label}
        {required && <span style={{ color: '#ef4444', marginLeft: '0.25rem' }}>*</span>}
      </label>
      
      <div
        style={{
          ...containerStyles,
          ':focus': {
            borderColor: error ? '#ef4444' : '#3b82f6'
          }
        }}
        onClick={handleContainerClick}
        onFocus={(e) => {
          if (!disabled) {
            e.target.style.borderColor = error ? '#ef4444' : '#3b82f6';
          }
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? '#ef4444' : '#d1d5db';
          if (onBlur) {
            onBlur();
          }
        }}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-label={`Select ${label}`}
      >
        <span style={displayTextStyles}>
          {value ? formatDisplayDate(value) : ''}
        </span>
        <HiOutlineCalendarDays style={iconStyles} />
        
        <input
          ref={dateInputRef}
          id={id}
          name={name}
          type="date"
          required={required}
          value={value}
          onChange={handleDateChange}
          onBlur={() => {
            if (onBlur) {
              onBlur();
            }
          }}
          disabled={disabled}
          autoComplete={autoComplete}
          max={max}
          style={hiddenInputStyles}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
      </div>
      
      {error && (
        <p id={`${id}-error`} style={errorMessageStyles} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

DateInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  max: PropTypes.string,
  style: PropTypes.object,
};

export default DateInput;