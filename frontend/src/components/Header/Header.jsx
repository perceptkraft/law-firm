import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Fade from "react-reveal/Fade"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Fade top>
            <div className='headerClass sticky-top shadow bg-light'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#">Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto d-flex justify-content-center">

                                <Link to="/">Home</Link>

                                <Link to="/about">About</Link>

                                <Link to="/PracticeArea">Practice</Link>

                                <Link to="/about">About</Link>
                                {/* <Nav.Link href="/PracticeArea" className='text-dark'>
                                    Practice
                                </Nav.Link>
                                <Nav.Link href="/OurTeam" className='text-dark'>
                                    Directors
                                </Nav.Link>
                                <Nav.Link href="/Litigation" className='text-dark'>
                                    Litigation
                                </Nav.Link>
                                <Nav.Link href="/Location" className='text-dark'>
                                    Location
                                </Nav.Link> */}
                            </Nav>
                            <Nav>
                                {/* <Nav.Link eventKey={2} href="/Contact" className='text-dark'>
                                    Contact Us
                                </Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Fade>
    )
}

export default Header;