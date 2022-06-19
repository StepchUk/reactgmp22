import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VideoModal from '../Components/UI/videomodal/VideoModal'
import MyButton from './UI/button/MyButton';

const VideoCard = ({ video, showDeleteModal, showEditVideoModal }) => {

  const {posterPath, title, year, genre} = video;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="filmcard">
      <VideoModal className='videoModalSmall' showModal={showModal} setShowModale={setShowModal}><br/>
        <button onClick={() => {
          showEditVideoModal(video, true);
          setShowModal(false);
        }}>
          edit
        </button><br />
        <button
          onClick={() => {
            showDeleteModal(video, true);
            setShowModal(false);
          }}
        >
          delete
        </button>
      </VideoModal>
      <div className="card">
      <button className='showEdit' onClick={() => setShowModal(true)}>...</button>
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
  remove: PropTypes.func,
}

export default VideoCard
