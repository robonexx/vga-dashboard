import React from 'react';
import styled from 'styled-components';

interface GameCardProps {
  image: string;
  title: string;
  platforms: string;
}

const CardContainer = styled.div`
  margin: 0.5rem 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;

  &:hover {
    transition: all 0.4s ease;
    cursor: pointer;
    filter: drop-shadow(3px 3px 10px #3DBDA7);
  }

  & > .small_img {
    margin-right: 1rem;
    width: 4rem !important;
    height: 4rem;
    object-fit: cover;
    object-position: center center;
    border-radius: 1rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > h4 {
      font-size: 1rem;
      font-weight: 400;
    }

    & > p {
      font-size: 0.6rem;
      font-weight: 500;
      color: #888;
    }
  }
`;

const GameCard: React.FC<GameCardProps> = ({ image, title, platforms }) => {
  return (
    <CardContainer>
      <img className='small_img' src={image} alt='' />
      <div>
        <h4>{title}</h4>
        <p>{platforms}</p>
      </div>
    </CardContainer>
  );
};

export default GameCard;
