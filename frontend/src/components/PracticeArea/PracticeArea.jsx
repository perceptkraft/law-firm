import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import StructuringNegotiationOfContracts from '../../images/StructuringNegotiationOfContracts.png';
import Fade from 'react-reveal/Fade';
import './PracticeArea.css';

const PracticeArea = () => {
    return (
        <div id="practicearea">

            <div className='article' style={{ backgroundColor: 'black', color: 'white', height: '100%', marginTop: '4%' }}>
                <Fade top>
                    <h5 className='d-flex justify-content-center h1 mb-3'>Areas OF Practice</h5>
                    <hr style={{ marginBottom: '5%',width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
                </Fade>
                <Carousel indicators={false} controls={false} interval={2000}>

                    <Carousel.Item>
                        <div className="row g-0 mb-4">
                            <div className='col-2'></div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 p-3 h-75" style={{ fontFamily: 'Montserrat' }}>
                                <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'black', }}>
                                    <div className='' style={{ border: '1px solid black', width: '85%', height: '100%', backgroundColor: '#F7F7F7' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='my-4 ms-4' style={{ color: 'black', background: 'black', width: '20%', height: '20%' }} />
                                        <p className="text-start ms-4 mt-4 my-4" style={{ fontSize: '18px' }}>Midiation</p>
                                        <span ><div className='ms-4 mb-4 mx-5' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, cupiditate.</div></span>
                                        <p className='ms-4 my-4' style={{ fontSize: '12px' }}></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 p-3 h-75" style={{ fontFamily: 'Montserrat' }}>
                                <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'black', }}>
                                    <div className='' style={{ border: '1px solid black', width: '85%', height: '100%', backgroundColor: '#A08F61' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='my-4 ms-4' style={{ color: 'black', background: 'black', width: '20%', height: '20%' }} />
                                        <p className="text-start ms-4 mt-4 my-4" style={{ fontSize: '18px' }}>Midiation</p>
                                        <span ><div className='ms-4 mb-4 mx-5' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, cupiditate.</div></span>
                                        <p className='ms-4 my-4' style={{ fontSize: '12px' }}></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 p-3 h-75" style={{ fontFamily: 'Montserrat' }}>
                                <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'black', }}>
                                    <div className='' style={{ border: '1px solid black', width: '85%', height: '100%', backgroundColor: '#F7F7F7' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='my-4 ms-4' style={{ color: 'black', background: 'black', width: '20%', height: '20%' }} />
                                        <p className="text-start ms-4 mt-4 my-4" style={{ fontSize: '18px' }}>Midiation</p>
                                        <span ><div className='ms-4 mb-4 mx-5' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, cupiditate.</div></span>
                                        <p className='ms-4 my-4' style={{ fontSize: '12px' }}></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="row g-0 mb-4">
                            <div className='col-2'></div>
                            <div className="col-lg-3 col-md-3 h-75 col-sm-3 col-xs-3 p-3" style={{ fontFamily: 'Montserrat' }}>
                                <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'black', }}>
                                    <div className='' style={{ border: '1px solid black', width: '85%', height: '100%', backgroundColor: '#F7F7F7' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='my-4 ms-4' style={{ color: 'black', background: 'black', width: '20%', height: '20%' }} />
                                        <p className="text-start ms-4 mt-4 my-4" style={{ fontSize: '18px' }}>Midiation</p>
                                        <span ><div className='ms-4 mb-4 mx-5' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, cupiditate.</div></span>
                                        <p className='ms-4 my-4' style={{ fontSize: '12px' }}></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 h-75 col-sm-3 col-xs-3 p-3" style={{ fontFamily: 'Montserrat' }}>
                                <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'black', }}>
                                    <div className='' style={{ border: '1px solid black', width: '85%', height: '100%', backgroundColor: '#A08F61' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='my-4 ms-4' style={{ color: 'black', background: 'black', width: '20%', height: '20%' }} />
                                        <p className="text-start ms-4 mt-4 my-4" style={{ fontSize: '18px' }}>Midiation</p>
                                        <span ><div className='ms-4 mb-4 mx-5' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, cupiditate.</div></span>
                                        <p className='ms-4 my-4' style={{ fontSize: '12px' }}></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 h-75 col-sm-3 col-xs-3 p-3" style={{ fontFamily: 'Montserrat' }}>
                                <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'black', }}>
                                    <div className='' style={{ border: '1px solid black', width: '85%', height: '100%', backgroundColor: '#F7F7F7' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='my-4 ms-4' style={{ color: 'black', background: 'black', width: '20%', height: '20%' }} />
                                        <p className="text-start ms-4 mt-4 my-4" style={{ fontSize: '18px' }}>Midiation</p>
                                        <span ><div className='ms-4 mx-5 mb-4' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, cupiditate.</div></span>
                                        <p className='ms-4 my-4 mx-5' style={{ fontSize: '12px' }}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="row g-0 mb-4">
                            <div className='col-2'></div>

                            <div className="col-lg-3 col-md-3 h-75 col-sm-3 col-xs-3 p-3" style={{ fontFamily: 'Montserrat' }}>
                                <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'black', }}>
                                    <div className='' style={{ border: '1px solid black', width: '85%', height: '100%', backgroundColor: '#F7F7F7' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='my-4 ms-4' style={{ color: 'black', background: 'black', width: '20%', height: '20%' }} />
                                        <p className="text-start ms-4 mt-4 my-4" style={{ fontSize: '18px' }}>Midiation</p>
                                        <span ><div className='ms-4 mb-4 mx-5' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, cupiditate.</div></span>
                                        <p className='ms-4 my-4' style={{ fontSize: '12px' }}></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 h-75 col-sm-3 col-xs-3 p-3" style={{ fontFamily: 'Montserrat' }}>
                                <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'black', }}>
                                    <div className='' style={{ border: '1px solid black', width: '85%', height: '100%', backgroundColor: '#A08F61' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='my-4 ms-4' style={{ color: 'black', background: 'black', width: '20%', height: '20%' }} />
                                        <p className="text-start ms-4 mt-4 my-4" style={{ fontSize: '18px' }}>Midiation</p>
                                        <span ><div className='ms-4 mb-4 mx-5' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, cupiditate.</div></span>
                                        <p className='ms-4 my-4' style={{ fontSize: '12px' }}></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 h-75 col-sm-3 col-xs-3 p-3" style={{ fontFamily: 'Montserrat' }}>
                                <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'black', }}>
                                    <div className='' style={{ border: '1px solid black', width: '85%', height: '100%', backgroundColor: '#F7F7F7' }}>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='my-4 ms-4' style={{ color: 'black', background: 'black', width: '20%', height: '20%' }} />
                                        <p className="text-start ms-4 mt-4 my-4" style={{ fontSize: '18px' }}>Midiation</p>
                                        <span ><div className='ms-4 mb-4 mx-5' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, cupiditate.</div></span>
                                        <p className='ms-4 my-4' style={{ fontSize: '12px' }}></p>
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