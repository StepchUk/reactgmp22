import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import MyButton from '../button/MyButton';
import Input from '../input/Input';

const emptyVideo = {
  title: '',
  posterPath: '',
  year: '',
  genre: ['horro', 'drama'],
  rating: '',
  runtime: '',
  overview: '',
};

const validation = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.posterPath) {
    errors.posterPath = 'Required';
  }
  if (!values.runtime) {
    errors.runtime = 'Required';
  }
  if (!values.overview) {
    errors.overview = 'Required';
  }
  if (!values.genre) {
    errors.genre = 'Required';
  }
  return errors;
};

function VideoForm({ editVideo, onSubmit, hideModal }) {
  const [video, setVideo] = useState(emptyVideo);

  useEffect(() => {
    if (editVideo !== undefined) {
      setVideo(editVideo);
    }
  }, [editVideo]);

  const onSubmitFormic = (values, { setSubmitting }) => {
    const newVideo = {
      ...values,
    };

    onSubmit(newVideo);

    setVideo(emptyVideo);

    hideModal();
    setSubmitting(true);
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
          <Field
            type="text"
            name="title"
            placeholder="Enter movie title"
          />
          <br />
          <ErrorMessage name="releaseDate" component="div" />
          <Field
            type="text"
            name="releaseDate"
            placeholder="Select Date"
          />
          <br />
          <ErrorMessage name="posterPath" component="div" />
          <Field
            type="text"
            name="posterPath"
            placeholder="https://"
          />
          <br />
          <ErrorMessage name="rating" component="div" />
          <Field
            type="text"
            name="rating"
            placeholder="7.8"
          />
          <br />
          <ErrorMessage name="genre" component="div" />
          <Field
            type="text"
            name="genre"
            placeholder="Select Genre"
          />
          <br />
          <ErrorMessage name="runtime" component="div" />
          <Field
            type="text"
            name="runtime"
            placeholder="minutes"
          />
          <br />
          <ErrorMessage name="overview" component="div" />
          <Field
            type="text"
            as="textarea"
            name="overview"
            placeholder="Movie description"
          />
          <br />
          <MyButton onClick={resetForm} className="button__gray-blurred">
            reset
          </MyButton>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

VideoForm.defaultProps = {
  editVideo: undefined,
  onSubmit: null,
  hideModal: null,
};

VideoForm.propTypes = {
  editVideo: PropTypes.oneOf([PropTypes.object]),
  onSubmit: PropTypes.func,
  hideModal: PropTypes.func,
};

export default VideoForm;
