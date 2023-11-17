import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  RiPlaystationLine,
  RiXboxFill,
  RiMacLine,
  RiWindowsFill,
  RiAndroidLine,
  RiAppleFill,
} from 'react-icons/ri';
import { DiLinux } from 'react-icons/di';
import { SiNintendo } from 'react-icons/si';
import { GameItemProps } from '../types/Types';

const API_URL: string = import.meta.env.VITE_APP_API_URL as string;
const API_KEY: string = import.meta.env.VITE_APP_API_KEY as string;

const Details = styled.div`
  grid-area: dashboard;
  position: relative;
  margin: 0 auto 4.125rem;
  height: 100%;
  display: grid;
  place-content: center;

  & > div {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
      margin-bottom: 2rem;
      width: 100%;
      text-align: center;
      font-size: clamp(1.5rem, 2vw, 2.5rem);
      line-height: 1;
    }

    & > img {
      width: 30rem;
      height: auto;
      top: 0;
      border-radius: 3.125rem;
      object-fit: cover;
    }

    & > h4 {
      height: fit-content;
      font-size: 0.8rem;
      overflow: hidden;
    }

    .game_info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.25rem 0.5rem;
    }

    span {
      font-size: 1rem;
      padding: 0.2rem;
    }

    .icon {
      font-size: 2rem;
    }
  }

  .date {
    color: #888;
  }

  .thumbnails {
    margin: 0 auto;
    max-width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to top left, #252525, #2c2c2c, #1f1f1f);
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.185);
    border-radius: 2rem;

    .thumbnail {
      margin: 1rem;
      max-width: 25%;
      height: auto;
      border-radius: 2rem;
    }
  }

  .go_back {
    text-decoration: none;
    position: absolute;
    top: 0vh;
    left: 0rem;
    margin: 2rem auto 0;
    padding: 1rem 2rem;
    width: 8.875rem;
    height: 3.25rem;
    border-radius: 25px;
    display: grid;
    place-content: center;
    color: white;
    border: 1px solid #3dbda7;
    border-radius: 2rem;
    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: #3dbda7;
      color: #282828;
    }
  }
`;

const SaveBtn = styled.button`
  position: absolute;
  left: auto;
  top: auto;
  bottom: 10vh;
  right: 30vw;
  width: 8.875rem;
  height: 3.25rem;
  border-radius: 25px;
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
`;

const MsgContainer = styled.div`
  position: absolute;
  top: auto;
  bottom: 40vh;
  left: auto;
  right: 28vw;
  & > p {
    max-width: 300px;
    padding: 1rem 2rem;
    color: white;
    border-radius: 2rem;
    border: 1px solid #888;
  }
`;

const variants = {
  show: { opacity: 1, x: 0 },
  hide: { opacity: 0, x: 300 },
};

const GameDetails: React.FC = () => {
  const [showMsg, setShowMsg] = useState(false);
  const [game, setGame] = useState<GameItemProps>();
  const { gameId } = useParams();
  console.log(gameId);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`${API_URL}/${gameId}?key=${API_KEY}`);
        const data = await response.json();
        setGame(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGame();
  }, [gameId]);

  const saveGame = () => {
    if (game) {
      const mygames = JSON.parse(localStorage.getItem('mygames') || '[]');

      if (
        !mygames.some((savedGame: { id: number }) => savedGame.id === game.id)
      ) {
        mygames.push(game);
        window.localStorage.setItem('mygames', JSON.stringify(mygames));
        setShowMsg(true);
        setTimeout(() => {
          setShowMsg(false);
        }, 3000);
      }
    }
  };

  const handleClick = () => {
    saveGame();
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 3000);
  };

  return (
    <>
      <MsgContainer>
        <motion.p variants={variants} animate={showMsg ? 'show' : 'hide'}>
          Saved game to library
        </motion.p>
      </MsgContainer>
      <SaveBtn onClick={() => handleClick()}>Save game</SaveBtn>
      <Details>
        {game ? (
          <div>
            <h1>{game.name.toUpperCase()}</h1>
            <img src={game.background_image} alt={game.name} />
            <div className='game_info'>
              <span>Score: {game.rating}/5</span>
              <span className='date'>Relased: {game.released}</span>
              <div>
                {game.parent_platforms.map((p, index) => (
                  <React.Fragment key={index}>
                    <span className='icon'>
                      {p.platform.name ? (
                        p.platform.name === 'PC' ? (
                          <RiWindowsFill />
                        ) : p.platform.name === 'PlayStation' ? (
                          <RiPlaystationLine />
                        ) : p.platform.name === 'Xbox' ? (
                          <RiXboxFill />
                        ) : p.platform.name === 'Nintendo' ? (
                          <SiNintendo />
                        ) : p.platform.name === 'Apple Macintosh' ? (
                          <RiMacLine />
                        ) : p.platform.name === 'Linux' ? (
                          <DiLinux />
                        ) : p.platform.name === 'Android' ? (
                          <RiAndroidLine />
                        ) : p.platform.name === 'iOS' ? (
                          <RiAppleFill />
                        ) : null
                      ) : (
                        p.platform.name
                      )}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className='thumbnails'>
              {game.short_screenshots &&
                game.short_screenshots.map((s) => (
                  <img className='thumbnail' src={s.image} alt='thumbnail' />
                ))}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <Link to='/' className='go_back'>
          {' '}
          Go back{' '}
        </Link>
      </Details>
    </>
  );
};

export default GameDetails;
