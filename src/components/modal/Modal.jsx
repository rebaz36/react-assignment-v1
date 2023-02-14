import React from 'react';
import classes from './Modal.module.css';

function Modal({ setIsModalOpen, children }) {
  window.closeModal = () => setIsModalOpen(false);

  return (
    <div className={classes.backdrop} onClick={() => setIsModalOpen(false)}>
      <div className={classes.container} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
