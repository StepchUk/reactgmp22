import React, { useState } from "react";
import GenreFilter from "../../Components/UI/genreFilter/GenreFilter";
import ResultSort from "../../Components/UI/resultSort/ResultSort";
import VideosList from "../../Components/VideosList";
import VidoeModal from '../../Components/UI/videomodal/VideoModal'
import VideoForm from '../../Components/UI/videoform/VideoForm'
import MyButton from '../../Components/UI/button/MyButton'

const Body = ({ videos, setVideos }) => {

  const [videoData, setVideoData] = useState();
  const [editVieoModal, setEditVieoModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [sortByField, setSortByField] = useState('');

  const sortVideos = (sort) => {
    setSortByField(sort);
    setVideos([...videos].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const showEditVideoModal = (video, show) => {
    setVideoData(video);
    setEditVieoModal(show);
  };

  const showDeleteModal = (video, show) => {
    setVideoData(video);
    setDeleteModal(show);
  };

  const editVideo = (video) => {
    const editedVideos = videos.map(current => {
      return current.id === video.id ? video : current;
    });

    setVideos(editedVideos);
  }

  const removeVideo = (video) => {
    setVideos(videos.filter(v => v.id !== video.id));
    setDeleteModal(false);
  };
  
  return(
    <>
      <VidoeModal className='videoModal' title='edit movie' showModal={editVieoModal} setShowModal={setEditVieoModal}>
        <VideoForm editVideo={videoData} creat={editVideo} showModal={setEditVieoModal} />
      </VidoeModal>
      <VidoeModal className='videoModal' title='delete movie' showModal={deleteModal} setShowModal={setDeleteModal}>
        <p>Are you sure you want to delete this movie?</p>
        <MyButton className='button__red' onClick={() => removeVideo(videoData)}>confirm</MyButton>
      </VidoeModal>
      <main className="main">
        <section className="container">
          <div className="sort">
            <GenreFilter />
            <ResultSort 
              value={sortByField}
              onChange={sortVideos}
            />
          </div>
        </section>
        <VideosList
          videos={videos}
          showDeleteModal={showDeleteModal}
          showEditVideoModal={showEditVideoModal}
        />
      </main>
    </>
  )
}

export default Body;
