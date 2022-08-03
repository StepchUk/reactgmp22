import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormReuquestSelector } from '../../Services/Selectors/MoviesSelectors';
import { setFormRequest, setGenresAction, setSortByAction } from '../../Services/Actions/MoviesActions';
import { fetchMovieById } from '../../Services/Handlers/AsyncActionsHendlers';
import Body from '../../Layouts/body/Body';
import Header from '../../Layouts/header/Header';
import VideoDetails from '../../Components/VideoDetails';

function Search({ modalHendler }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movie');
  const genre = searchParams.get('genre');
  const sortBy = searchParams.get('sortBy');

  const request = useFormReuquestSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieById(movieId));
    } else {
      dispatch(setFormRequest({ isRunnig: false, isFinished: false, error: undefined }));
    }
  }, [movieId]);

  useEffect(() => {
    if (genre) {
      dispatch(setGenresAction(genre));
    }

    if (sortBy) {
      dispatch(setSortByAction(sortBy));
    }
  }, [genre, sortBy]);

  return (
    <>
      {request.isRunnig && <h1>Loading...</h1>}
      {!request.isRunnig && request.isFinished
        ? <VideoDetails />
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
