import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { hotel } from '../../FakeData/fakeData';
import Header from '../Header/Header';
import Maps from '../Map/Maps';
import RoomDetails from '../RoomDetails/RoomDetails';

const HotelRoom = () => {
    let lat;
    let lng;
    let { id } = useParams();
    if (id === "Sundarbans") {
        lat = 21.9497;
        lng = 89.1833;
    }
    else if (id === `Cox's-bazar`) {
        lat = 21.427229;
        lng = 92.005806;
    }
    else if (id === "Sreemangal") {
        lat = 24.310577;
        lng = 91.725136;
    }
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
                                <span className="text-success " style={{ fontSize: "26px", fontWeight: "bold" }}>{` ${id}`}</span>
                            </div>

                            <Row className="py-2">
                                {roomDetails.map((room) => <RoomDetails data={room} key={room.id}></RoomDetails>)}
                                {/* ("AIzaSyAtNWUzr1ga2y-y0hzrUrkZmbn7qqT0_jk") */}
                            </Row>
                        </Col>
                        <Col sm={7} className="p-5">
                            <Container className="">
                                <Maps lat={lat} lng={lng}></Maps>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default HotelRoom;