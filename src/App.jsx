import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Body from './Layouts/body/Body';
import Footer from './Layouts/footer/Footer';
import Header from './Layouts/header/Header';
import ErrorBoundary from './Components/ErrorBoundary';
import Modal from './Components/UI/modal/Modal';
import VideoFormModal from './Components/UI/videoformmodal/VideoFormModal';
import VideoDetails from './Components/VideoDetails';
import MyButton from './Components/UI/button/MyButton';
import useModalState from './hooks/useModalState';
import { useVideoSelector } from './Services/Selectors/MoviesSelectors';
import { deleteMovie } from './Services/Handlers/AsyncActionsHendlers';

function App() {
  const videos = useVideoSelector();
  const [videoDetail, setVideoDetail] = useState();
  const dispatch = useDispatch();

  const showVideoDetails = !!videoDetail;
  const hideVideoDetails = () => setVideoDetail(null);

  const modal = useModalState();

  const handleVideoClick = useCallback((id) => {
    setVideoDetail(videos.find((video) => video.id === id));
  }, [videos]);

  return (
    <>
      <ErrorBoundary>
        {modal.isAddType
         && (
         <Modal className="videoModal" title="add movie" onModalClose={modal.close}>
           <VideoFormModal hideModal={modal.close} />
         </Modal>
         )}
        {modal.isEditType
          && (
          <Modal className="videoModal" title="edit movie" onModalClose={modal.close}>
            <VideoFormModal editVideo={modal.data} hideModal={modal.close} />
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
            <MyButton className="button__red" onClick={() => { dispatch(deleteMovie(modal.data)); modal.close(); }}>confirm</MyButton>
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
