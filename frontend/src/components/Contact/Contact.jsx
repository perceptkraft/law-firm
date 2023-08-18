import React from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Contact.css';
import Fade from 'react-reveal/Fade';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import LogoImage from "../../images/sliderlogo.png"

const Contact = () => {
    return (
        <div id="contactus">
            <Fade top>
                <h5 className='d-flex justify-content-center h1 mt-5'>Contact Us</h5>

                <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
            </Fade>

            <Container>
                <Form>
                    <Row>
                        <Col xs={1}></Col>
                        <Col lg={5} md={5} sm={5} xs={12} className='mt-5'>
                            <div className='mt-5'>

                                <div className='row'>
                                    <div className='col-6'>
                                        <Fade left>
                                            <Form.Group controlId="formBasicEmail" className='w-100'>
                                                <Form.Control type="email" className='w-100' size='lg' placeholder="First Name" required />
                                            </Form.Group>
                                        </Fade>
                                    </div>
                                    <div className='col-6'>
                                        <Fade left>
                                            <Form.Group controlId="formBasicPassword" className=''>
                                                <Form.Control type="password" className='w-100' size="lg" placeholder="Last Number" required />
                                            </Form.Group>
                                        </Fade>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Fade left>
                                            <Form.Group controlId="formBasicPassword" className='mt-4'>
                                                <Form.Control type="password" className='w-100' size="lg" placeholder="Email" required />
                                            </Form.Group>
                                        </Fade>
                                    </div>
                                    <div className='col-6'>
                                        <Fade left>
                                            <Form.Group controlId="formBasicPassword" className='mt-4'>
                                                <Form.Control type="password" className='w-100' size="lg" placeholder="Phone Number" required />
                                            </Form.Group>
                                        </Fade>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div>
                                        <Fade left>
                                            <Form.Group controlId="exampleForm.ControlTextarea1" className='mt-3'>
                                                <Form.Control as="textarea" rows={5} placeholder='Message...' />
                                            </Form.Group>
                                        </Fade>
                                    </div>
                                    <div className='mt-4'>
                                        <Fade left>
                                            <Button className='w-100' variant="danger" type="submit">
                                                Send
                                            </Button>
                                        </Fade>
                                    </div>
                                </div>

                            </div>

                        </Col>

                        <Col lg={5} md={5} sm={5} xs={12}>
                            <div className='contactInfo'>
                                <Fade right>
                                    <div className='contactInfodiv'>
                                        <div className='call-icon'>
                                            <p>
                                                <img src={LogoImage} alt="" className='w-25 h-25' />
                                            </p>
                                        </div>
                                        <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
                                        <div>
                                            <h5>+91 9076888888</h5>
                                        </div>
                                        <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
                                        <div>
                                            <p>
                                                Idnani Law Associates,<br />
                                                1st Floor, Keswani Complex,<br />
                                                Above Navjeevan Bank,<br />
                                                Near Civil Court,<br />
                                                Ulhasnagar - 421003,<br />
                                                Dist. Thane Mumbai
                                            </p>
                                        </div>
                                        <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%' }} />
                                        <div>
                                            mail@idnaniawassosicates.com<br />
                                        </div>
                                        <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
                                        <div className='socialmedia-icons'>
                                            <Row>
                                                <Col><p className='facebookIcon'><FaFacebook /></p></Col>
                                                <Col ><p className='twitterIcon'><FaTwitter /></p></Col>
                                                <Col ><p className='linkdinIcon'><FaLinkedin /></p></Col>
                                                <Col ><p className='youtubeIcon'><FaInstagram /></p></Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </Col>

                    </Row>
                </Form>
            </Container>
        </div >
    )
}

export default Contact;