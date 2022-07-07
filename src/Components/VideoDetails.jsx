import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getYear } from '../Services/Utils';
import Logo from './UI/logo/Logo';
import defaultVideo from '../Assets/Images/No-Image-Placeholder.png';

const duration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minut = minutes % 60;

  const hour = hours > 0 ? `${hours}h` : '';

  return `${hour} ${minut.toString().padStart(2, '0')}min`;
};

function VideoDetails({ video, onVideoDetailClose }) {
  const {
    posterPath, title, releaseDate, genres, voteAverage, runtime, overview,
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
          <img
            src={posterPath}
            onError={(e) => {
              e.target.onError = null;
              e.target.src = defaultVideo;
            }}
            alt={title}
          />
          <div className="detail__container">
            <div className="detail__title">
              <p>{title}</p>
              <p className="detail__rate">{voteAverage}</p>
            </div>
            <p className="detail__genre">{genres.join(', ')}</p>
            <div className="detail__year-runtime">
              <p>{getYear(releaseDate)}</p>
              {runtime && <p className="detail__runtime">{duration(runtime)}</p>}
            </div>
            <p className="detail__description">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

VideoDetails.propTypes = {
  video: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onVideoDetailClose: PropTypes.func.isRequired,
};

export default VideoDetails;
