import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { hotel } from '../../FakeData/fakeData';
import Header from '../Header/Header';
import RoomDetails from '../RoomDetails/RoomDetails';

const HotelRoom = () => {
    let { id } = useParams();
    const [roomDetails, setRoomDetails] = useState(hotel);

    return (
        <div>
            <div><Header></Header></div>
            <div>
                <Container>
                    <Row>
                        <Col sm={5} className="mt-3 p-4">
                            <div className="p-3">
                                <small className="text-muted">252 stays Apr 13-17 3 guests</small>
                                <br />
                                <span className="text-muted">Stay in</span>
                                <span className="text-success display-2" style={{ fontSize: "20px", fontWeight: "bold" }}>{` ${id}`}</span>
                            </div>

                            <Row className="py-2">
                                {roomDetails.map((room) => <RoomDetails data={room} key={room.id}></RoomDetails>)}
                            </Row>
                        </Col>
                        <Col sm={7}>
                            mappppppppppppppppp
                    </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default HotelRoom;