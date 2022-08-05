import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getGamer, getScore, setGamer, startNewGame} from '../redux/gameSlice';

function GameFinished() {
    const gamer = useSelector(getGamer);
    const score = useSelector(getScore);
    const dispatch = useDispatch();
    let bestScore = false;
    if(score > gamer.score) {
      const newUserData = { ...gamer, ...{score: score}};
      bestScore = true;
      // localStorage.setItem('snapixGamer', JSON.stringify(newUserData));
      dispatch(setGamer(newUserData));
    }
    
    const handleNewGame = (e) => {
      e.preventDefault();
      dispatch(startNewGame());
    }

  return (
    <div className='fs-3 text-center mt-5 p-5 rounded shadow'>
        <div><strong>Congratulations <span className='text-danger'>{ gamer.name }</span>. <br /> You have successfully completed the game.</strong> </div>

        <div><strong>You earned { score } points.</strong></div>

        { 
            bestScore &&
                <div>Great, you set a new record. :)</div>
        }
        <Button className='btn btn-primary btn-lg mt-3' onClick={(e) => handleNewGame(e)}>New Game</Button>
    </div>
  )
}

export default GameFinished;