import React from 'react'
import { videos } from '../API/PostService'
import ResultCount from './UI/resultCount/ResultCount'
import VideoCard from './VideoCard'

const VideosList = () => {
  return (
    <section className="container">
      <ResultCount count={videos.length} />
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
