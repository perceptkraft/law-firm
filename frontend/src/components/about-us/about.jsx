import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../../images/image1.png"
import './about.css';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';


const About = () => {
  return (<>
    <div className='mb-5' id="about" style={{ marginTop: '5%', position: 'relative' }}>

      <Fade>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <h5 className='d-flex justify-content-center h1 mt-5'>Why us?</h5>
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 ps-4 pe-4'>
            <p style={{ textAlign: 'center', wordWrap: 'break-word' }} className='mt-4'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in piece of classical Latin literature<br /> from 45 BC, it a old. Richard McClintock, looked up one of the more obscure
            </p>
          </div>
        </div>
      </Fade >

      <Row className='mt-5' style={{ justifyContent: 'center', alignItems: 'center' }}>


        <Col>
          <Slide left>
            <div className="card justify-content-center p-5" style={{ border: '1px' }}>
              <div className='d-flex justify-content-center'>
                <img className="mt-4 circle-outline" src={image1} alt='' />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontFamily: 'Roboto', fontSize: '15px' }} > HIGH DEGREE OF INVOLMENT &<br /> AVAILABILITY </h5>
              </div>
            </div>
          </Slide>
        </Col>

        <Col>
          <Slide left>
            <div className="card justify-content-center p-5" style={{ border: '1px' }}>
              <div className='d-flex justify-content-center'>
                <img className="mt-4 circle-outline" src={image1} alt='' />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontFamily: 'Roboto', fontSize: '15px' }} > HIGH DEGREE OF INVOLMENT &<br /> AVAILABILITY </h5>
              </div>
            </div>
          </Slide>
        </Col>

        <Col>
          <Slide right>
            <div className="card justify-content-center p-5" style={{ border: '1px' }}>
              <div className='d-flex justify-content-center'>
                <img className="mt-4 circle-outline" src={image1} alt='' />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontFamily: 'Roboto', fontSize: '15px' }} > HIGH DEGREE OF INVOLMENT &<br /> AVAILABILITY </h5>
              </div>
            </div>
          </Slide>
        </Col>

        <Col>
          <Slide right>
            <div className="card justify-content-center p-5" style={{ border: '1px' }}>
              <div className='d-flex justify-content-center'>
                <img className="mt-4 circle-outline" src={image1} alt='' />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontFamily: 'Roboto', fontSize: '15px' }} > HIGH DEGREE OF INVOLMENT &<br /> AVAILABILITY </h5>
              </div>
            </div>
          </Slide>
        </Col>

      </Row>
    </div >
  </>
  )
}

export default About