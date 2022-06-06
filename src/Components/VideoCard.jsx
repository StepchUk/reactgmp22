import React from 'react'
import PropTypes from 'prop-types'

const VideoCard = ({posterPath, title, year, genre}) => {

  return (
    <div className="filmcard">
      <div className="card">
        <img src={posterPath} />
        <div className="description">
          <span>{title}</span>
          <div className="year">{year}</div>
        </div>
      </div>
      <div className="genre-list">
        {genre.join(", ")}
      </div>
    </div>
  )
}

VideoCard.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.array
}

export default VideoCard
