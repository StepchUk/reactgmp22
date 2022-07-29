import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchVideosFromServer } from '../../../Services/Handlers/AsyncActionsHendlers';
import { GENRES, SORT_TYPES } from '../../../Constants';
import { useGenreSelector, useSortBySelector } from '../../../Services/Selectors/MoviesSelectors';

function MoviesFilters() {
  const navigate = useNavigate();
  const sortBy = useSortBySelector();
  const genre = useGenreSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideosFromServer());
  }, [genre, sortBy]);

  return (
    <div className="sort">
      <div className="genre">
        {GENRES.map(
          (curentGenre) => (
            <NavLink
              className={({ isActive }) => isActive ? 'genre__item' : '' }
              to={`/search?genre=${curentGenre}`}
              key={curentGenre}
            >
              {curentGenre}
            </NavLink>
          ),
        )}
      </div>
      <div className="sortby">
        <label className="srtlable" htmlFor="srt">sort by</label>
        <select
          name="srt"
          id="srt"
          onChange={(e) => navigate(`/search?sortBy=${e.target.value}`)}
        >
          {SORT_TYPES.map(
            (curretnType) => <option key={curretnType} value={curretnType}>{curretnType}</option>,
          )}
        </select>
      </div>
    </div>
  );
}

export default MoviesFilters;
