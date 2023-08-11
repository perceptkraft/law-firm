import React from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Contact.css';
import Fade from 'react-reveal/Fade';

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
                        <Col xs={5}>
                            <div className='mt-4'>
                                <Fade left>
                                    <Form.Group controlId="formBasicEmail" className='w-100'>
                                        <Form.Control type="email" className='w-100' size='lg' placeholder="Enter email" required />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword" className='mt-4'>
                                        <Form.Control type="password" className='w-100' size="lg" placeholder="Password" required />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1" className='mt-3'>
                                        <Form.Control as="textarea" rows={5} />
                                    </Form.Group>
                                    <div className='mt-4'>
                                        <Button className='w-100' variant="danger" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Fade>
                            </div>

                        </Col>

                        <Col xs={6}>
                            <div className='contactInfo'>
                                <Fade right>
                                    <div className='contactInfodiv'>
                                        <div className='call-icon'>
                                            <p>Icon</p>
                                        </div>
                                        <div>
                                            <h4>0123 456 789</h4>
                                        </div>
                                        <div>
                                            <p>Address</p>
                                        </div>
                                        <div>
                                            suport.mail@gmail.com
                                        </div>
                                        <div className='socialmedia-icons'>
                                            <Row>
                                                <Col ><p className='facebookIcon'>f</p></Col>
                                                <Col ><p className='twitterIcon'>T</p></Col>
                                                <Col ><p className='linkdinIcon'>L</p></Col>
                                                <Col ><p className='youtubeIcon'>Y</p></Col>
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