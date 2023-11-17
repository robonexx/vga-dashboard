import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import GameItem from './GameItem';
import { GameItemProps } from '../../types/Types';

interface GamesListProps {
  games: GameItemProps[];
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GamesContainer = styled(motion.ul)`
  position: relative;
  margin-top: 2.625rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const GamesList: React.FC<GamesListProps> = ({ games, setModalOpen }) => {
  return (
    <>
      <GamesContainer
        initial='hidden'
        animate='visible'
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1, // Adjust the stagger delay as needed
            },
          },
        }}
      >
        {games.length > 0 &&
          games.map((game) => (
            <motion.li key={game.id} variants={itemVariants}>
              <GameItem game={game} setModalOpen={setModalOpen} />
            </motion.li>
          ))}
      </GamesContainer>
    </>
  );
};

export default GamesList;
