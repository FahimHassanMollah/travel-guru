import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoggedInUserContext } from '../../App';
import logo from '../travel-guru-resources/Logo.png'
const Header = () => {
    const [user, setUser] = useContext(LoggedInUserContext);
    return (
        <div>
            <Navbar bg="" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="text-white bg-white"><img style={{ height: '40px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2 mx-5" />

                        </Form>
                        <Nav className="ml-auto ">
                            <Link to={`/`}>  <a className="btn px-4 text-primary link" >Home</a>
                            </Link>
                            <Link to={`/news`}>  <a className="btn px-4 text-primary link" >News</a>
                            </Link>
                            <Link to={`/destination`}>  <a className="btn px-4 text-primary link" >Destination</a>
                            </Link>
                            <Link to={`/blog`}>  <a className="btn px-4 text-primary link" >Blog</a>
                            </Link>
                            <Link to={`/contact`}>  <a className="btn px-4 text-primary link" >Contact</a>
                            </Link>
                           
                            <Link to={`/login`}>  <Button style={{ backgroundColor: '#F9A51A', border: "none", color: "black" }} className="px-4 " >{user.name ? `${user.name}` : "Login"}</Button>
                            </Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;