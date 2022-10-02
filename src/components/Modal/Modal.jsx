import { Component } from "react";
import { createPortal } from "react-dom";


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

	handleKeydown = e => {
		if (e.code === 'Escape') {
			this.props.onClose();
		}
	};

	handleClickBackdrop = e => {
		if (e.currentTarget === e.target) {
			console.log('backdrop');
			this.props.onClose();
		}
	}

	componentDidMount () {
		window.addEventListener('keydown', this.handleKeydown);
	};

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeydown);
	}

	render() {
		const { href} = this.props;
		return (createPortal(
			<div onClick={this.handleClickBackdrop}>
				<div>
					<img src={href} alt="" />
				</div>
			</div>, modalRoot));
	};
}