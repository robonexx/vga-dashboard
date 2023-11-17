import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  RiPlaystationLine,
  RiXboxFill,
  RiMacLine,
  RiWindowsFill,
  RiAndroidLine,
  RiAppleFill,
} from 'react-icons/ri';
import { DiLinux } from 'react-icons/di';
import { SiNintendo } from 'react-icons/si';
import { GameItemProps } from '../../types/Types';

const GameCard = styled.li`
  margin: 1.25rem 0.5rem;
  padding: 1rem;
  width: 22.375rem;
  height: 14.5rem;
  position: relative;
  display: flex;
  align-items: flex-start;
  background-color: rgb(0, 0, 0);
  overflow: hidden;
  border-radius: 2.5rem;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  color: #f4f4f4;

  @media screen and (min-width: 769px) {
    margin: 1.5rem 2rem;
  }

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
  }

  .game_info {
    position: relative;
    padding: 0.25rem 0.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 2;

    & h4 {
      height: fit-content;
      margin-bottom: 2rem;
      font-size: 1rem;
      overflow: hidden;
    }

    > .additionals {
      border: 1px solid #3dbda7;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      position: relative;
      bottom: 1vh;
      left: 0;
      background-color: #888;

      span {
        text-align: left;
        padding: 0.25rem;
        font-size: 0.8rem;
        font-weight: 500;
        color: #fafafa;
        text-shadow: 1px 1px black;
      }
    }
  }

  & > a {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-decoration: none;
    text-align: center;

    & > p {
      padding: 0.25rem 0.5rem;
      width: 100%;
      font-size: 0.6rem;
      color: #f2f0f0;
      background-color: black;
    }
  }
`;

interface GamesSingeItemProps {
  game: GameItemProps;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameItem: React.FC<GamesSingeItemProps> = ({ game, setModalOpen }) => {
  return (
    <GameCard className='game'>
      <img src={game.background_image} alt={game.name} />
      <div className='game_info'>
        <h4>{game.name.toUpperCase()}</h4>
        <div className='additionals'>
          <span>Score: {game.rating}/5</span>
          {game.parent_platforms.map(({ platform }) => (
            <span key={game.id + platform.name}>
              {platform.name ? (
                platform.name === 'PC' ? (
                  <RiWindowsFill />
                ) : null || platform.name === 'PlayStation' ? (
                  <RiPlaystationLine />
                ) : null || platform.name === 'Xbox' ? (
                  <RiXboxFill />
                ) : null || platform.name === 'Nintendo' ? (
                  <SiNintendo />
                ) : null || platform.name === 'Apple Macintosh' ? (
                  <RiMacLine />
                ) : null || platform.name === 'Linux' ? (
                  <DiLinux />
                ) : null || platform.name === 'Android' ? (
                  <RiAndroidLine />
                ) : null || platform.name === 'iOS' ? (
                  <RiAppleFill />
                ) : null
              ) : (
                platform.name
              )}
            </span>
          ))}
        </div>
      </div>
      <Link to={`/game/${game.id}`} onClick={() => setModalOpen(false)}>
        <p>Read more...</p>
      </Link>
    </GameCard>
  );
};

export default GameItem;
