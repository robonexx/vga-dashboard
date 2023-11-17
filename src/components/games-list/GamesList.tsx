import React from 'react';
import styled from 'styled-components';
import GameItem from './GameItem';
import { GameItemProps } from '../../types/Types';

interface GamesListProps {
  games: GameItemProps[];
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GamesContainer = styled.ul`
  position: relative;
  margin-top: 2.625rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

const GamesList: React.FC<GamesListProps> = ({ games, setModalOpen }) => {
  return (
    <>
      <GamesContainer>
        {games.length > 0 &&
          games.map((game) => (
            <GameItem game={game} key={game.id} setModalOpen={setModalOpen} />
          ))}
      </GamesContainer>
    </>
  );
};

export default GamesList;
