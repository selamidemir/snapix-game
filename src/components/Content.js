import React from 'react'
import { Container } from 'react-bootstrap'
import ContentHeader from './ContentHeader';
import ItemsList from './GameItemsList';

function Content() {

  return (
    <Container className='game-container mt-3 p-3 w-50 shadow rounded'>
        <ContentHeader />
        <ItemsList />
    </Container>
  )
}

export default Content;