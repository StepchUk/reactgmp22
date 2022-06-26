import React from 'react';
import style from './Logo.module.css';
import MyButton from '../button/MyButton';
import searchIcon from '../../../Assets/Images/search-icon.png';

const TYPE_OF_ACTION = {
  ADD: 'add', 
  SEARCH: 'search'
};

const Logo = ({ actionType, onAddClick, setIsVideoDetail }) => {
  return (
    <>
      <div className={style.inner}>
        <div className={style.logo}>
          <b>netflix</b>roulette
        </div>
        {TYPE_OF_ACTION.ADD === actionType && 
          <MyButton className="button__gray-blurred" onClick={() => onAddClick()}>+ add movie</MyButton>
        }
        {TYPE_OF_ACTION.SEARCH === actionType && 
          <img onClick={() => setIsVideoDetail(false)} src={searchIcon} />
        }
      </div>
    </>
  )
};

export default Logo;
