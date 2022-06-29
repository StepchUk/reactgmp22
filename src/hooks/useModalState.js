import { useState } from 'react';

const ModalTypes = {
  ADD: 'add',
  EDIT: 'edit',
  CONFIRM: 'confirm',
};

const INIT_STATE = { type: null, data: null };

const useModalState = () => {
  const [modal, setModal] = useState(INIT_STATE);

  const isAddType = modal.type === ModalTypes.ADD;
  const isEditType = modal.type === ModalTypes.EDIT;
  const isConfirmType = modal.type === ModalTypes.CONFIRM;

  const close = () => setModal(INIT_STATE);
  const showAdd = () => setModal({ type: ModalTypes.ADD });
  const showEdit = (data) => setModal({ type: ModalTypes.EDIT, data });
  const showConfirm = (data) => setModal({ type: ModalTypes.CONFIRM, data });

  return {
    data: modal.data,
    isAddType,
    isEditType,
    isConfirmType,
    showAdd,
    showEdit,
    showConfirm,
    close,
  };
};

export default useModalState;
