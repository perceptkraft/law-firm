import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import About from './components/about-us/about';
import OurTeam from "./components/OurTeam/OurTeam";
import PracticeArea from "./components/PracticeArea/PracticeArea";
import Litigation from "./components/Litigations/Litigation.jsx";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Location from "./components/Location/Location";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <About />
      <PracticeArea />
      <OurTeam />
      <Litigation />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
