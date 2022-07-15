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

const emptyVideo = {
  title: '',
  voteAverage: '',
  releaseDate: '',
  posterPath: '',
  overview: '',
  genres: ['horro', 'drama'],
  runtime: '',
};

const isValidUrl = (url) => {
  let correctUrl;
  try {
    correctUrl = new URL(url);
  } catch (e) {
    return false;
  }
  return correctUrl;
};

function isIsoDate(str) {
  if (!/\d{4}-\d{2}-\d{2}/.test(str)) return false;
  return true;
}

const validation = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  if (!isIsoDate(values.releaseDate)) {
    errors.releaseDate = 'Incorrect date format. Date must be in YYYY-mm-dd format';
  }

  if (!values.posterPath) {
    errors.posterPath = 'Required';
  } else if (!isValidUrl(values.posterPath)) {
    errors.posterPath = 'URL is not correct';
  }

  if (!values.runtime) {
    errors.runtime = 'Required';
  }

  if (!values.overview) {
    errors.overview = 'Required';
  }

  if (!values.genres) {
    errors.genres = 'Required';
  }
  return errors;
};

function VideoForm({ editVideo, hideModal }) {
  const [video, setVideo] = useState(emptyVideo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editVideo !== null) {
      setVideo({
        ...editVideo,
        runtime: editVideo.runtime === null ? 0 : editVideo.runtime,
      });
    }
  }, [editVideo]);

  const onSubmitFormic = (values, { setSubmitting }) => {
    const movie = {
      ...values,
      genres: Array.isArray(values.genres) ? values.genres : values.genres.split(','),
      tagline: values.tagline === '' ? values.title : values.tagline,
    };

    try {
      if (editVideo === null) {
        dispatch(createMovie(movie));
      } else {
        dispatch(createMovie(movie, 'PUT'));
      }

      hideModal();
      setSubmitting(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={video}
      validate={validation}
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
          <MyButton className="button__red" type="submit" disabled={isSubmitting}>
            Submit
          </MyButton>
        </Form>
      )}
    </Formik>
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
