import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Fade from "react-reveal/Fade";
import Logo from "../../images/Asset 1.png";
import { FaSearch } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    return (<>
        <Fade>
            <div className='headerClass sticky-top shadow' style={{ background: 'black' }}>
                <Navbar expand="lg" style={{ textTransform: 'uppercase', fontFamily: 'Roboto', fontWeight: '400', letterSpacing: '2px', }}>
                    <Container>
                        <Navbar.Brand href="#">
                            <img src={Logo} alt='' width="90px" height="100%" />
                        </Navbar.Brand>
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
                                    <button class="btn btn-outline-light my-2 my-sm-0 rounded-5" type="submit" onClick={handleShow}>
                                        <FaSearch />
                                    </button>
                                </form>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </div>
        </Fade>
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className='form-control' />
                    <button type="submit" className='btn btn-outline-dark mt-4'>Submit</button>
                </Modal.Body>
            </Modal>
        </div>
    </>
    )
}

export default Header;