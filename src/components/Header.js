import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Header() {
    return (
        <Container className='mt-0 p-3 border-bottom header mx-auto shadow rounded-bottom' style={{maxWidth: '720px', minWidth: '400px'}}>
            <Row>
                <Col>
                    <h1>Snapix Game</h1>
                </Col>
            </Row>

        </Container>
    );
}

export default Header;