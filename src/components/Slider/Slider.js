import React from 'react';

import Carousel from "react-elastic-carousel";
import "./styles.css";
import Sajek from '../travel-guru-resources/Image/Sajek.png'
import Sundorban from '../travel-guru-resources/Image/sundorbon.png'
import Sremongol from '../travel-guru-resources/Image/Sreemongol.png'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
];
const Slider = () => {
    return (
        <div>
            <div className="text-center">
                <Carousel breakPoints={breakPoints}>

                    <div className="">
                        <Card style={{ width: '18rem', border: 'none' }} className="">
                            <Card.Img variant="top" style={{ height: "300px" }} src={Sremongol} />
                            <Card.Body className="bg-white">
                                <Card.Title>Sreemangal</Card.Title>
                                <Card.Text>
                                    <small>Sylhet may be the primary city in the eponymous division, but sylvan Srimangal is the undoubted star of this region. Blessed with rolling hills carpeted with endless tea plantations, dense forest sanctuaries and a sprinkling of tribal.</small>
                                </Card.Text>
                                <Link to={`/booking/${'Sreemangal'}`}>  <Button style={{ backgroundColor: '#F9A51A', border: "none", color: "black" }} className="" >Booking</Button> </Link>
                              

                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '18rem', border: "none" }}>
                            <Card.Img variant="top" style={{ height: "300px" }} src={Sundorban} />
                            <Card.Body>
                                <Card.Title>Sundarbans</Card.Title>
                                <Card.Text>
                                    <small>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh</small>
                                </Card.Text>
                                <Link to={`/booking/${'Sundarbans'}`}> <Button style={{ backgroundColor: '#F9A51A', border: "none", color: "black" }} className="" >Booking</Button>
                                </Link>

                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '18rem', border: "none" }}>
                            <Card.Img variant="top" style={{ height: "300px" }} src={Sajek} />
                            <Card.Body>
                                <Card.Title>Cox's bazar</Card.Title>
                                <Card.Text>
                                    Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it.
                                    </Card.Text>
                                <Link to={`/booking/${"Cox's-bazar"}`}> <Button style={{ backgroundColor: '#F9A51A', border: "none", color: "black" }} className="" >Booking</Button>
                                </Link>

                            </Card.Body>
                        </Card>
                    </div>


                </Carousel>
            </div>
        </div>
    );
};

export default Slider;