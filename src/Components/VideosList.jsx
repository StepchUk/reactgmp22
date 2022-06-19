import React from 'react'
import VideoCard from './VideoCard'

const VideosList = ({ videos, showDeleteModal, showEditVideoModal }) => {
  return (
    <section className="container">
      <div className="search-result">
        {videos.length} widies found
      </div>

      <section className="films">
        {videos.map(video =>
          <VideoCard
            key={video.id}
            video={video}
            showDeleteModal={showDeleteModal}
            showEditVideoModal={showEditVideoModal}
          />
          )}
        </section>
    </section>
  )
}

export default VideosList
