import React from 'react'

function Input({ id, lable, value, placeholder, onChange }) {
  return (
    <>
      <label htmlFor={id}>{lable}</label>
      <input type='text' id={id} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value) } />
    </>
  )
}

export default Input;
