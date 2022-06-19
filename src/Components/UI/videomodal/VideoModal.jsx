import React from 'react';
import style from './VideoModal.module.css';
import PropTypes from 'prop-types';

const VideoModal = ({className, title, children, showModal, setShowModal}) => {

  const rootClasses = [style[className]]

  if (showModal) {
    rootClasses.push(style.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setShowModal(false)}>
      <div className={style.videoModalContent} onClick={(e) => e.stopPropagation()}>
        <p>{title}</p>
        <button style={{cursor: "pointer"}} onClick={() => setShowModal(false)}>X</button>
        {children}
      </div>
    </div>
  );
};

VideoModal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
}

export default VideoModal;
