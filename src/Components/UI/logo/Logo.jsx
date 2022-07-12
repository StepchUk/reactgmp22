import React from 'react';
import PropTypes from 'prop-types';
import style from './Logo.module.css';
import MyButton from '../button/MyButton';
import searchIcon from '../../../Assets/Images/search-icon.png';

const TYPE_OF_ACTION = {
  ADD: 'add',
  SEARCH: 'search',
};

function Logo({ actionType, onAddClick, hideVideoDetails }) {
  return (
    <div className={style.inner}>
      <div className={style.logo}>
        <b>netflix</b>
        roulette
      </div>
      {TYPE_OF_ACTION.ADD === actionType
          && <MyButton className="button__gray-blurred" onClick={() => onAddClick()}>+ add movie</MyButton>}
      {TYPE_OF_ACTION.SEARCH === actionType
          && <img onClick={() => hideVideoDetails()} src={searchIcon} alt="search" />}
    </div>
  );
}

Logo.defaultProps = {
  onAddClick: null,
  hideVideoDetails: null,
};

Logo.propTypes = {
  actionType: PropTypes.string.isRequired,
  onAddClick: PropTypes.func,
  hideVideoDetails: PropTypes.func,
};

export default Logo;
