import React from 'react';
import style from './VideoModal.module.css';
import PropTypes from 'prop-types';

const VideoModal = ({title, children, visible, setVisible}) => {

  const rootClasses = [style.videoModal]

  if (visible) {
    rootClasses.push(style.active)
  }

  
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={style.videoModalContent} onClick={(e) => e.stopPropagation()}>
        <p>{title}</p>
        <button style={{cursor: "pointer"}} onClick={() => setVisible(false)}>X</button>
        {children}
      </div>
    </div>
  );
};

VideoModal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
}

export default VideoModal;
