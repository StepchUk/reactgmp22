import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from './UI/modal/Modal';

const VideoCard = ({ video, handleVideoClick, showEditVideoModal, showDeleteModal }) => {

  const {posterPath, title, year, genre} = video;

  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <div className="filmcard">
      {showModal &&
        <Modal
          className='videoModalSmall'
          onModalClose={hideModal}>
          <button
            onClick={() => {
              showEditVideoModal(video);
              hideModal();
            }}
          >
            edit
          </button><br />
          <button
            onClick={() => {
              showDeleteModal(video);
              hideModal();
            }}
          >
            delete
          </button>
        </Modal>
      }
      <button className='showEdit' onClick={() => {
        setShowModal(true);
      }}>...</button>
      <div className="card" onClick={() => handleVideoClick(video.id)}>
        <img src={posterPath} />
        <div className="description">
          <span>{title}</span>
          <div className="year">{year}</div>
        </div>
      </div>
      <div className="genre-list">
        {genre.join(", ")}
      </div>
    </div>
  )
}

VideoCard.propTypes = {
  video: PropTypes.object,
  onModalClick: PropTypes.func,
  videoDetail: PropTypes.func,
}

export default VideoCard
