import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGamer, getGameStatus, getScore, setGamer, setGameStatus, startNewGame } from '../redux/gameSlice';

function ContentHeader() {
  const gameStatusData = useSelector(getGameStatus);
  const dispatch = useDispatch();
  const score = useSelector(getScore);
  const gamer = useSelector(getGamer);

  const handleStartNewGame = (e) => {
    e.preventDefault();
    if (!gamer.name) {
      const name = window.prompt('What is your name? ');
      const newGamer = {
        id: nanoid(),
        name: name,
        score: 0
      }
      dispatch(setGamer(newGamer));
    }

    dispatch(startNewGame());
  }

  const handleResetGame = (e) => {
    e.preventDefault();
    dispatch(setGameStatus(''));
    setTimeout(() => dispatch(startNewGame()), 350)
    
  }

  return (
    <div className='d-block text-primary pb-3'>
      {
        gamer.name &&
        <span className='fw-bolder fs-4 text-success'>
          <span className='d-inline-block mt-1 mb-2 me-3 bg-light px-3 py-1 shadow rounded' style={{width: '290px'}}>Welcome {gamer.name}</span> 
          <span className='d-inline-block mb-2 me-3 bg-light px-3 py-1 shadow rounded' style={{width: '290px'}}>Your Best Score: <span className='text-danger'>{gamer.score}</span></span>
          { gameStatusData === 'started' && <span className='d-inline-block mb-2 me-3 bg-light px-3 py-1 shadow rounded' style={{width: '290px'}}>Your Score: <span className='text-danger'>{score}</span></span>}
          {gameStatusData === 'waiting' && <span className='d-inline-block mb-2 me-3 bg-light px-3 py-1 shadow rounded'><a href='/#' className='header-a-button' onClick={(e) => handleStartNewGame(e)} style={{width: '290px'}}>New Game</a></span>}
          {gameStatusData === 'started' && <span style={{width: '290px'}}className='d-inline-block mb-2 me-3 bg-light px-3 py-1 shadow rounded'><a href='/#' className='header-a-button' onClick={(e) => handleResetGame(e)} >Reset Game</a></span>}
        </span>
      }
      {
        !gamer.name && <span className='d-inline-block fw-bolder fs-4 text-success mb-2 me-3 bg-light px-3 py-1 shadow rounded'><a href='/#' className='header-a-button' onClick={(e) => handleStartNewGame(e)}>New Game</a></span>
      }

    </div>
  )
}

export default ContentHeader;