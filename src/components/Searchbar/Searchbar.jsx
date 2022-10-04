import PropTypes from 'prop-types';
import { Component } from 'react';
import { SearchbarStyled, SearchForm } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  reset = e => {
    this.setState({ value: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    if (value.trim() === '') {
      alert('You did not enter anything to search for...');
    } else {
      this.props.onSubmit(value);
      this.reset();
    }
  };

  render() {
    const { value } = this.state;
    const { children } = this.props;
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <button type="submit">{children}
          </button>
          <input
            type="text"
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
