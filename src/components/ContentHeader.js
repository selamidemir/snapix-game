import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getGameStatus, getScore, startNewGame } from '../redux/gameSlice';

function ContentHeader() {
    const gameStatusData = useSelector(getGameStatus);
    const dispatch = useDispatch();
    const score = useSelector(getScore);
    const handleStartNewGame = (e) => {
        e.preventDefault();
        dispatch(startNewGame());
    }

  return (
    <div className='d-flex justify-content-between'>
        {(gameStatusData === 'started' && <span>Your Score: {score}</span>) || <span> </span>}
        { gameStatusData === 'waiting' && <Button onClick={(e) => handleStartNewGame(e)}>New Game</Button>}
    </div>
  )
}

export default ContentHeader;