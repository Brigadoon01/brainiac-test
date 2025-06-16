import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children, required = false, style = {} }) => {
  const labelStyles = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem',
    ...style
  };

  const requiredStyles = {
    color: '#ef4444',
    marginLeft: '0.25rem'
  };

  return (
    <label htmlFor={htmlFor} style={labelStyles}>
      {children}
      {required && <span style={requiredStyles}>*</span>}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  style: PropTypes.object,
};

export default Label;