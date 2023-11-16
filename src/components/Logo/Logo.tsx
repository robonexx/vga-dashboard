import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LOGO from '../../assets/images/xbox_logo.png';

const LogoWrapper = styled.div`
  margin: 0;
  width: 2.625rem;
  height: 2.625rem;
  display: grid;
  place-content: center;

  @media screen and (min-width: 769px) {
    width: 3.25rem;
    height: 3.25rem;
  }
`;

const Logo: FC = () => {
  return (
    <LogoWrapper>
      <Link to='/'>
        <img src={LOGO} alt='' />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
