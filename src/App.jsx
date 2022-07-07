import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Body from './Layouts/body/Body';
import Footer from './Layouts/footer/Footer';
import Header from './Layouts/header/Header';
import ErrorBoundary from './Components/ErrorBoundary';
import Modal from './Components/UI/modal/Modal';
import VideoFormModal from './Components/UI/videoformmodal/VideoFormModal';
import VideoDetails from './Components/VideoDetails';
import MyButton from './Components/UI/button/MyButton';
import useModalState from './hooks/useModalState';

function App() {
  const videos = useSelector((state) => state.videos);
  const [videoDetail, setVideoDetail] = useState();

  const showVideoDetails = !!videoDetail;
  const hideVideoDetails = () => setVideoDetail(null);

  const modal = useModalState();

  // const createVideo = (newVideo) => {
  //   newVideo.id = videos.length + 1;

  //   setVideos([...videos, newVideo]);
  // };

  const handleVideoClick = useCallback((id) => {
    setVideoDetail(videos.find((video) => video.id === id));
  }, [videos]);

  // const editVideo = (video) => {
  //   const editedVideos = videos.map((current) => (current.id === video.id ? video : current));

  //   setVideos(editedVideos);
  // };

  // const removeVideo = (video) => {
  //   setVideos(videos.filter((v) => v.id !== video.id));
  // };

  return (
    <>
      <ErrorBoundary>
        {modal.isAddType
         && (
         <Modal className="videoModal" title="add movie" onModalClose={modal.close}>
           <VideoFormModal hideModal={modal.close} />
           {/* onSubmit={createVideo} */}
         </Modal>
         )}
        {modal.isEditType
          && (
          <Modal className="videoModal" title="edit movie" onModalClose={modal.close}>
            <VideoFormModal editVideo={modal.data} hideModal={modal.close} />
            {/* onSubmit={editVideo} */}
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
            <MyButton className="button__red">confirm</MyButton>
            {/* onClick={() => { removeVideo(modal.data); modal.close(); }} */}
          </Modal>
          )}

        {showVideoDetails
          ? <VideoDetails video={videoDetail} onVideoDetailClose={hideVideoDetails} />
          : <Header onAddClick={modal.showAdd} />}
        <Body
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
