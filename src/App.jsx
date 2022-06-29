import React, { useCallback, useEffect, useState } from 'react';
import Body from './Layouts/body/Body';
import Footer from './Layouts/footer/Footer';
import Header from './Layouts/header/Header';
import ErrorBoundary from './Components/ErrorBoundary';
import { api } from './API/PostService';

import Modal from './Components/UI/modal/Modal';
import VideoFormModal from './Components/UI/videoformmodal/VideoFormModal';
import VideoDetails from './Components/VideoDetails';
import MyButton from './Components/UI/button/MyButton';
import useModalState from './hooks/useModalState';

function App() {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState();

  const showVideoDetails = !!videoDetail;
  const hideVideoDetails = () => setVideoDetail(null);

  const modal = useModalState();

  useEffect(() => {
    setVideos(api);
  }, []);

  const createVideo = (newVideo) => {
    newVideo.id = videos.length + 1;

    setVideos([...videos, newVideo]);
  };

  const handleVideoClick = useCallback((id) => {
    setVideoDetail(videos[id - 1]);
  }, [videos]);

  const editVideo = (video) => {
    const editedVideos = videos.map((current) => (current.id === video.id ? video : current));

    setVideos(editedVideos);
  };

  const removeVideo = (video) => {
    setVideos(videos.filter((v) => v.id !== video.id));
  };

  return (
    <>
      <ErrorBoundary>
        {modal.isAddType
         && (
         <Modal className="videoModal" title="add movie" onModalClose={modal.close}>
           <VideoFormModal onSubmit={createVideo} hideModal={modal.close} />
         </Modal>
         )}
        {modal.isEditType
          && (
          <Modal className="videoModal" title="edit movie" onModalClose={modal.close}>
            <VideoFormModal editVideo={modal.data} onSubmit={editVideo} hideModal={modal.close} />
          </Modal>
          )}
        {modal.isConfirmType
          && (
          <Modal
            className="videoModal"
            title="delete movie"
            text="Are you sure you want to delete this movie?"
            onModalClose={modal.close}
          >
            <MyButton className="button__red" onClick={() => { removeVideo(modal.data); modal.close(); }}>confirm</MyButton>
          </Modal>
          )}

        {showVideoDetails
          ? <VideoDetails video={videoDetail} onVideoDetailClose={hideVideoDetails} />
          : <Header onAddClick={modal.showAdd} />}
        <Body
          videos={videos}
          setVideos={setVideos}
          showEditVideoModal={modal.showEdit}
          showDeleteModal={modal.showConfirm}
          onVideoDetailClick={handleVideoClick}
        />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
