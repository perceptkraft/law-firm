import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import OurTeam from "./components/OurTeam/OurTeam";
import PracticeArea from "./components/PracticeArea/PracticeArea";
import Litigation from "./components/Litigations/Litigation.jsx";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Location from "./components/Location/Location";
import TermsAndConditions from './components/Termsandconditions/TermsAndConditions';
import Cookies from './components/Cookies/Cookies';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "./images/image1.png"
// import './about.css';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';

function App() {

  return (

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Routes>
          <Route exact path="/" element={<Home />}>

          </Route>
          <Route path="/about" element={<About />}>

          </Route>
          <Route path="/dashboard" element={<Dashboard />}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <div className='mt-5 mb-5'>

        <Fade Top>
          <h5 className='d-flex justify-content-center h1 mt-5'>Why us?</h5>

          <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />


          <p style={{ textAlign: 'center', wordWrap: 'break-word' }} className='mt-4'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in piece of classical Latin literature<br /> from 45 BC, it a old. Richard McClintock, looked up one of the more obscure
          </p>
        </Fade>

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
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
// <Router >
//   <Header />
//   <Routes>
//     <Route exact path="/" Component={Carousel} >

//     </Route>

//     <Route path="about" Component={About}>

//     </Route>



//     {/* <OurTeam />
//   <Litigation />
//   <Contact />
//   <Location />
//   <Cookies /> */}
//   </Routes>
//   {/* <Footer /> */}
// </Router>



export default App;
