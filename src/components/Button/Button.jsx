import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';


export const Button = ({ onClick, disabled }) => {
  return (
    <LoadMore type="button" onClick={onClick} disabled={disabled}>
      Load More
    </LoadMore>
  );
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
}
