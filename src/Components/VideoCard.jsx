import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './UI/modal/Modal';

function VideoCard({
  video, onVideoDetailClick, showEditVideoModal, showDeleteModal,
}) {
  const {
    posterPath, title, year, genre,
  } = video;

  const [showMenu, setShowMenu] = useState(false);

  const hideModal = () => {
    setShowMenu(false);
  };

  return (
    <div className="filmcard">
      {showMenu
        && (
        <Modal
          className="videoModalSmall"
          onModalClose={hideModal}
        >
          <button
            onClick={() => {
              showEditVideoModal(video);
              hideModal();
            }}
          >
            edit
          </button>
          <br />
          <button
            onClick={() => {
              showDeleteModal(video);
              hideModal();
            }}
          >
            delete
          </button>
        </Modal>
        )}
      <button
        className="showEdit"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        ...
      </button>
      <div className="card" onClick={() => onVideoDetailClick(video.id)}>
        <img src={posterPath} />
        <div className="description">
          <span>{title}</span>
          <div className="year">{year}</div>
        </div>
      </div>
      <div className="genre-list">
        {genre.join(', ')}
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.object,
  onModalClick: PropTypes.func,
  videoDetail: PropTypes.func,
};

export default VideoCard;
