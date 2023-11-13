import React from 'react';
import styled from 'styled-components';

type IconProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  iconSvg?: React.ReactNode;
  variant?: string;
};

const StyledIcon = styled.div<{ variant?: string }>`
  margin: 0.5rem;
  padding: 0.25rem;
  border-radius: 50%;
  display: grid;
  place-content: center;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
        width: 3rem;
        height: 3rem;
        background-color: transparent;
        transition: all 0.3s ease;
        &:hover {
        cursor: pointer;
        background-color: #3DBDA7;
        }

        @media screen and (min-width: 769px) {
        width: 4.375rem;
        height: 4.375rem;
    }

    &>img {
        width: 2rem
        height: 2rem;

        @media screen and (min-width: 769px) {
        width: 2.375rem;
        height: 2.375rem;
    }
    }
    `;

      case 'secondary':
        return `
        width: 2.625rem;
        height: 2.375rem;

    @media screen and (min-width: 769px) {
          width: 3.438rem;
          height: 3.125rem;
        }
        ackground: linear-gradient(to top, #1D1E22,#393939);

    &:hover {
      cursor: pointer;
    }
    > svg {
      stroke: white;
    }
    }
        `;
      case 'tertiary':
        return `
        width: 2.625rem;
        height: 2.375rem;

    @media screen and (min-width: 769px) {
          width: 3.438rem;
          height: 3.125rem;
        }
        background: linear-gradient(to top, #3DBDA7,#278a79);

    &:hover {
      cursor: pointer;
    }
    &>img {
        width: 1.125rem;
        height: 1.125rem;

        @media screen and (min-width: 769px) {
          width: 1.5rem;
          height: 1.5rem;
        }
    }
        `;
      default:
        return ''; // Default styles for unknown variants
    }
  }}
`;

const Icon = ({ iconSvg, onClick, variant }: IconProps) => {
  return (
    <StyledIcon onClick={onClick} as='div' variant={variant}>
      {iconSvg}
    </StyledIcon>
  );
};

export default Icon;
