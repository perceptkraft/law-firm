import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Fade from "react-reveal/Fade";
import Logo from "../../images/IdnaniLogo02.png";
import { FaSearch } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    return (<>
        <Fade>
            <div className='headerClass sticky-top shadow' style={{ background: 'black' }}>
                <Navbar expand="lg" style={{ textTransform: 'uppercase', fontFamily: 'Montserrat', fontWeight: '400', letterSpacing: '2px', }}>
                    <Container fluid className='px-5'>
                        <Navbar.Brand href="#">
                            <img src={Logo} alt='' width="40px" height="100%" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className='d-flex justify-content-end' id="responsive-navbar-nav">
                            <Nav className="me-4">
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
                                <button class="btn btn-outline-light my-2 my-sm-0 rounded-5" type="submit" onClick={handleShow}>
                                    <FaSearch />
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Fade>
        <div>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                centered className='p-5'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='mt-4'>
                    <form>
                        <div class="form-group ">
                            <input type="text" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search Here..." />
                        </div>
                        <button type="button" class="mt-5 btn btn-outline-dark mt-4 w-100">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    </>
    )
}

export default Header;