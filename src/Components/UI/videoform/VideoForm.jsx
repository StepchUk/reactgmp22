import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyButton from '../button/MyButton';
import Input from '../input/Input';
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

  const handleVideoChange = (key, value) => setVideo({...video, [key]: value})

  return (
    <form>
      <Input
        id='name'
        value={video.title}
        lable='title'
        placeholder='Enter movie title'
        onChange={value => handleVideoChange('title', value)}
      />
      <br />
      <Input
        id='posterpath'
        value={video.posterPath}
        lable='movie url'
        placeholder='https://'
        onChange={value => handleVideoChange('posterPath', value)}
      />
      <br />
      <Input
        id='genre'
        value={video.genre}
        lable='genre'
        placeholder='Select Genre'
        onChange={value => handleVideoChange('genre', value)}
      />
      <br />
      <Input
        id='year'
        value={video.year}
        lable='release date'
        placeholder='Select Date'
        onChange={value => handleVideoChange('year', value)}
      />
      <br />
      <Input
        id='rating'
        value={video.rating}
        lable='rating'
        placeholder='7.8'
        onChange={value => handleVideoChange('rating', value)}
      />
      <br />
      <Input
        id='runtime'
        value={video.runtime}
        lable='runtime'
        placeholder='minutes'
        onChange={value => handleVideoChange('runtime', value)}
      />
      <br />
      <label htmlFor='overview'>overview</label>
      <textarea id='overview' value={video.description} onChange={e => setVideo({...video, description: e.target.value})} placeholder='Movie description'></textarea>
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
