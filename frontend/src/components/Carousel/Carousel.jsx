import React from 'react'
import './Carousel.css';

const imageFileLocation = require('../../images/background.jpg')
const divStyle = {
    width: '100%',
    height: '99vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${imageFileLocation})`,
    backgroundSize: 'cover' 
  };
const Slider = () => {

    return (
        <div className="cComponent" style={divStyle} >
            <h1 align="center">Some header example</h1>
        </div>
    )

}

export default Slider