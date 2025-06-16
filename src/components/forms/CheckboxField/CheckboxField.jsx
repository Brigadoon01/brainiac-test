import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Label } from '../../ui';

const CheckboxField = ({
  id,
  checked,
  onChange,
  error,
  disabled = false,
  required = false,
  children,
  style = {},
  ...rest
}) => {
  const fieldStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    ...style
  };

  const contentStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem'
  };

  const labelStyles = {
    marginBottom: 0
  };

  return (
    <div style={fieldStyles}>
      <div style={contentStyles}>
        <Checkbox
          id={id}
          checked={checked}
          onChange={onChange}
          error={!!error}
          disabled={disabled}
          {...rest}
        />
        <Label htmlFor={id} required={required} style={labelStyles}>
          {children}
        </Label>
      </div>
      {error && (
        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

CheckboxField.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default CheckboxField;