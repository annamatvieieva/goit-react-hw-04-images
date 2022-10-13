import PropTypes from 'prop-types';
import {  useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modalstyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, href }) => {
  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return createPortal(
    <Overlay onClick={handleClickBackdrop}>
      <Modalstyled>
        <img src={href} alt="" />
      </Modalstyled>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  href: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
