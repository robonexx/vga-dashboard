import React from 'react';
import styled from 'styled-components';

const MailContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  width: 18.25rem;
  height: unset;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(to top left, #24222225 60%, #1d1e22);
  border-radius: 1rem;

  &:hover {
    transition: all 0.4s ease;
    cursor: pointer;
  }

  & > h4 {
    font-size: 1rem;
    font-weight: 400;
  }

  & > p {
    font-size: 0.6rem;
    font-weight: 500;
    color: #888;
    /* color: #969696; */
  }
`;

const Mail: React.FC = () => {
  return (
    <MailContainer>
      <h4>Mail</h4>
      <p>Nothing to show right now</p>
    </MailContainer>
  );
};

export default Mail;
