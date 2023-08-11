import React from 'react'
import './Carousel.css';
import About from '../about-us/about';

const Slider = (id) => {
    return (<>
        <div className='blr-image'></div>
        <About id={id} />

    </>
    )
}

export default Slider;