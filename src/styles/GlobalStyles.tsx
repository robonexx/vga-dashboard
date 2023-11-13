import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface Theme {
  backgroundColor: string;
  color: string;
  btnBg: string;
  btnColor: string;
  btnHover: string;
  // might add types
}

interface MyDefaultTheme extends DefaultTheme {
  theme: Theme;
}

// if i decide to add the dark and light i will separate this
export const darkTheme = {
  color: '#fafafa',
  backgroundColor: '#1D1E22',
  btnBg: '#3DBDA7',
  btnColor: '#F0F4F8',
  btnHover: '#484848',
  // will add more properties
};

export const GlobalStyles = createGlobalStyle<MyDefaultTheme>`
  body {
    height: 100%;
    position: relative;
    display: flex;
    place-items: center;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    overflow-x: hidden;
  }
`;
