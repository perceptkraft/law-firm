import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Fade from "react-reveal/Fade";
import './Litigation.css';

const Litigation = () => {
    return (<>
        <div className=''></div>
        <div id="litigation" className='article' style={{ backgroundColor: 'black', color: 'white' }}>
            <div>
                <Fade top>
                    <h5 className='d-flex justify-content-center h1 mt-2'>Support</h5>

                    <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
                </Fade>
            </div>
            <div style={{ marginTop: '2%' }}>
                <Container>

                    <Row>

                        <Col xs={1}>

                        </Col>

                        <Col lg={5} md={5} sm={5} xs={12}>
                            <Fade left delay={700}>
                                <div className='mt-5' style={{ lineHeight: '250%' }}>
                                    <h3 style={{ textAlign: 'start', marginLeft: '30px' }}>Litigation Support</h3>
                                    <ul style={{ textAlign: 'start', listStyle: 'none' }}>
                                        <li>Civil Litigation for recovery and damages</li>
                                        <li>Assistance under the alternative remedies</li>
                                        <li>Litigation under section 138 of the negotiable instruments act, 1881</li>
                                        <li>Litigation under matrimonial laws</li>
                                        <li>Litigation under the Consumer Protection Act, 1986</li>
                                        <li>Litigation under the various labour laws</li>
                                        <li>Litigation under the Maharashtra Rent Control Act, 1999 and The Maharashtra Regional and Town Planning Act, 1966</li>
                                        <li>Criminal Litigation in Lower courts and High Courts through associates</li>
                                    </ul>
                                </div>
                            </Fade>
                        </Col>

                        <Col lg={5} md={5} sm={5} xs={12}>
                            <Fade left delay={1400}>
                                <div className='mt-5' style={{ lineHeight: '250%' }}>
                                    <h3 style={{ textAlign: 'start', marginLeft: '30px' }}>AREAS OF PRACTICE</h3>
                                    <ul style={{ textAlign: 'start', listStyle: 'none' }}>
                                        <li>Opinion and assistance on various Corporation queries and day to day compilance requirements</li>
                                        <li>Drafting , Review and negotiation of Commercial contracts in Real Estate</li>
                                        <li>Title Certificate for property and project due diligence</li>
                                        <li>Trademark application Filing</li>
                                        <li>Drafting of contracts and preparationof standard format templates</li>
                                        <li>Scrutinizing of legal report and Title Search Report regarding day to day compilance requirements</li>
                                    </ul>
                                </div>
                            </Fade>
                        </Col>

                    </Row>
                </Container>
            </div>

        </div>
    </>
    )
}

export default Litigation