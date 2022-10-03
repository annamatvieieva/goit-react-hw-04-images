import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { Modal } from '../Modal';
import { ImageGalleryStyled } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    onCklickImage: {},
    isCklicked: false,
  };

  onCloseModal = () => {
    this.setState({ isCklicked: false });
  };

  handleClick = key => {
    const { images } = this.props;
    const clickedImage = images.find(({ id }) => id === key);
    this.setState({
      onCklickImage: clickedImage,
    });
    this.setState({ isCklicked: true });
  };

  render() {
    const { images } = this.props;
    const { isCklicked, onCklickImage } = this.state;
    return (
      <>
        <ImageGalleryStyled>
          {images.map(({ id, webformatURL }) => {
            return (
              <ImageGalleryItem
                onClick={this.handleClick}
                key={id}
                id={id}
                href={webformatURL}
              />
            );
          })}
        </ImageGalleryStyled>
        {isCklicked && (
          <Modal
            onClose={this.onCloseModal}
            href={onCklickImage.largeImageURL}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
