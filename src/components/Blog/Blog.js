import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div className=" blog-body">

                <Container>
                    <Row>
                        <Col sm={6} className="mx-auto">
                            <img src={`https://traversecityboardgamers.com/wp-content/uploads/2019/04/istockphoto-516590789-612x612.jpg`} alt="" />
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Blog;