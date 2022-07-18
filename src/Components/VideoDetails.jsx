import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getYear } from '../Services/Utils/utils';
import defaultMovieImage from '../Assets/Images/No-Image-Placeholder.png';
import searchIcon from '../Assets/Images/search-icon.png';
import { fetchMovieFromServer } from '../Services/Handlers/AsyncActionsHendlers';

const duration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minut = minutes % 60;

  const hour = hours > 0 ? `${hours}h` : '';

  return `${hour} ${minut.toString().padStart(2, '0')}min`;
};

function VideoDetails() {
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getVideFromServer = async () => {
      try {
        const movieResult = await fetchMovieFromServer(id);
        setMovie(movieResult);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      }
    };

    getVideFromServer();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id, isError]);

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
        {isError ? <p>Movie not foud! Wrond id</p> : (<p>{movie.id}</p>
          // <div className="detail">
          //   <img
          //     src={movie.posterPath}
          //     onError={(e) => {
          //       e.target.onError = null;
          //       e.target.src = defaultMovieImage;
          //     }}
          //     alt={movie.title}
          //   />
          //   <div className="detail__container">
          //     <div className="detail__title">
          //       <p>{movie.title}</p>
          //       <p className="detail__rate">{movie.voteAverage}</p>
          //     </div>
          //     <p className="detail__genre">{movie.genres.join(', ')}</p>
          //     <div className="detail__year-runtime">
          //       <p>{getYear(movie.releaseDate)}</p>
          //       {movie.runtime && <p className="detail__runtime">{duration(movie.runtime)}</p>}
          //     </div>
          //     <p className="detail__description">{movie.overview}</p>
          //   </div>
          // </div>
        )}
      </div>
    </div>
  );
}

export default VideoDetails;
