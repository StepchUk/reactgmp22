import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DefaultPropTypes from '../../Common/global_prop_types';
import GenreFilter from '../../Components/UI/genreFilter/GenreFilter';
import ResultSort from '../../Components/UI/resultSort/ResultSort';
import VideosList from '../../Components/VideosList';

const getVideoSorter = (field) => (a, b) => a[field].localeCompare(b[field]);

function Body({
  videos, setVideos, onVideoDetailClick, showEditVideoModal, showDeleteModal,
}) {
  const [sortByField, setSortByField] = useState('year');

  useEffect(() => {
    const videoSorter = getVideoSorter(sortByField);

    setVideos([...videos].sort(videoSorter));
  }, [sortByField]);

  return (
    <main className="main">
      <section className="container">
        <div className="sort">
          <GenreFilter />
          <ResultSort
            value={sortByField}
            onChange={setSortByField}
          />
        </div>
      </section>
      <VideosList
        videos={videos}
        showEditVideoModal={showEditVideoModal}
        showDeleteModal={showDeleteModal}
        onVideoDetailClick={onVideoDetailClick}
      />
    </main>
  );
}

Body.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(DefaultPropTypes.video)).isRequired,
  setVideos: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  showEditVideoModal: PropTypes.func.isRequired,
  onVideoDetailClick: PropTypes.func.isRequired,
};

export default Body;
