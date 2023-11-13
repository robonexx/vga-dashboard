import { FC } from 'react';
import styled from 'styled-components';
import IMG from '../../assets/images/Image-5.png';

const ProfileContainer = styled.div`
  margin: 0.5rem;
  width: 2.625rem;
  height: 2.625rem;
  display: grid;
  place-content: center;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    width: 3.125rem;
    height: 3.125rem;
  }

  & > img {
    padding-top: 1rem;
    background: linear-gradient(to top, #1d1e22, #393939);
    width: 100%;
    height: 100%;
    filter: brightness(90%);

    &:hover {
      filter: brightness(100%);
      cursor: pointer;
    }
  }
`;

// if i would make it reusable

/* type ProfileImgProps = {
  image: string;
}; */

const ProfileImage: FC = () => {
  return (
    <ProfileContainer>
      <img src={IMG} alt='' />
    </ProfileContainer>
  );
};

export default ProfileImage;
