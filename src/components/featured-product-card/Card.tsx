import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import ShopNow from '../buttons/shop-now/ShopNow';

const CardgameContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3.125rem;

  & > div {
    & > img {
      border-radius: 3.125rem;
    }
  }

  & > img {
    position: absolute;
    bottom: 0;
    right: 20%;
  }
`;

const CardInfo = styled.div`
  margin: 1rem 0 3.5rem 4rem;
  padding: 1rem;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  & > div {
    width: unset;
  }
`;

const CardYear = styled.div`
  padding: 0.5rem 0.5rem;
  width: fit-content;
  position: relative;
  font-size: 0.7rem;
  font-weight: 700;
  background: linear-gradient(to top left, #c13509, #faa525);
  border-radius: 6px;
`;

const CardTitle = styled.div`
  height: 3rem;
  margin: 0.5rem 0 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.25;
`;

const AddToCardContainer = styled.div`
  padding: 0 0.5rem;
  min-width: 15rem;
  height: 3.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(120deg, #071b24 5%, #0d2028 10%, #575757d4);
  border: none;
  outline: none;
  border-radius: 42px;

  & > span {
    margin-left: 2rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;

interface CardProps {
  bg: string;
  character: string;
  title: string;
  price: number;
  year: number;
}

const Card: React.FC<CardProps> = ({ bg, character, title, price, year }) => {
  return (
    <AnimatePresence>
      <CardgameContainer>
        <motion.div>
          <motion.img
            src={bg}
            alt=''
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
        <motion.img
          src={character}
          alt=''
          initial={{ opacity: 0, y: 40, x: 30 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        />
        <CardInfo>
          <div>
            <CardYear>{year}</CardYear>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <CardTitle>{title}</CardTitle>
            </motion.div>
          </div>
          <AddToCardContainer>
            <span>{price}$</span>
            <ShopNow />
          </AddToCardContainer>
        </CardInfo>
      </CardgameContainer>
    </AnimatePresence>
  );
};

export default Card;
