import React from 'react';

const SORT_TYPE = ['release date', 'title', 'rate', 'runtime'];

const ResultSort = () => {
  return (
    <div className="sortby">
      <label className="srtlable" htmlFor="srt">sort by</label>
        <select name="srt" id="srt">
          {SORT_TYPE.map(type => <option value="{type}">{type}</option>)}
        </select>
    </div>
  )
};

export default ResultSort;
