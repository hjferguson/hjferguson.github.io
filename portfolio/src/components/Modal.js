import React from 'react';
import './Modal.css';

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;