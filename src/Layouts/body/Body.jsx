import React, { useState } from "react";
import GenreFilter from "../../Components/UI/genreFilter/GenreFilter";
import ResultSort from "../../Components/UI/resultSort/ResultSort";
import VideosList from "../../Components/VideosList";
import VidoeModal from '../../Components/UI/videomodal/VideoModal'
import VideoForm from '../../Components/UI/videoform/VideoForm'
import MyButton from '../../Components/UI/button/MyButton'

const Body = ({ videos, setVideos }) => {

  const [videoObject, setVideoObject] = useState();
  const [editVieoModal, setEditVieoModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

  const sortVideos = (sort) => {
    setSelectedSort(sort);
    setVideos([...videos].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const showEditVideoModal = (video, show) => {
    setVideoObject(video);
    setEditVieoModal(show);
  };

  const showDeleteModal = (video, show) => {
    setVideoObject(video);
    setDeleteModal(show);
  };

  const editVideo = (video) => {
    const editedVideos = videos.map(vd => {
      if (vd.id == video.id) {
        return video;
      }

      return vd;
    });

    setVideos(editedVideos);
  }

  const removeVideo = (video) => {
    setVideos(videos.filter(v => v.id !== video.id));
    setDeleteModal(false);
  };
  
  return(
    <>
      <VidoeModal className='videoModal' title='edit movie' visible={editVieoModal} setVisible={setEditVieoModal}>
        <VideoForm editVideo={videoObject} creat={editVideo} showModal={setEditVieoModal} />
      </VidoeModal>
      <VidoeModal className='videoModal' title='delete movie' visible={deleteModal} setVisible={setDeleteModal}>
        <p>Are you sure you want to delete this movie?</p>
        <MyButton className='button__red' onClick={() => removeVideo(videoObject)}>confirm</MyButton>
      </VidoeModal>
      <main className="main">
        <section className="container">
          <div className="sort">
            <GenreFilter />
            <ResultSort 
              value={selectedSort}
              onChange={sortVideos}
            />
          </div>
        </section>
        <VideosList videos={videos} showDeleteModal={showDeleteModal} showEditVideoModal={showEditVideoModal}  />
      </main>
    </>
  )
}

export default Body;
