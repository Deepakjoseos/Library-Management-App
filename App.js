import './App.css';
import LandingPage from './components/landingpage/LandingPage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
