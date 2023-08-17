import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Fade from "react-reveal/Fade";
import Logo from "../../images/sliderlogo.png";
import { FaSearch } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'

const Slider = (id) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true)

    return (<>
        <div className='blr-image'>
            <Fade top>
                <div className='headerClass sticky-top shadow' style={{ background: 'transparent' }}>
                    <Navbar expand="lg" style={{ textTransform: 'uppercase', fontFamily: 'Roboto', fontWeight: '400', letterSpacing: '2px', }}>
                        <Container>
                            <Navbar.Brand href="#"><img src={Logo} alt='' width="100px" height="80px" /></Navbar.Brand>
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
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                    </Modal.Body>
                </Modal>
            </div>
            <div className='blr-image'></div>
            <div className='bg-text'>
                <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                    <Carousel.Item>
                        <h3>First slide label</h3>
                        <p></p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Second slide label</h3>
                        <p></p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Third slide label</h3>
                        <p></p>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    </>
    )
}

export default Slider;