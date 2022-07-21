import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import { useDispatch } from 'react-redux';
import MyButton from '../button/MyButton';
import { createMovie } from '../../../Services/Handlers/AsyncActionsHendlers';
import { useFormReuquestSelector } from '../../../Services/Selectors/MoviesSelectors';
import { setFormRequest } from '../../../Services/Actions/MoviesActions';
import { movieFormValidation } from '../../../utils';

const emptyVideo = {
  title: '',
  voteAverage: undefined,
  releaseDate: '',
  posterPath: '',
  overview: '',
  genres: ['horro', 'drama'],
  runtime: '',
};

function VideoForm({ editVideo, hideModal }) {
  const [video, setVideo] = useState(emptyVideo);
  const request = useFormReuquestSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    if (editVideo !== null) {
      setVideo({
        ...editVideo,
        runtime: editVideo.runtime === null ? 0 : editVideo.runtime,
      });
    }
  }, [editVideo]);

  useEffect(() => {
    if (!request.isFinished || request.error) return;
    hideModal();
    dispatch(setFormRequest({ isFinished: false, error: undefined }));
  }, [request.isFinished, request.error]);

  const onSubmitFormic = (values, { setSubmitting }) => {
    const movie = {
      ...values,
      genres: Array.isArray(values.genres) ? values.genres : values.genres.split(','),
      tagline: values.tagline === '' ? values.title : values.tagline,
    };

    if (editVideo === null) {
      dispatch(createMovie(movie));
    } else {
      dispatch(createMovie(movie, 'PUT'));
    }

    setSubmitting(true);
  };

  return (
    <>
      {request.error ? <p>Error on request</p> : ''}
      <Formik
        initialValues={video}
        validate={movieFormValidation}
        onSubmit={onSubmitFormic}
        enableReinitialize
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            <ErrorMessage name="title" component="div" />
            <label style={{ color: 'red' }} htmlFor="title">Title</label>
            <Field
              id="title"
              type="text"
              name="title"
              placeholder="Enter movie title"
            />
            <br />
            <ErrorMessage name="releaseDate" component="div" />
            <label style={{ color: 'red' }} htmlFor="releaseDate">RELEASE DATE</label>
            <Field
              id="releaseDate"
              type="text"
              name="releaseDate"
              placeholder="Select Date"
            />
            <br />
            <ErrorMessage name="posterPath" component="div" />
            <label style={{ color: 'red' }} htmlFor="posterPath">MOVIE URL</label>
            <Field
              id="posterPath"
              type="text"
              name="posterPath"
              placeholder="https://"
            />
            <br />
            <ErrorMessage name="voteAverage" component="div" />
            <label style={{ color: 'red' }} htmlFor="voteAverage">RATING</label>
            <Field
              id="voteAverage"
              type="number"
              name="voteAverage"
              placeholder="7.8"
            />
            <br />
            <ErrorMessage name="genres" component="div" />
            <label style={{ color: 'red' }} htmlFor="voteAverage">GENRE</label>
            <Field
              id="genres"
              type="text"
              name="genres"
              placeholder="Select Genre"
            />
            <br />
            <ErrorMessage name="runtime" component="div" />
            <label style={{ color: 'red' }} htmlFor="runtime">RUNTIME</label>
            <Field
              id="runtime"
              type="number"
              name="runtime"
              placeholder="minutes"
            />
            <br />
            <ErrorMessage name="overview" component="div" />
            <label style={{ color: 'red' }} htmlFor="overview">OVERVIEW</label>
            <Field
              id="overview"
              type="text"
              as="textarea"
              name="overview"
              placeholder="Movie description"
            />
            <br />
            <MyButton onClick={resetForm} className="button__gray-blurred">
              reset
            </MyButton>
            <MyButton className="button__red" type="submit" disabled={isSubmitting && !request.error}>
              Submit
            </MyButton>
          </Form>
        )}
      </Formik>
    </>
  );
}

VideoForm.defaultProps = {
  editVideo: null,
  hideModal: null,
};

VideoForm.propTypes = {
  editVideo: PropTypes.oneOfType([PropTypes.object]),
  hideModal: PropTypes.func,
};

export default VideoForm;
