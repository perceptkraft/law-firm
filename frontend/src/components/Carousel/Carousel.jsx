import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { useState } from 'react';
import Slider1 from "./slider1.jpg"
import Slider2 from './slider2.jpg';
import Slider3 from './slider3.jpg';
import Header from '../Header/Header';

const Slider = (id) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (<>
    <Header />
        <div>           
            <div className=''>
                <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
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
                            className="d-block w-100"
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
                            className="d-block w-100"
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