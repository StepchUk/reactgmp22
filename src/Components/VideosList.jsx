import React from 'react';
import PropTypes from 'prop-types';
import DefaultPropTypes from '../Common/global_prop_types';
import VideoCard from './VideoCard';

function VideosList({
  videos, showDeleteModal, showEditVideoModal, onVideoDetailClick,
}) {
  return (
    <section className="container">
      <div className="search-result">
        {videos.length}
        {' '}
        widies found
      </div>

      <section className="films">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            showDeleteModal={showDeleteModal}
            showEditVideoModal={showEditVideoModal}
            onVideoDetailClick={onVideoDetailClick}
          />
        ))}
      </section>
    </section>
  );
}

VideosList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(DefaultPropTypes.video)).isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  showEditVideoModal: PropTypes.func.isRequired,
  onVideoDetailClick: PropTypes.func.isRequired,
};

export default VideosList;
