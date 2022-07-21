import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchVideosFromServer } from '../Services/Handlers/AsyncActionsHendlers';
import VideoCard from './VideoCard';
import { useVideoSelector } from '../Services/Selectors/MoviesSelectors';

function VideosList({
  showDeleteModal, showEditVideoModal, onVideoDetailClick,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const videos = useVideoSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideosFromServer = async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchVideosFromServer());
      } finally {
        setIsLoading(false);
      }
    };

    getVideosFromServer();
  }, []);

  return (
    <section className="container">
      <div className="search-result">
        {videos.length}
        {' '}
        widies found
      </div>

      <section className="films">
        {isLoading ? <div>Loading</div> : videos.map((curentVideo) => (
          <VideoCard
            key={curentVideo.id}
            video={curentVideo}
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
  showDeleteModal: PropTypes.func.isRequired,
  showEditVideoModal: PropTypes.func.isRequired,
  onVideoDetailClick: PropTypes.func.isRequired,
};

export default VideosList;
