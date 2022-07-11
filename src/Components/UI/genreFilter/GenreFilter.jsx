import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideosFilterByGenres } from '../../../Services/Handlers/AsyncActionsHendlers';

const GENRE = ['all', 'documentary', 'comedy', 'horror', 'crime'];

function GenreFilter() {
  const dispatch = useDispatch();

  return (
    <div className="genre">
      {GENRE.map((genre) => <button type="submit" key={genre} onClick={(e) => dispatch(fetchVideosFilterByGenres(e.currentTarget.textContent))} className="genre__item">{genre}</button>)}
    </div>
  );
}

export default GenreFilter;
