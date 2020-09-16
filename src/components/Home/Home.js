import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                
                <Col className="mx-auto" sm={8}>
                    <Slider></Slider>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;