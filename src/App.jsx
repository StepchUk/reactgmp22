import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './Layouts/footer/Footer';
import ErrorBoundary from './Components/ErrorBoundary';
import Modal from './Components/UI/modal/Modal';
import VideoFormModal from './Components/UI/videoformmodal/VideoFormModal';
import MyButton from './Components/UI/button/MyButton';
import useModalState from './hooks/useModalState';
import { deleteMovie } from './Services/Handlers/AsyncActionsHendlers';
import Search from './Pages/Search/Search';
import NotFound from './Pages/Error/NotFound';

function App() {
  const dispatch = useDispatch();
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
            <MyButton className="button__red" onClick={() => { dispatch(deleteMovie(modal.data)); modal.close(); }}>confirm</MyButton>
          </Modal>
          )}

        <Routes>
          <Route path="/" element={<Navigate to="/search" replace />} />
          <Route path="/search" element={<Search modalHendler={modal} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
