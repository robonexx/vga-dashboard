import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface OnlineProps {
  children: ReactNode;
}

const OnlineContainer = styled.div`
  width: 100%;
  max-height: 35%;
  overflow: hidden;
`;

const Online: React.FC<OnlineProps> = ({ children }) => {
  return (
    <OnlineContainer>
      <p>Online friends</p>
      {children}
    </OnlineContainer>
  );
};

export default Online;
