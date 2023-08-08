import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto d-flex justify-content-center">
                            <Nav.Link href="#">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#">
                                About
                            </Nav.Link>
                            <Nav.Link href="#">
                                Practice
                            </Nav.Link>
                            <Nav.Link href="#">
                                Directors
                            </Nav.Link>
                            <Nav.Link href="#">
                                Support
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;