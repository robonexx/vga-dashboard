import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Dashboard from './pages/Dashboard';
import Gamedetails from './pages/Gamedetails';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import SearchBar from './components/searchbar/SearchBar';
import Icon from './components/icons/Icon';
import Bell from './components/icons/Bell';
import PaperPlane from './components/icons/PaperPlane';
import ProfileImage from './components/profileimage/ProfileImage';

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

const API_URL: string = import.meta.env.VITE_APP_API_URL as string;
const API_KEY: string = import.meta.env.VITE_APP_API_KEY as string;
const API_GAMES: string = `${API_URL}?key=${API_KEY}`;

function App() {
  const [games, setGames] = useState<unknown[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getGames = async (URL: string) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      if (!res.ok) {
        console.log('error getting data');
        return;
      } else {
        setGames(data.results);
        console.log(data.results);
      }
    } catch (error) {
      console.log(error + 'something went wrong');
    }
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      getGames(`${API_URL}?key=${API_KEY}&search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_GAMES);
        const data = await res.json();
        if (!res.ok) {
          console.log('error getting data');
          return;
        } else {
          setGames(data.results);
          setLoading(false);
        }
      } catch (error) {
        console.log(error + 'something went wrong');
      }
    };

    fetchData();
  }, []);

  console.log(games);

  return (
    <BrowserRouter>
      <Main>
        <Header>
          <SearchBar
            searchQuery={searchQuery}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
          <div>
            <Icon
              variant='secondary'
              onClick={() => console.log('hello world')}
              iconSvg={<Bell />}
            />
            <Icon
              variant='tertiary'
              onClick={() => console.log('hello world')}
              iconSvg={<PaperPlane />}
            />
            <ProfileImage />
          </div>
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
