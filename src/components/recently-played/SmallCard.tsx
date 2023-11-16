import React from 'react';
import styled from 'styled-components';

interface SmallCardProps {
  image: string;
  title: string;
}

const CardWrapper = styled.div`
  margin: 0.75rem 0;
  width: 100%;
  min-height: 7.25rem;
  position: relative;
  border-radius: 2rem;
  background: black;
  overflow: hidden;
  background-clip: padding-box;
  border: solid 4px transparent;

  &:hover {
    cursor: pointer;
    border: 2px solid #888;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    opacity: 0.7;
  }

  & > h2 {
    position: absolute;
    left: 10%;
    top: 20%;
    z-index: 10;
    text-transform: capitalize;
    text-shadow: 1px 1px black;
  }
`;

const SmallCard: React.FC<SmallCardProps> = ({ image, title }) => {
  return (
    <CardWrapper>
      <h2>{title}</h2>
      <img src={image} alt={title + 'game image'} />
    </CardWrapper>
  );
};

export default SmallCard;
