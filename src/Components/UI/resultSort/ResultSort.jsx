import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideosSortBy } from '../../../Services/Handlers/AsyncActionsHendlers';

const SORT_TYPE = ['release_date', 'vote_average'];

function ResultSort() {
  const dispatch = useDispatch();

  return (
    <div className="sortby">
      <label className="srtlable" htmlFor="srt">sort by</label>
      <select
        name="srt"
        id="srt"
        onChange={(e) => dispatch(fetchVideosSortBy(e.target.value))}
      >
        {SORT_TYPE.map((type) => <option key={type} value={type}>{type}</option>)}
      </select>
    </div>
  );
}

export default ResultSort;
