import { FC } from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

// icons
import Icon from '../icons/Icon';
import HomeIcon from '../icons/HomeIcon';
import FriendsIcon from '../icons/FriendsIcon';
import ChatIcon from '../icons/ChatIcon';
import ShopIcon from '../icons/ShopIcon';
import StarIcon from '../icons/StarIcon';

const SidebarWrapper = styled.div`
  grid-area: aside;
  padding: 1.75rem;
  width: 100%;
  height: 100svh;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1d1e22;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.185);

  @media screen and (min-width: 769px) {
    padding: 2.625rem 1.75rem;
    width: 7.625rem;
    flex-direction: column;
  }
`;

const SideNav = styled.nav`
  margin-top: 10vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Sidebar: FC = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <SideNav>
        <Icon
          variant='primary'
          onClick={() => console.log('hello world')}
          iconSvg={<HomeIcon />}
        />
        <Icon
          variant='primary'
          onClick={() => console.log('hello world')}
          iconSvg={<FriendsIcon />}
        />
        <Icon
          variant='primary'
          onClick={() => console.log('hello world')}
          iconSvg={<ChatIcon />}
        />
        <Icon
          variant='primary'
          onClick={() => console.log('hello world')}
          iconSvg={<ShopIcon />}
        />
        <Icon
          variant='primary'
          onClick={() => console.log('hello world')}
          iconSvg={<StarIcon />}
        />
      </SideNav>
    </SidebarWrapper>
  );
};

export default Sidebar;
