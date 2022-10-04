import styled from 'styled-components';

export const LoadMore = styled.button`
  min-width: 180px;
  display: block;
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.primary};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
