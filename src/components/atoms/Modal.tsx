import React, { useState } from 'react';
import Modal from 'react-modal';

const DeleteConfirmationModal = ({ onConfirm, onCancel }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel='Delete Confirmation Modal'
    >
      <div className='modal-content'>
        <h3>Are you sure you want to delete this?</h3>
        <p>This action cannot be undone.</p>
        <div className='modal-actions'>
          <button
            className='btn btn-cancel'
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className='btn btn-danger'
            onClick={handleConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
