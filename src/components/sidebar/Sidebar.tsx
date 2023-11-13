import { FC } from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
grid-area: aside;
  padding: 1.75rem;
  width: 100%;
  height: 100svh;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1d1e22;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.185);

  @media screen and (min-width: 769px) {
    padding: 2.625rem 1.75rem;
    width: 7.625rem;
    flex-direction: column;
  }
`;

const Sidebar: FC = () => {
  return <SidebarWrapper></SidebarWrapper>;
};

export default Sidebar;
