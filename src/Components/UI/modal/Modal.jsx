import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

function Modal({
  className, title, text, children, onModalClose,
}) {
  const rootClasses = [style[className]];

  if (onModalClose) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={onModalClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalHead}>
          <p>{title}</p>
          <button type="submit" onClick={onModalClose}>X</button>
        </div>
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  text: null,
  title: null,
};

Modal.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Modal;
