import React from 'react';
import styled from 'styled-components';
import Library from './Library';
import Mail from './Mail';
import Online from './Online';

/* interface RightSideProps {
  children: ReactNode;
} */


const SidebarContainer = styled.div`
  max-width: 22.875rem;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: linear-gradient(to top left, #252525, #2c2c2c, #1f1f1f);
  border-radius: 2.5rem;
  overflow: hidden;
  z-index: 2;

  & > .circle {
    position: absolute;
    top: 20vh;
    left: 5vw;
    width: 52.5rem;
    height: 52.5rem;
    border-radius: 50%;
    background-color: #fffffff;
    z-index: 3;
    pointer-events: none;
  }

  > p {
    padding-top: 0.5rem;
    padding-left: 1rem;
    color: #888;
  }
`;

const RightSidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <p>Library</p>
      <Library />
      <Mail />
      <p>Online</p>
      <Online />
      <div className='circle'></div>
    </SidebarContainer>
  );
};

export default RightSidebar;
