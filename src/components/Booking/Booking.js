import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Booking.css';


const Booking = () => {
    let { id } = useParams();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [origin, setorigin] = useState();
    const [destination, setdestination] = useState(id);
    const bookingHandler = (e) => {
        if (origin&&destination&&startDate&&endDate) {
            alert('congo man...............')
        }
        e.preventDefault()
    }
    const adressHandler = (e) => {
        let validator=false;
        if(e.target.value){
            validator=/^[a-zA-Z0-9\s,'-]*$/.test(e.target.value);
        }
        if (validator) {
            console.log(e.target.value);
            setorigin(e.target.value)
        }else{
            setorigin("")
            alert('please enter valid adress')
        }


    }
    let details;
    if (id === "Cox's-bazar") {
        details = ` Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it. `
    }
    else if (id === "Sreemangal") {
        details = `Sylhet may be the primary city in the eponymous division, but sylvan Srimangal is the undoubted star of this region. Blessed with rolling hills carpeted with endless tea plantations, dense forest sanctuaries and a sprinkling of tribal.`
    }
    else if (id === "Sundarbans") {
        details = `The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh`
    }
    return (
        <div>
            <div className="background text-white">
                <div className="opacity">
                    <Header></Header>
                    <Container className="mt-5">
                        <Row>
                            <Col className="mx-auto pt-4" sm={5}>
                                <div>
                                    <h2 className="font-weight-bold display-3">{id}</h2>
                                    <h6 className="pt-3 d-block">{details}</h6>
                                    <div>
                                        <p>{origin}</p>
                                         <p>{destination}</p>
                                        {/* <p></p> */}
                                    </div>
                                </div>
                            </Col>
                            <Col className="mx-auto pt-4" sm={7}>
                                <Container>
                                    <div className="p-5 bg-white text-dark">
                                        <Form onSubmit={bookingHandler}>
                                            <Form.Group controlId="formGridAddress1">
                                                <Form.Label>Origin</Form.Label>
                                                <Form.Control onChange={adressHandler} required placeholder="" />
                                            </Form.Group>

                                            <Form.Group controlId="formGridAddress2">
                                                <Form.Label>Destination </Form.Label>
                                                <Form.Control value={id} disabled />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>Form</Form.Label>

                                                    <DatePicker required showYearDropdown scrollableYearDropdown minDate={(new Date())} selected={startDate} onChange={date => setStartDate(date)}></DatePicker>  <span><FontAwesomeIcon className="fa-1x" icon={faCalendar} /></span>
                                                </Form.Group>



                                                <Form.Group as={Col} controlId="formGridZip">
                                                    <Form.Label>To</Form.Label>
                                                    <DatePicker required showYearDropdown scrollableYearDropdown minDate={(new Date())} selected={endDate} onChange={date => setEndDate(date)} ></DatePicker>  <span><FontAwesomeIcon className="fa-1x" icon={faCalendar} /></span>
                                                </Form.Group>
                                            </Form.Row>



                                            <Button variant="primary" block type="submit">
                                                Start Booking
                                </Button>
                                        </Form>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Booking;