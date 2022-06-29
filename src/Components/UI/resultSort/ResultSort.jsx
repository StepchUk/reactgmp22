import React from 'react';

const SORT_TYPE = ['year', 'title', 'rating', 'runtime'];

function ResultSort({ value, onChange }) {
  return (
    <div className="sortby">
      <label className="srtlable" htmlFor="srt">sort by</label>
      <select
        name="srt"
        id="srt"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {SORT_TYPE.map((type) => <option key={type} value={type}>{type}</option>)}
      </select>
    </div>
  );
}

export default ResultSort;
