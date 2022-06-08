import React, { useState } from "react";
import Body from "./Layouts/body/Body";
import Footer from "./Layouts/footer/Footer";
import Header from "./Layouts/header/Header";
import ErrorBoundary from "./Components/ErrorBoundary";
import { api } from './API/PostService'

const App = () => {

  const [videos, setVideo] = useState(api);

  const createVideo = (newVideo) => {
    setVideo([...videos, newVideo]);
  }

  const removeVideo = (video) => {
    setVideo(videos.filter(v => v.id !== video.id))
  }

  return(
    <>
      <ErrorBoundary>
        <Header videos={videos} create={createVideo}/>
        <Body videos={videos} remove={removeVideo} />
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App
