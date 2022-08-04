import React, { useEffect } from 'react';
import GameItem from './GameItem';
import { useDispatch, useSelector } from 'react-redux';
import { endGame, getCard1, getCard2, getFoundCards, getGameItems, setCardsFound, setCardsNotFound } from '../redux/gameSlice';
import { Container } from 'react-bootstrap';

function GameItemsList() {
  const dispatch = useDispatch();
  const gameItems = useSelector(getGameItems);
  const foundCards = useSelector(getFoundCards);
  const card1 = useSelector(getCard1);
  const card2 = useSelector(getCard2);

  useEffect(() => {
    if(card1.name && card2.name && card1.name === card2.name) {
      dispatch(setCardsFound());
    } else if(card1.name && card2.name && card1.name !== card2.name) {
      dispatch(setCardsNotFound());
    } 
  }, [dispatch, card1.name, card2.name]);

  useEffect(() => {
    if(foundCards >= 30) {
      dispatch(endGame());
    }
  }, [dispatch, foundCards]);

  return (
    <Container className='w-75'>
   
        {
          gameItems.map((item, key) => <GameItem item={item} key={key} />)
        }
        <hr />

    </Container>
  )
}

export default GameItemsList;