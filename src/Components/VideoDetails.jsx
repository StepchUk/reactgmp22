import React, { useEffect } from 'react';
import Logo from './UI/logo/Logo';

const VideoDetails = ({ video, setIsVideoDetail }) => {

  const { posterPath, title, year, genre, rating, runtime, description } = video;
  
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }, [video]);

  const mytime = (minutes) => {
    let hours = Math.floor(minutes / 60);
    let minut = minutes % 60;

    let hour = hours > 0 ? hours + 'h' : '';

    return `${hour} ${minut.toString().padStart(2, '0')}min`
  }

  return (
    <div className="details">
      <div className='container'>
        <Logo actionType='search' setIsVideoDetail={setIsVideoDetail} />
        <div className="detail">
          <img src={posterPath} />
          <div className='detail__container'>
            <div className='detail__title'>
              <p>{title}</p>
              <p className='detail__rate'>{rating}</p>
            </div>
            <p className='detail__genre'>{genre.join(', ')}</p>
            <div className='detail__year-runtime'>
              <p>{year}</p>
              <p className='detail__runtime'>{mytime(runtime)}</p>
            </div>
            <p className='detail__description'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default VideoDetails;
