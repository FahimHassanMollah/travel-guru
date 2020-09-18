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
                    <Link to={`/`}>
                        <Navbar.Brand className="text-white bg-white"><img style={{ height: '40px' }} src={logo} alt="" /></Navbar.Brand> </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2 mx-5" />

                        </Form>
                        <Nav className="ml-auto ">
                            <Link to={`/`} className="btn px-3 text-primary link"> Home
                            </Link>
                            <Link to={`/news`} className="btn px-3 text-primary link">News
                            </Link>
                            <Link to={`/destination`} className="btn px-2 text-primary link"> Destination
                            </Link>
                            <Link to={`/blog`} className="btn px-3 text-primary link">  Blog
                            </Link>
                            <Link to={`/contact`} className="btn px-3 text-primary link">Contact
                            </Link>

                             {
                                user.email ? <a className="btn px-2 text-danger link " >{ user.name}</a>
                                    :
                                    <Link to={`/login`}>  <Button style={{ backgroundColor: '#F9A51A', border: "none", color: "black" }} className="px-2 " >log in</Button>
                                    </Link>
                            }
                            {
                                user.email && <Link to={`/`}>  <Button onClick={() => setUser({})} style={{ backgroundColor: '#F9A51A', border: "none", color: "black" }} className="mx-2  " >Log out</Button>
                                </Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;