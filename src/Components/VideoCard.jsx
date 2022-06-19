import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VideoModal from '../Components/UI/videomodal/VideoModal'
import MyButton from './UI/button/MyButton';

const VideoCard = ({ video, showDeleteModal, showEditVideoModal }) => {

  const {posterPath, title, year, genre} = video;

  const [modal, setModal] = useState(false);

  return (
    <div className="filmcard">
      <VideoModal className='videoModalSmall' visible={modal} setVisible={setModal}><br/>
        <button onClick={() => {
          showEditVideoModal(video, true);
          setModal(false);
        }}>
          edit
        </button><br />
        <button
          onClick={() => {
            showDeleteModal(video, true);
            setModal(false);
          }}
        >
          delete
        </button>
      </VideoModal>
      <div className="card">
      <button className='showEdit' onClick={() => setModal(true)}>...</button>
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
