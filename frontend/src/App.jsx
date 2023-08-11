import Carousel from './components/Carousel/Carousel';
import Dashboard from './Dashboard/Dashboard';
import HomePage from "./components/Home Page/homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details-board' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>

  )
}


export default App;
