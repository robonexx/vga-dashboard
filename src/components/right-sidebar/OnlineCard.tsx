import React from 'react';
import styled from 'styled-components';

interface OnlineCardProps {
  img: string;
  name: string;
  playing: string;
}

const OnlineCardContainer = styled.div`
  margin: 0.5rem 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;

  &:hover {
    transition: all 0.4s ease;
    cursor: pointer;
    filter: drop-shadow(3px 3px 10px #3dbda7);
  }

  & > .profile_img {
    margin-right: 1rem;
    width: 2.625rem;
    height: 2.625rem;
    display: grid;
    place-content: center;
    object-fit: cover;
    object-position: 10% 20%;
    border-radius: 50%;
    background: linear-gradient(to top, #1d1e22, #393939);

    @media screen and (min-width: 769px) {
      width: 3.125rem;
      height: 3.125rem;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > h4 {
      padding-top: 0.5rem;
      font-size: 1rem;
    }

    & > p {
      font-size: 0.6rem;
      color: #888;
    }
  }
`;

const OnlineCard: React.FC<OnlineCardProps> = ({ img, name, playing }) => {
  return (
    <OnlineCardContainer>
      <img className='profile_img' src={img} alt='' />
      <div>
        <h4>{name}</h4>
        <p>Playing {playing}</p>
      </div>
    </OnlineCardContainer>
  );
};

export default OnlineCard;
