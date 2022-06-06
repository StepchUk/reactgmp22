import React from 'react'
import { videos } from '../API/PostService'
import VideoCard from './VideoCard'

const VideosList = () => {
  return (
    <section className="container">
      <div className="search-result">
        {videos.length} widies found
      </div>

      <section className="films">
        {videos.map((video) => 
          <VideoCard
            key={video.id}
            posterPath={video.posterPath}
            title={video.title}
            year={video.year}
            genre={video.genre}
          />
          )}
        </section>
    </section>
  )
}

export default VideosList
