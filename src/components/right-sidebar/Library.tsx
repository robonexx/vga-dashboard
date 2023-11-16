import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LibraryProps {
  children: ReactNode;
}

const LibraryContainer = styled.div`
  width: 100%;
  max-height: 35%;
  overflow: hidden;
  /* background: linear-gradient(to left top, #252525, #2C2C2C, #1f1f1f ); */

  &:hover {
    cursor: pointer;
  }

  & > div {
    height: 100%;
  }
`;

const Library: React.FC<LibraryProps> = ({ children }) => {
  return (
    <LibraryContainer>
      <p>Library</p>
      <div>{children}</div>
    </LibraryContainer>
  );
};

export default Library;
