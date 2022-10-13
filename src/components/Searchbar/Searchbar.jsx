import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarStyled, SearchForm } from './Searchbar.styled';

export const Searchbar = ({ children, onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const notify = () => {
    toast.error('You did not enter anything to search for...');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      notify();
    } else {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <SearchbarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <button type="submit">{children}</button>
        <input
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
      <ToastContainer />
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
