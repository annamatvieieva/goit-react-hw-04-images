import styled from 'styled-components';

export const SearchbarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;

  button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: ${p => p.theme.borders.none};
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
      opacity: 1;
    }
  }

  input {
    display: inline-block;
    width: 100%;
    font-size: 20px;
    border: ${p => p.theme.borders.none};
    outline: none;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;

    &::placeholder {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
`;
