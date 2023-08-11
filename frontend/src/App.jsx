import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Carousel from './components/Carousel/Carousel';
import Dashboard from './Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Carousel />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  )
}


export default App;
