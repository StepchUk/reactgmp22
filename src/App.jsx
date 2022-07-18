import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Layouts/footer/Footer';
import Header from './Layouts/header/Header';
import ErrorBoundary from './Components/ErrorBoundary';
import Modal from './Components/UI/modal/Modal';
import VideoFormModal from './Components/UI/videoformmodal/VideoFormModal';
import VideoDetails from './Components/VideoDetails';
import MyButton from './Components/UI/button/MyButton';
import useModalState from './hooks/useModalState';
import Main from './Layouts/main/Main';

function App() {
  const modal = useModalState();

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
            <MyButton className="button__red">confirm</MyButton>
          </Modal>
          )}
        <Routes>
          <Route path="/" element={<Main showEditVideoModal={modal.showEdit} showDeleteModal={modal.showConfirm} />}>
            {/* <Navigate to="/search" replace /> */}
            <Route index element={<Header onAddClick={modal.showAdd} />} />
            <Route path="search" element={<Header onAddClick={modal.showAdd} />} />
            <Route path="movie" element={<VideoDetails />} />
            <Route path="movie/:id" element={<VideoDetails />} />
          </Route>
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
