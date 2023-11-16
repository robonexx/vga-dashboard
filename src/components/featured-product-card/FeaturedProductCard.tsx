import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// importing images
import CardBg from '../../assets/images/Image-9.png';
import CardCharacter from '../../assets/images/Image-2.png';
import CardBg2 from '../../assets/images/Image-11.png';
import CardCharacter2 from '../../assets/images/Image-3.png';
import Card from './Card';

const cardData = [
  {
    title: 'Assassins creed valhalla',
    price: 29,
    year: 2020,
    bg: CardBg,
    character: CardCharacter,
  },
  {
    title: 'Ghost of Tsushima',
    price: 39.99,
    year: 2020,
    bg: CardBg2,
    character: CardCharacter2,
  },
];

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  border-radius: 3.125rem;
`;

const FeaturedProductCard: React.FC = () => {
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return <CardContainer>{renderCard()}</CardContainer>;

  function renderCard() {
    const currentCard = cardData[cardIndex];
    return <Card key={cardIndex} {...currentCard} />;
  }
};

export default FeaturedProductCard;
