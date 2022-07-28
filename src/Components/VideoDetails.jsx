import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultMovieImage from '../Assets/Images/No-Image-Placeholder.png';
import searchIcon from '../Assets/Images/search-icon.png';
import { getYear } from '../utils';
import { useFormReuquestSelector, useVideoSelector } from '../Services/Selectors/MoviesSelectors';

const duration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minut = minutes % 60;

  const hour = hours > 0 ? `${hours}h` : '';

  return `${hour} ${minut.toString().padStart(2, '0')}min`;
};

function VideoDetails() {
  const movie = useVideoSelector();
  const request = useFormReuquestSelector();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [movie]);

  return (
    <div className="details">
      <div className="container">
        <div className="logo__inner">
          <div className="logo__text">
            <b>netflix</b>
            roulette
          </div>
          <Link to="/search">
            <img src={searchIcon} alt="search" />
          </Link>
        </div>
        {request.error ? <h1>Movie not found</h1> : (
          <div className="detail">
            <img
              src={movie.posterPath}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = defaultMovieImage;
              }}
              alt={movie.title}
            />
            <div className="detail__container">
              <div className="detail__title">
                <p>{movie.title}</p>
                <p className="detail__rate">{movie.voteAverage}</p>
              </div>
              <p className="detail__genre">{movie.genres.join(', ')}</p>
              <div className="detail__year-runtime">
                <p>{getYear(movie.releaseDate)}</p>
                {movie.runtime && <p className="detail__runtime">{duration(movie.runtime)}</p>}
              </div>
              <p className="detail__description">{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoDetails;
