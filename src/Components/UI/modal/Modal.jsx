import React from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({className, title, text, children, onModalClose}) => {

  const rootClasses = [style[className]]

  if (onModalClose) {
    rootClasses.push(style.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => onModalClose()}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalHead}>
          <p>{title}</p>
          <button onClick={() => onModalClose()}>X</button>
        </div>
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  onModalClose: PropTypes.func,
}

export default Modal;
