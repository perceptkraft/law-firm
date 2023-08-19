import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Fade from "react-reveal/Fade";
import Logo from "../../images/Asset 1.png";
import { FaSearch } from 'react-icons/fa'

const Header = () => {

    return (<>
        <Fade>
            <div className='headerClass sticky-top shadow' style={{ background: 'black' }}>
                <Navbar expand="lg" style={{ textTransform: 'uppercase', fontFamily: 'Roboto', fontWeight: '400', letterSpacing: '2px', height: '100%' }}>
                    <Container >
                        <Navbar.Brand href="#"  style={{ border: 'solid', borderRight: '1px solid #A59269' }}>
                            <div className='pe-5'>
                                <img src={Logo} alt='' style={{ width:"180px" , height:"100%" }} />
                            </div>
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
    </>
    )
}

export default Header;