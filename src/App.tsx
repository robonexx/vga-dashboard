/* import { useState } from 'react' */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Dashboard from './pages/Dashboard';
import Gamedetails from './pages/Gamedetails';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
/* import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme } from './styles/GlobalStyles'; */

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    'aside header header header header header header'
    'aside dashboard dashboard dashboard dashboard dashboard dashboard'
    'aside dashboard dashboard dashboard dashboard dashboard dashboard'
    'aside dashboard dashboard dashboard dashboard dashboard dashboard'
    'aside dashboard dashboard dashboard dashboard dashboard dashboard';
`;

function App() {
  return (
    <BrowserRouter>
      {/*  <GlobalStyles theme={darkTheme} /> */}
      <Main>
        <Header>
          <p>Icons</p>
        </Header>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/gamedetails' element={<Gamedetails />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
