import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from '../../ui';

const FormField = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
  disabled = false,
  autoComplete,
  icon,
  style = {},
  ...rest
}) => {
  const fieldStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    ...style
  };

  return (
    <div style={fieldStyles}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        error={error}
        disabled={disabled}
        autoComplete={autoComplete}
        icon={icon}
        {...rest}
      />
    </div>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  icon: PropTypes.node,
  style: PropTypes.object,
};

export default FormField;