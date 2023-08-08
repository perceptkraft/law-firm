import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SidePhoto from "../../images/sidephoto.jpg";

const PracticeArea = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={5}>
                        <div className='mt-5'>
                            <h3>AREAS OF PRACTICE</h3>
                            <ul>
                                <li>Civil & Criminal Litigation laws</li>
                                <li>Labour & Employment</li>
                                <li>Compliances</li>
                                <li>Structuring & Negotiation of Contracts</li>
                                <li>Dispute Resolution</li>
                                <li>Intellectual property & Information Technology</li>
                                <li>Compilance, Bribery & Anti-corruption Laws</li>
                                <li>Joint Ventures</li>
                                <li>Real Estate</li>
                                <li>Income Tax and GST</li>
                                <li>Competition Law</li>
                                <li>Matrimonial Disputes</li>
                                <li>Litigation</li>
                                <li>Trademark</li>
                                <li>Matter related to Municipal Corporation</li>
                                <li>Tender Contracts</li>
                                <li>Building Permissions</li>
                                <li>Property Tax</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={2} className='mt-5' >
                        <img src={SidePhoto} alt="" style={{ width: '150%', height: '100%' }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PracticeArea