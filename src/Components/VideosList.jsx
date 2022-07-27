import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchVideosFromServer } from '../Services/Handlers/AsyncActionsHendlers';
import VideoCard from './VideoCard';
import { useVideoSelector } from '../Services/Selectors/MoviesSelectors';

function VideosList({
  showDeleteModal, showEditVideoModal,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const videos = useVideoSelector();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getVideosFromServer = async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchVideosFromServer(searchParams.get('searchQuery') || ''));
      } finally {
        setIsLoading(false);
      }
    };

    getVideosFromServer();
  }, [searchParams]);

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
          />
        ))}
      </section>
    </section>
  );
}

VideosList.propTypes = {
  showDeleteModal: PropTypes.func.isRequired,
  showEditVideoModal: PropTypes.func.isRequired,
};

export default VideosList;
