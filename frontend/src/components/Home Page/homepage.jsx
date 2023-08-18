import React from 'react'
import Header from "..//Header/Header";
import About from "../about-us/about";
import PracticeArea from "../PracticeArea/PracticeArea";
import OurTeam from "../OurTeam/OurTeam";
import Litigation from "../Litigations/Litigation";
import Contact from "../Contact/Contact";
import Location from "../Location/Location";
import Cookies from "../Cookies/Cookies";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";

const homepage = () => {
    return (<>
        <div>
            <Header />
            <Carousel />
            <About />
            <PracticeArea />
            <OurTeam />
            <Litigation />
            <Contact />
            <Location />
            <Cookies />
            <Footer />
        </div>
    </>
    )
}

export default homepage
