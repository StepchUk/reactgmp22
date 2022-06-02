import React from 'react'

const ResultSort = () => {
  return (
    <div className="sortby">
      <label className="srtlable" htmlFor="srt">sort by</label>
        <select name="srt" id="srt">
          <option value="release">release date</option>
          <option value="title">title</option>
          <option value="rate">rate</option>
          <option value="runtime">runtime</option>
        </select>
    </div>
  )
}

export default ResultSort
