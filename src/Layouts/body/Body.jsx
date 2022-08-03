import React from 'react';
import PropTypes from 'prop-types';
import VideosList from '../../Components/VideosList';
import MoviesFilters from '../../Components/UI/moviesFilters/MoviesFilters';

function Body({
  showEditVideoModal, showDeleteModal,
}) {
  return (
    <main className="main">
      <section className="container">
        <MoviesFilters />
      </section>
      <VideosList
        showEditVideoModal={showEditVideoModal}
        showDeleteModal={showDeleteModal}
      />
    </main>
  );
}

Body.propTypes = {
  showDeleteModal: PropTypes.func.isRequired,
  showEditVideoModal: PropTypes.func.isRequired,
};

export default Body;
