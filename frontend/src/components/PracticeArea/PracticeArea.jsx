import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import StructuringNegotiationOfContracts from '../../images/StructuringNegotiationOfContracts.png';
import DisputeResolution from '../../images/DisputeResolution.png';
import IntellectualPropertyInformationTechnology from '../../images/IntellectualPropertyInformationTechnology.png';
import Fade from 'react-reveal/Fade';
import './PracticeArea.css';

const PracticeArea = () => {
    return (
        <div id="practicearea">
            <Fade top>
                <h5 className='d-flex justify-content-center h1 mt-5'>Areas OF Practice</h5>
                <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
            </Fade>

            <div className='article' style={{ backgroundColor: 'black', color: 'white', height: '100%', marginTop: '4%', textAlign: 'center' }}>
                <Carousel indicators={false}>

                    <Carousel.Item>
                        <div class="row row-cols-3 row-cols-md-5 g-5 mb-5">
                            <div className='col'></div>
                            <div class="col">
                                <div class="card h-100 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='justify-content-center align-items-center ' style={{ border: '1px solid white', borderRadius: '50%', padding: '50px', width: '75%', height: '100%' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='justify-content-center align-items-center mt-3' style={{ width: '50%', height: '75%' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Structuring & Negotiation of Contracts</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='justify-content-center align-items-center ' style={{ border: '1px solid white', borderRadius: '50%', padding: '50px', width: '75%', height: '100%' }}>
                                        <img src={DisputeResolution} alt='' className='justify-content-center align-items-center mt-3' style={{ width: '50%', height: '75%' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Dispute Resolution</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='justify-content-center align-items-center ' style={{ border: '1px solid white', borderRadius: '50%', padding: '50px', width: '75%', height: '100%' }}>
                                        <img src={IntellectualPropertyInformationTechnology} alt='' className='justify-content-center align-items-center mt-3' style={{ width: '50%', height: '75%' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Intellectual Property & Information Technology</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div class="row row-cols-3 row-cols-md-5 g-5 mb-5">
                            <div className='col'></div>
                            <div class="col">
                                <div class="card h-100 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='justify-content-center align-items-center ' style={{ border: '1px solid white', borderRadius: '50%', padding: '50px', width: '75%', height: '100%' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='justify-content-center align-items-center mt-3' style={{ width: '50%', height: '75%' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Structuring & Negotiation of Contracts</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='justify-content-center align-items-center ' style={{ border: '1px solid white', borderRadius: '50%', padding: '50px', width: '75%', height: '100%' }}>
                                        <img src={DisputeResolution} alt='' className='justify-content-center align-items-center mt-3' style={{ width: '50%', height: '75%' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Dispute Resolution</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='justify-content-center align-items-center ' style={{ border: '1px solid white', borderRadius: '50%', padding: '50px', width: '75%', height: '100%' }}>
                                        <img src={IntellectualPropertyInformationTechnology} alt='' className='justify-content-center align-items-center mt-3' style={{ width: '50%', height: '75%' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Intellectual Property & Information Technology</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div class="row row-cols-3 row-cols-md-5 g-5 mb-5">
                            <div className='col'></div>
                            <div class="col">
                                <div class="card h-100 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='justify-content-center align-items-center ' style={{ border: '1px solid white', borderRadius: '50%', padding: '50px', width: '75%', height: '100%' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='justify-content-center align-items-center mt-3' style={{ width: '50%', height: '75%' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Insolvency & Bankruptcy</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='justify-content-center align-items-center ' style={{ border: '1px solid white', borderRadius: '50%', padding: '50px', width: '75%', height: '100%' }}>
                                        <img src={DisputeResolution} alt='' className='justify-content-center align-items-center mt-3' style={{ width: '50%', height: '75%' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Compliance, Bribery & Anti- corruption Laws</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='justify-content-center align-items-center ' style={{ border: '1px solid white', borderRadius: '50%', padding: '50px', width: '75%', height: '100%' }}>
                                        <img src={IntellectualPropertyInformationTechnology} alt='' className='justify-content-center align-items-center mt-3' style={{ width: '50%', height: '75%' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Joint Ventures</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>

        </div >
    )
}

export default PracticeArea