import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from './UI/logo/Logo';

const duration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minut = minutes % 60;

  const hour = hours > 0 ? `${hours}h` : '';

  return `${hour} ${minut.toString().padStart(2, '0')}min`;
};

function VideoDetails({ video, onVideoDetailClose }) {
  const {
    posterPath, title, year, genre, rating, runtime, description,
  } = video;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [video]);

  return (
    <div className="details">
      <div className="container">
        <Logo actionType="search" hideVideoDetails={onVideoDetailClose} />
        <div className="detail">
          <img src={posterPath} alt={title} />
          <div className="detail__container">
            <div className="detail__title">
              <p>{title}</p>
              <p className="detail__rate">{rating}</p>
            </div>
            <p className="detail__genre">{genre.join(', ')}</p>
            <div className="detail__year-runtime">
              <p>{year}</p>
              <p className="detail__runtime">{duration(runtime)}</p>
            </div>
            <p className="detail__description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

VideoDetails.propTypes = {
  video: PropTypes.objectOf([PropTypes.object]).isRequired,
  onVideoDetailClose: PropTypes.func.isRequired,
};

export default VideoDetails;
