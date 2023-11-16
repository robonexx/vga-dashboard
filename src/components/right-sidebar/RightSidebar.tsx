import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface RightSideProps {
  children: ReactNode;
}

const SidebarContainer = styled.div`
  max-height: 52rem;
  max-width: 20.875rem;
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
`;

const RightSide: React.FC<RightSideProps> = ({ children }) => {
  return (
    <SidebarContainer>
      {children}
      <div className='circle'></div>
    </SidebarContainer>
  );
};

export default RightSide;
