import React from 'react';
import styled from 'styled-components';
import ShopIcon from '../../../assets/icons/akar-icons_cart.svg';

const Btn = styled.button`
  position: relative;
  width: 120px;
  height: 42px;
  border-radius: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;
  transition: all 0.4s linear;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: 73px;
    background-image: radial-gradient(circle, #3dbda7, #3dbda7);
    pointer-events: fill;
  }

  &:hover:before {
    cursor: pointer;
    background-image: radial-gradient(circle, #3dbda7, #067d71);
  }

  & > img {
    margin-right: 0.5rem;
    width: 24px;
    height: 24px;
    pointer-events: none;
  }

  & > h4 {
    font-size: 0.75rem;
    font-weight: 700;
    pointer-events: none;
  }
`;

const ShopNow: React.FC = () => {
  return (
    <Btn>
      <img src={ShopIcon} alt='shopping card svg' />
      <h4>Buy Now</h4>
    </Btn>
  );
};

export default ShopNow;
