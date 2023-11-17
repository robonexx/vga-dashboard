import React from 'react';
import styled from 'styled-components';

import GameImg1 from '../../assets/images/Image-7.png';
import GameImg2 from '../../assets/images/Image-10.png';
import GameImg3 from '../../assets/images/Image-6.png';
import GameCard from './GameCard';

// data for this until fixing the save functions
const data = [
  {
    title: 'game1',
    platforms: 'xbox, ps5, pc',
    image: GameImg1,
  },
  {
    title: 'game2',
    platforms: 'xbox, ps5, pc',
    image: GameImg2,
  },
  {
    title: 'game3',
    platforms: 'xbox, ps5, pc',
    image: GameImg3,
  },
];

/* interface LibraryProps {
  children: ReactNode;
}
<LibraryProps>
*/

const LibraryContainer = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Library: React.FC = () => {
  return (
    <LibraryContainer>
      {data.map(({ title, platforms, image }, i) => (
        <GameCard key={i} title={title} platforms={platforms} image={image} />
      ))}
    </LibraryContainer>
  );
};

export default Library;
