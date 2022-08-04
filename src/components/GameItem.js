import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cardVisibilityDuration } from '../assets/gamesDatas';
import { setCard, unSetCard, getCard1, getCard2 } from '../redux/gameSlice';

function GameItem({ item }) {
    const card1 = useSelector(getCard1);
    const card2 = useSelector(getCard2);

    const dispatch = useDispatch();

    const handleClick = () => {
        if (card1.name && card2.name) return false;
        dispatch(setCard(item));
        if (!card1.name && !card2.name) {
            setTimeout(() => {
                dispatch(unSetCard(item));
            }, cardVisibilityDuration);
        }
    }

    return (
        <Card className='game-item-card m-1 shadow' onClick={() => handleClick()}>
            <Card.Body className='game-item-card-body border p-1'>
                    {(card1.id === item.id || card2.id === item.id || item.found) && <img className='w-100' src={`images/frameworks/${item.name}.png`} alt={item.name} />}
            </Card.Body>
        </Card>
    )
}

export default GameItem;