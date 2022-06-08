import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyButton from '../button/MyButton'
import style from './VideoForm.module.css';

const VideoForm = ({ creat, hideModal }) => {

  const emptyVideo = {
    title: '',
    posterPath: '',
    year: '',
    genre: ['horro', 'drama'],
    rating: '',
    runtime: '',
    description: ''
  };

  const [video, setVideo] = useState(emptyVideo);

  const addNewVideo = (e) => {
    e.preventDefault();

    const newVideo = {
      ...video, id: Date.now()
    };

    creat(newVideo);

    setVideo(emptyVideo);

    hideModal(false);
  };

  const reset = (e) => {
    e.preventDefault();

    setVideo(emptyVideo);
  };

  return (
    <form>
      <label htmlFor='name'>title</label>
      <input value={video.title} onChange={e => setVideo({...video, title: e.target.value})} id='name' type='text' placeholder='Enter movie title'/>

      <label>movie url</label>
      <input value={video.posterPath} onChange={e => setVideo({...video, posterPath: e.target.value})} type='text' placeholder='https://'/>

      <label>genre</label>
      <input value={video.genre} onChange={e => setVideo({...video, genre: e.target.value})} type='text' placeholder='Select Genre'/>

      <label>release date</label>
      <input value={video.year} onChange={e => setVideo({...video, year: e.target.value})} type='text' placeholder='Select Date'/>

      <label>rating</label>
      <input value={video.rating} onChange={e => setVideo({...video, rating: e.target.value})} type='text' placeholder='7.8'/>

      <label>runtime</label>
      <input value={video.runtime} onChange={e => setVideo({...video, runtime: e.target.value})} type='text' placeholder='minutes'/>

      <label>overview</label>
      <textarea placeholder='Movie description'></textarea>

      <MyButton onClick={reset} className='button__gray-blurred'>
        reset
      </MyButton>
      <MyButton onClick={addNewVideo} className='button__red'>
        submit
      </MyButton>
    </form>

  );
};

VideoForm.propTypes = {
  create: PropTypes.func,
  hideModal: PropTypes.func,
}

export default VideoForm;
