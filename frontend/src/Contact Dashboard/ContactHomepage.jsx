import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Details from './Details/Details';

const ContactHomepage = () => {
  return (<div>
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto my-2 my-lg-0" navbarScroll >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Details</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <h3 className='text-center mt-5'>Contact Detail's</h3>
    </div>
    <div className='details container mt-5'>
      <Details />
    </div>
  </div>
  )
}

export default ContactHomepage