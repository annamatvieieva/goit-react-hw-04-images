import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Modal } from "components/Modal/Modal";

export class ImageGallery  extends Component {
 state = {
	 onCklickImage: {},
	 isCklicked: false
	}

 onCloseModal = () => {
	 this.setState({isCklicked: false});
	};


	handleClick = (key) => {
		const { images } = this.props;
		const clickedImage = images.find(({id}) => id===key);
		this.setState({
			onCklickImage: clickedImage,
		});
		this.setState({isCklicked: true});
	}

	render() {
		const { images } = this.props;
		const { isCklicked, onCklickImage } = this.state;
		
		return (
		<>
		<ul>
			{images.map(({ id, webformatURL }) => {
				return  (
					<ImageGalleryItem onClick={this.handleClick} key={id} id={id} href={webformatURL}/>
				)
			})}
		</ul>
		{isCklicked ? <Modal onClose={this.onCloseModal} href={onCklickImage.largeImageURL}/> : ''}
		</>
	);}
}