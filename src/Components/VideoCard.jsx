import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getYear } from '../utils';
import DefaultPropTypes from '../Common/global_prop_types';
import Modal from './UI/modal/Modal';
import defaultVideo from '../Assets/Images/No-Image-Placeholder.png';

function VideoCard({
  video, showEditVideoModal, showDeleteModal,
}) {
  const {
    id, posterPath, title, releaseDate, genres,
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
            type="submit"
            onClick={() => {
              showEditVideoModal(video);
              hideModal();
            }}
          >
            edit
          </button>
          <br />
          <button
            type="submit"
            onClick={() => {
              showDeleteModal(id);
              hideModal();
            }}
          >
            delete
          </button>
        </Modal>
        )}
      <button
        type="submit"
        className="showEdit"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        ...
      </button>
      <Link to={`/movie/${id}`}>
        <div className="card">
          <img
            src={posterPath}
            onError={(e) => {
              e.target.onError = null;
              e.target.src = defaultVideo;
            }}
            alt={title}
          />
          <div className="description">
            <span>{title}</span>
            <div className="year">{getYear(releaseDate)}</div>
          </div>
        </div>
        <div className="genre-list">
          {genres.join(', ')}
        </div>
      </Link>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape(DefaultPropTypes.video).isRequired,
  showEditVideoModal: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
};

export default VideoCard;
