import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Fade from "react-reveal/Fade";
import Logo from "../../images/sliderlogo.png";
import { FaSearch } from 'react-icons/fa'

const Header = () => {
    return (

        <Fade top>
            <div className='headerClass sticky-top shadow bg-dark'>
                <Navbar expand="lg"  style={{ textTransform: 'uppercase', fontFamily: 'Roboto', fontWeight: '600' }}>
                    <Container>
                        <Navbar.Brand href="#"><img src={Logo} alt='' width="40px" height="40px"  /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto d-flex justify-content-center">
                                <Nav.Link href="#about" className='text-light'>
                                    About
                                </Nav.Link>
                                <Nav.Link href="#ourteam" className='text-light'>
                                    Our Team
                                </Nav.Link>

                                <Nav.Link href="#litigation" className='text-light'>
                                    Litigation
                                </Nav.Link>
                                <Nav.Link href="#contactus" className='text-light'>
                                    Contact
                                </Nav.Link>
                                <Nav.Link href="#location" className='text-light'>
                                    Location
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <form class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-light my-2 my-sm-0 rounded-5" type="submit">
                                        <FaSearch />
                                    </button>
                                </form>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Fade>
    )
}

export default Header;