import PropTypes from 'prop-types';
import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ href, onClick, id }) => {
  return (
    <ImageGalleryItemStyled onClick={() => onClick(id)}>
      <img src={href} alt="" />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
