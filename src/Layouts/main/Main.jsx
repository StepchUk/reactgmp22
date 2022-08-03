import React from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Body from '../body/Body';

function Main({ showEditVideoModal, showDeleteModal }) {
  return (
    <>
      <Outlet />
      <Body
        showEditVideoModal={showEditVideoModal}
        showDeleteModal={showDeleteModal}
      />
    </>
  );
}

Main.propTypes = {
  showDeleteModal: PropTypes.func.isRequired,
  showEditVideoModal: PropTypes.func.isRequired,
};

export default Main;
