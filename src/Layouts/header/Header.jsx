import React, { useState } from 'react';
import Logo from '../../Components/UI/logo/Logo';
import MyButton from '../../Components/UI/button/MyButton';

const Header = ({ onAddClick }) => {
  return(
    <header className="header">
      <div className="container">
        <Logo actionType='add' onAddClick={onAddClick} />
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
