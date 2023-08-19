import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { useState } from 'react';
import Slider1 from "./slider1.jpg"
import Slider2 from './slider1.jpg';
import Slider3 from './slider1.jpg';

const Slider = (id) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (<>
        <div>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} className='responsiveParallax'>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid imageResponsive"
                            src={Slider1}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid"
                            src={Slider2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid"
                            src={Slider3}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    </>
    )
}

export default Slider;