import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { Modal } from '../Modal';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  const [onClickImage, setOnClickImage] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = key => {
    const clickedImage = images.find(({ id }) => id === key);
    setOnClickImage(clickedImage);
    setIsClicked(true);
  };

  return (
    <>
      <ImageGalleryStyled>
        {images.map(({ id, webformatURL }) => {
          return (
            <ImageGalleryItem
              onClick={handleClick}
              key={id}
              id={id}
              href={webformatURL}
            />
          );
        })}
      </ImageGalleryStyled>
      {isClicked && (
        <Modal
          onClose={() => {
            setIsClicked(false);
          }}
          href={onClickImage.largeImageURL}
        />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
