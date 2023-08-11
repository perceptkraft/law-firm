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
import About from './components/about-us/about';

function App() {

  return (<>
    <Header />
    <Carousel />
    <About />
    <OurTeam />
    <Litigation />
    <Contact />
    <Location />
    <Cookies />
    <Footer />
  </>

  )
}


export default App;
