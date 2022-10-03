import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modalstyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    const { href } = this.props;
    return createPortal(
      <Overlay onClick={this.handleClickBackdrop}>
        <Modalstyled>
          <img src={href} alt="" />
        </Modalstyled>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
	href: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
};
