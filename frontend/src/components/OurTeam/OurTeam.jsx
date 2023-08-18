import React from 'react'
import User1 from "../../images/user2.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaReddit, FaTwitter, FaYoutube } from "react-icons/fa"
import "./OurTeam.css";
import Fade from 'react-reveal/Fade';
import Pulse from "react-reveal/Pulse";

const OurTeam = () => {
    return (
        <div className='mt-5 mb-5' id="ourteam">

            <Fade top>
                <h5 className='d-flex justify-content-center h1 mt-2'>Our Team</h5>
                <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
            </Fade>


            <div class="row mt-5">
                <div class="d-flex justify-content-center col-lg-4 col-md-4 col-sm-2 col-xs-2">
                    <Pulse>
                        <div class="card h-100 w-50 TeamCard rounded-3 ml-5">
                            <img src={User1} class="card-img-top" alt="..." className='w-100 h-75 p-1' />
                            <div class="card-body " >
                                <h5 class="card-title">HARESH IDNANI</h5>
                                <p class="card-text">L.L.B/B.COM</p>
                                <div >
                                    <div>
                                        <ul className='d-flex justify-content-evenly ' style={{ listStyle: 'none', marginRight: '15%' }}>
                                            <li style={{ cursor: 'pointer' }}>
                                                <FaFacebook />
                                            </li>
                                            <li style={{ cursor: 'pointer' }}>
                                                <FaInstagram />
                                            </li>
                                            <li style={{ cursor: 'pointer' }}>
                                                <FaLinkedin />
                                            </li>
                                            <li style={{ cursor: 'pointer' }}>
                                                <FaYoutube />
                                            </li>
                                            <li style={{ cursor: 'pointer' }}>
                                                <FaPinterest />
                                            </li>
                                            <li style={{ cursor: 'pointer' }}>
                                                <FaReddit />
                                            </li>
                                            <li style={{ cursor: 'pointer' }}>
                                                <FaTwitter />
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='showButton'>
                                        <button className='mb-2' style={{ width: '100%', backgroundColor: 'none', border: 'none', padding: '5px' }}>Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Pulse>
                </div>
                <div class="d-flex justify-content-center col-lg-4 col-md-4 col-sm-2 col-xs-2">
                    <Pulse>
                        <div class="card h-100 w-50 rounded-3 ml-5">
                            <img src={User1} class="card-img-top" alt="..." className='w-100 h-75 p-1' />
                            <div class="card-body">
                                <h5 class="card-title">DIKSHA IDNANI GURNANI</h5>
                                <p class="card-text">L.L.B/B.L.S</p>
                                <div>
                                    <ul className='d-flex justify-content-evenly' style={{ listStyle: 'none', marginRight: '15%' }}>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaFacebook />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaInstagram />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaLinkedin />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaYoutube />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaPinterest />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaReddit />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaTwitter />
                                        </li>
                                    </ul>
                                </div>
                                <button className='mb-2 showButton' style={{ width: '100%', backgroundColor: 'none', border: 'none', padding: '5px' }}>Read more</button>
                            </div>
                        </div>
                    </Pulse>
                </div>
                <div class="d-flex justify-content-center col-lg-4 col-md-4 col-sm-2 col-xs-2">
                    <Pulse>
                        <div class="card h-100 w-50 rounded-3 ml-5">
                            <img src={User1} class="card-img-top" alt="..." className='w-100 h-75 p-1' />
                            <div class="card-body">
                                <h5 class="card-title">JATIN IDNANI</h5>
                                <p class="card-text">L.L.B/B.L.S</p>
                                <div>
                                    <ul className='d-flex justify-content-evenly' style={{ listStyle: 'none', marginRight: '15%' }}>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaFacebook />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaInstagram />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaLinkedin />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaYoutube />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaPinterest />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaReddit />
                                        </li>
                                        <li style={{ cursor: 'pointer' }}>
                                            <FaTwitter />
                                        </li>
                                    </ul>
                                </div>
                                <button className='mb-2 showButton' style={{ width: '100%', backgroundColor: 'none', border: 'none', padding: '5px' }}>Read more</button>
                            </div>
                        </div>
                    </Pulse>
                </div>
                s
            </div>

        </div>
    )
}

export default OurTeam;