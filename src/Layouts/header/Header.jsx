import React from "react"
import MyButton from "../../Components/UI/button/MyButton"

const Header = () => {
  return(
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <b>netflix</b>roulette
          </div>
          <MyButton className="button__gray-blurred">+ add movie</MyButton>
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
