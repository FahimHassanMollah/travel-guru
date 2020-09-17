import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../travel-guru-resources/Logo.png'
const Header = () => {
    return (
        <div>
            <Navbar bg="" expand="lg" >
             <Container>
             <Navbar.Brand href="#home" className="text-white bg-white"><img style={{height:'40px'}} src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                        <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2 mx-5" />
                       
                    </Form>
                    <Nav className="ml-auto ">
                        <Nav.Link href="#link" className="px-4 text-primary">News</Nav.Link>
                        <Nav.Link href="#link" className="px-4 text-primary">Destination</Nav.Link>
                        <Nav.Link href="#home" className="px-4 text-primary">Home</Nav.Link>
                        <Nav.Link href="#link" className="px-4 text-primary">Blog</Nav.Link>
                        <Nav.Link href="#link" className="px-4 text-primary">Contact</Nav.Link>
                        <Link to={`/login`}>  <Button style={{backgroundColor:'#F9A51A',border:"none",color:"black"}} className="px-4 " >Login</Button>
                                </Link>
                       
                    </Nav>
                   
                </Navbar.Collapse>
             </Container>
            </Navbar>
        </div>
    );
};

export default Header;