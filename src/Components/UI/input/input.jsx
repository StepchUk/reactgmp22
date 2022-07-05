import React from 'react';
import PropTypes from 'prop-types';

function Input({
  id, lable, value, placeholder, onChange,
}) {
  return (
    <>
      <label htmlFor={id}>{lable}</label>
      <input type="text" id={id} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  lable: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
