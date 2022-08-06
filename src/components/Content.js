import React from 'react'
import { Container} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { getGameStatus } from '../redux/gameSlice';
import ContentHeader from './ContentHeader';
import ItemsList from './GameItemsList';
import GameFinished from './GameFinished';
import GameWaiting from './GameWaiting';

function Content() {
  const gameStatus = useSelector(getGameStatus);
  return (
    <Container className='game-container mt-3 pt-3 shadow rounded d-md-flex justify-content-between w-sm-100' style={{maxWidth: '720px'}}>
      
      <div style={{ maxWidth: '400px', minWidth: '400px' }}>
        {gameStatus === 'started' && <ItemsList />}
        {gameStatus === 'finished' && <GameFinished />}
        {gameStatus === 'waiting' && <GameWaiting />}
      </div>
      <div>
        <ContentHeader />
        
      </div>
      
    </Container>
  )
}

export default Content;