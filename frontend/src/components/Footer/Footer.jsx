import React from 'react';
import './Footer.css';
import Logo from "../../images/sliderlogo.png";

const Footer = () => {
  return (
    <div className='footer shadow footer-fixed mt-5' style={{ color: 'black', height: '5%', textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}>
      <div className='mb-4'>
        <img src={Logo} alt="" style={{ height: '10%', width: '10%' }} />
      </div>
      <div className='footer-info mt-3'>
        <p style={{ fontFamily: 'Roboto', fontSize: '20px', fontWeight: '600' }}>COPYRIGHT 2023 WEBSITE - ALL RIGHTS RESERVED. PRIVACY POLICY</p>
      </div>
    </div>
  )
}

export default Footer