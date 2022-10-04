import styled from 'styled-components';

export const ImageGalleryStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
`;
