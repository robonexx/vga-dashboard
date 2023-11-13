import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin: 2.5rem auto 3rem;
  position: relative;
  top: 0;
  left: 0;
  height: 3.125rem;
  width: 100%;
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  background-color: transparent;
  color: white;

  @media (min-width: 769px) {
    position: relative;
    height: 3.125rem;
    margin: 2.5rem auto 3rem;
  }

  > div {
    display: flex;
    padding-right: 2.875rem;
  }
`;

type HeaderType = {
  children: ReactNode;
};

const Header = ({ children }: HeaderType) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
