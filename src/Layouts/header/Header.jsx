import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyButton from '../../Components/UI/button/MyButton';

function Header({ onAddClick }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('searchQuery') || '');

  const searchHendler = (e) => {
    e.preventDefault();
    setSearchParams(searchQuery.length ? { searchQuery } : {});
  };

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
            <form onSubmit={(e) => searchHendler(e)}>
              <input
                className="myInput"
                name="search"
                type="text"
                placeholder="What do you want to watch?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MyButton className="button__red">search</MyButton>
            </form>
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
