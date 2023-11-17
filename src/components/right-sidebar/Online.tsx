import React from 'react';
import styled from 'styled-components';
import ImgOnline1 from '../../assets/images/Image-5.png';
import ImgOnline2 from '../../assets/images/Image-8.png';
import ImgOnline3 from '../../assets/images/Image-5.png';
import OnlineCard from './OnlineCard';

const mockData = [
  {
    name: 'YeahBoi2008',
    playing: 'Fortnite',
    img: ImgOnline1,
  },
  {
    name: 'OldManAim70',
    playing: 'MW3',
    img: ImgOnline2,
  },
  {
    name: 'KidRage2012',
    playing: 'Rocket League',
    img: ImgOnline3,
  },
];

const OnlineContainer = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
  max-height: 35%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Online: React.FC = () => {
  return (
    <OnlineContainer>
      {mockData.map(({ name, img, playing }, i) => (
        <OnlineCard key={i} name={name} img={img} playing={playing} />
      ))}
    </OnlineContainer>
  );
};

export default Online;
