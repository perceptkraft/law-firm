import Homepage from "./Contact Dashboard/ContactHomepage";
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
          <Route path="/dashboard" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App;
