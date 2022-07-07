import React from 'react';
import PropTypes from 'prop-types';
import GenreFilter from '../../Components/UI/genreFilter/GenreFilter';
import ResultSort from '../../Components/UI/resultSort/ResultSort';
import VideosList from '../../Components/VideosList';

function Body({
  onVideoDetailClick, showEditVideoModal, showDeleteModal,
}) {
  return (
    <main className="main">
      <section className="container">
        <div className="sort">
          <GenreFilter />
          <ResultSort />
        </div>
      </section>
      <VideosList
        showEditVideoModal={showEditVideoModal}
        showDeleteModal={showDeleteModal}
        onVideoDetailClick={onVideoDetailClick}
      />
    </main>
  );
}

Body.propTypes = {
  showDeleteModal: PropTypes.func.isRequired,
  showEditVideoModal: PropTypes.func.isRequired,
  onVideoDetailClick: PropTypes.func.isRequired,
};

export default Body;
