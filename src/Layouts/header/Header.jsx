import React, { useState } from "react"
import MyButton from "../../Components/UI/button/MyButton"
import VidoeModal from '../../Components/UI/videomodal/VideoModal'
import VideoForm from '../../Components/UI/vidoform/VideoForm'

const Header = ({ create }) => {

  const [modal, setModal] = useState(false);

  return(
    <header className="header">
      <VidoeModal title="add movie" visible={modal} setVisible={setModal}>
        <VideoForm creat={create} hideModal={setModal} />
      </VidoeModal>
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <b>netflix</b>roulette
          </div>
          <MyButton className="button__gray-blurred" onClick={() => setModal(true)}>+ add movie</MyButton>
        </div>
        <div className="info">
          <div className="header__intro">
            find your movie
          </div>
          <div className="header__search">
            <input
              className="myInput"
              type="text"
              placeholder="What do you want to watch?"
            />
            <MyButton className="button__red">search</MyButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
