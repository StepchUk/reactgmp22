import React, { useEffect, useState } from "react";
import Body from "./Layouts/body/Body";
import Footer from "./Layouts/footer/Footer";
import Header from "./Layouts/header/Header";
import ErrorBoundary from "./Components/ErrorBoundary";
import { api } from './API/PostService'

import VidoeModal from './Components/UI/videomodal/VideoModal'
import VideoForm from './Components/UI/videoform/VideoForm'

const App = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(api);
  }, []);

  const createVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  }

  const [modal, setModal] = useState(false);

  return(
    <>
      <ErrorBoundary>
        <VidoeModal className='videoModal' title='add movie' visible={modal} setVisible={setModal}>
          <VideoForm creat={createVideo} showModal={setModal} />
        </VidoeModal>

        <Header showModal={setModal}/>
        <Body videos={videos} setVideos={setVideos} />
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App
