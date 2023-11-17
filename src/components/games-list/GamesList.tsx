import React from 'react';
import styled from 'styled-components';
import GameItem from './GameItem';
import { GameItemProps } from '../../types/Types';

interface GamesListProps {
    games: GameItemProps[];
  }


const GamesContainer = styled.ul`
position: relative;
  margin-top: 2.625rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;


const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <>
      <GamesContainer>
        {games.length > 0 &&
          games.map((game) => <GameItem game={game} key={game.id} />)}
      </GamesContainer>
    </>
  );
};

export default GamesList;
