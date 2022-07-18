import React from 'react';
import PropTypes from 'prop-types';
import MyButton from '../../Components/UI/button/MyButton';

function Header({ onAddClick }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo__inner">
          <div className="logo__text">
            <b>netflix</b>
            roulette
          </div>
          <MyButton className="button__gray-blurred" onClick={() => onAddClick()}>+ add movie</MyButton>
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
  );
}

Header.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};

export default Header;
