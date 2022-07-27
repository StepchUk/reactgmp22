import React, { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useVideoSelector } from '../../Services/Selectors/MoviesSelectors';
import Body from '../../Layouts/body/Body';
import Header from '../../Layouts/header/Header';
import VideoDetails from '../../Components/VideoDetails';

function Search({ modalHendler }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movie');

  return (
    <>
      {movieId
        ? <VideoDetails movieId={movieId} />
        : <Header onAddClick={modalHendler.showAdd} />}
      <Body
        showEditVideoModal={modalHendler.showEdit}
        showDeleteModal={modalHendler.showConfirm}
      />
    </>
  );
}

Search.propTypes = {
  modalHendler: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Search;
