import React from 'react';
import PropTypes from 'prop-types';
import style from './MyButton.module.css';

function MyButton({ children, className, ...props }) {
  return (
    <button type="submit" className={style[className]} {...props}>
      {children}
    </button>
  );
}

MyButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default MyButton;
