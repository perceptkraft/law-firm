import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../../images/image1.png"

const About = () => {
  return (
    <div>

      <h5 className='d-flex justify-content-center h1 mt-2'>Why us?</h5>

      <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />

      <p style={{ textAlign: 'center', wordWrap: 'break-word' }}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in piece of classical Latin literature<br /> from 45 BC, it a old. Richard McClintock, looked up one of the more obscure
      </p>

      <Row className='mt-5' style={{ justifyContent: 'center', alignItems: 'center', marginLeft: '7%'}}>

        <Col>
          <div className="ml-5 card justify-content-center shadow" style={{ width: "15rem", height: '12%' }}>
            <div className='d-flex justify-content-center'>
              <img className="mt-4" src={image1} style={{ width: "5rem" }} alt='' />
            </div>
            <div className="card-body justify-content-center">
              <h5 className="card-title justify-content-center " style={{ fontFamily: 'Roboto', fontSize: '15px', textAlign: 'center' }} > HIGH DEGREE OF INVOLMENT & AVAILABILITY </h5>
            </div>
          </div>
        </Col>

        <Col>
          <div className="card justify-content-center shadow" style={{ width: "15rem", height: '12%' }}>
            <div className='d-flex justify-content-center'>
              <img className="mt-4" src={image1} style={{ width: "5rem" }} alt='' />
            </div>
            <div className="card-body justify-content-center">
              <h5 className="card-title justify-content-center " style={{ fontFamily: 'Roboto', fontSize: '15px', textAlign: 'center' }} > HIGH QUALITY LEGAL ADVICE </h5>
            </div>
          </div>
        </Col>

        <Col>
          <div className="card justify-content-center shadow" style={{ width: "15rem", height: '12%' }}>
            <div className='d-flex justify-content-center'>
              <img className="mt-4" src={image1} style={{ width: "5rem" }} alt='' />
            </div>
            <div className="card-body justify-content-center">
              <h5 className="card-title justify-content-center " style={{ fontFamily: 'Roboto', fontSize: '15px', textAlign: 'center' }}> AVAILABILITY AND RESPONSIVENESS </h5>
            </div>
          </div>
        </Col>

        <Col>
        <div className="card justify-content-center shadow" style={{ width: "15rem", height: '12%' }}>
            <div className='d-flex justify-content-center'>
              <img className="mt-4" src={image1} style={{ width: "5rem" }} alt='' />
            </div>
            <div className="card-body justify-content-center">
              <h5 className="card-title justify-content-center " style={{ fontFamily: 'Roboto', fontSize: '15px', textAlign: 'center' }}> LEGAL RESEARCH AND ANALYSIS BASED ADVISORY </h5>
            </div>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default About