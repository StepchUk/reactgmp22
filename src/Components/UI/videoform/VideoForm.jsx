import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyButton from '../button/MyButton'
import style from './VideoForm.module.css';

const emptyVideo = {
  title: '',
  posterPath: '',
  year: '',
  genre: ['horro', 'drama'],
  rating: '',
  runtime: '',
  description: ''
};

const VideoForm = ({ editVideo, creat, showModal }) => {
  const [video, setVideo] = useState(emptyVideo);

  useEffect(() => {
    if (editVideo !== undefined) {
      setVideo(editVideo);
    }
  }, [editVideo]);

  const addNewVideo = (e) => {
    e.preventDefault();

    const newVideo = {
      ...video, id: video.id ??= Date.now()
    };
    
    creat(newVideo);

    setVideo(emptyVideo);

    showModal(false);
  };

  const reset = (e) => {
    e.preventDefault();

    setVideo(emptyVideo);
  };

  return (
    <form>
      <label htmlFor='name'>title</label>
      <input value={video.title} onChange={e => setVideo({...video, title: e.target.value})} id='name' type='text' placeholder='Enter movie title'/>
<br />
      <label>movie url</label>
      <input value={video.posterPath} onChange={e => setVideo({...video, posterPath: e.target.value})} type='text' placeholder='https://'/>
      <br />
      <label>genre</label>
      <input value={video.genre} onChange={e => setVideo({...video, genre: e.target.value})} type='text' placeholder='Select Genre'/>
      <br />
      <label>release date</label>
      <input value={video.year} onChange={e => setVideo({...video, year: e.target.value})} type='text' placeholder='Select Date'/>
      <br />
      <label>rating</label>
      <input value={video.rating} onChange={e => setVideo({...video, rating: e.target.value})} type='text' placeholder='7.8'/>
      <br />
      <label>runtime</label>
      <input value={video.runtime} onChange={e => setVideo({...video, runtime: e.target.value})} type='text' placeholder='minutes'/>
      <br />
      <label>overview</label>
      <textarea value={video.description} onChange={e => setVideo({...video, description: e.target.value})} placeholder='Movie description'></textarea>
      <br />
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
