import React from 'react'
import './Carousel.css';
import OurTeam from "../../components/OurTeam/OurTeam";
import PracticeArea from "../../components/PracticeArea/PracticeArea";
import Litigation from "../../components/Litigations/Litigation.jsx";
import Contact from "../../components/Contact/Contact";
import Location from "../../components/Location/Location";
import Cookies from '../../components/Cookies/Cookies';
import About from '../../components/about-us/about';

const Slider = (id) => {
    return (<>
        <div className='blr-image'></div>
        <About />
        <PracticeArea />
        <OurTeam />
        <Litigation />
        <Contact />
        <Location />
        <Cookies />
    </>
    )
}

export default Slider;