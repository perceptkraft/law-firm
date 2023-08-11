import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Fade from "react-reveal/Fade"

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
                              <Nav.Link href="#about" className='text-dark'>
                                    About
                                </Nav.Link>
                                <Nav.Link href="#ourteam" className='text-dark'>
                                    Our Team
                                </Nav.Link>
                                
                                <Nav.Link href="#litigation" className='text-dark'>
                                    Litigation
                                </Nav.Link>
                                <Nav.Link href="#contactus" className='text-dark'>
                                    Contact
                                </Nav.Link>
                                <Nav.Link href="#location" className='text-dark'>
                                    Location
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Fade>
    )
}

export default Header;