import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideosFromServer } from '../../../Services/Handlers/AsyncActionsHendlers';
import { GENRES, SORT_TYPES } from '../../../Constants';
import { useGenreSelector, useSortBySelector } from '../../../Services/Selectors/MoviesSelectors';
import { setGenresAction, setSortByAction } from '../../../Services/Actions/MoviesActions';

function MoviesFilters() {
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
          (curentGenre) => <button type="submit" key={curentGenre} onClick={(e) => dispatch(setGenresAction(e.currentTarget.textContent))} className="genre__item">{curentGenre}</button>,
        )}
      </div>
      <div className="sortby">
        <label className="srtlable" htmlFor="srt">sort by</label>
        <select
          name="srt"
          id="srt"
          onChange={(e) => dispatch(setSortByAction(e.target.value))}
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
