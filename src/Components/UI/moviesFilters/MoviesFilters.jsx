import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideosFromServer } from '../../../Services/Handlers/AsyncActionsHendlers';

const GENRE = ['all', 'documentary', 'comedy', 'horror', 'crime'];
const SORT_TYPE = ['release_date', 'vote_average'];

function MoviesFilters() {
  const [genreFilter, setGenreFilter] = useState(GENRE[0]);
  const [sortFilter, setSortFilter] = useState(SORT_TYPE[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideosFromServer(sortFilter, genreFilter));
  }, [genreFilter, sortFilter]);

  return (
    <div className="sort">
      <div className="genre">
        {GENRE.map((genre) => <button type="submit" key={genre} onClick={(e) => setGenreFilter(e.currentTarget.textContent)} className="genre__item">{genre}</button>)}
      </div>
      <div className="sortby">
        <label className="srtlable" htmlFor="srt">sort by</label>
        <select
          name="srt"
          id="srt"
          onChange={(e) => setSortFilter(e.target.value)}
        >
          {SORT_TYPE.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>
    </div>
  );
};

export default MoviesFilters;
