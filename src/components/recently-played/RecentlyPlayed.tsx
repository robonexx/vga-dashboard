// this could be called card slider if it be reused, ill call the props that
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { recentlyData } from '../../assets/data/recentlyData';
import SmallCard from './SmallCard';

//if passing the cards as children
/* interface CardSliderProps {
  children: ReactNode;
} */

const Container = styled.div`
  position: relative;
  padding: 0;
  width: 100%;
  height: 22.5rem;
  overflow: hidden;

  & > .inner {
    padding-bottom: 2.75rem;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    z-index: 10;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

// could be named card slider
const RecentlyPlayed: React.FC = () => {
  return (
    <Container>
      <h2>Recently Played</h2>
      <motion.div className='inner'>
        {recentlyData.map(({ title, image }, i) => (
          <SmallCard title={title} image={image} key={i} />
        ))}
      </motion.div>
    </Container>
  );
};

export default RecentlyPlayed;
