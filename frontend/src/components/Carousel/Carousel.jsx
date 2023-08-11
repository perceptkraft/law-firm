import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { useState } from 'react';

const Slider = (id) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (<>
        <div className='blr-image'></div>
        <div className='bg-text'>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item>
                    <h3>First slide label</h3>
                    <p></p>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Second slide label</h3>
                    <p></p>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Third slide label</h3>
                    <p></p>
                </Carousel.Item>
            </Carousel>

        </div>
    </>
    )
}

export default Slider;