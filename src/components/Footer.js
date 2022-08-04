import React from 'react'
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container as='nav' fluid className='footer d-flex justify-content-center p-3 mt-3 border-top shadow' fixed='bottom'>
        Designed By Selami Demir
    </Container>
  )
}

export default Footer;