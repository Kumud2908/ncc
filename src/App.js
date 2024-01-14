
import './App.css';
import Navbar from './components/Navbar.js';
import BackgroundSlider from './components/backgroundSlider.js';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Register from './components/Register.js';
import {link,} from "react-router-dom";
import MyContent from "./components/belowNavbar.js";

function App() {
  return (
  
    <Router >
      <Navbar/>
      <Routes>
      <Route path="/Register" element={<Register/>}/>
      <Route exact to="/" />
      </Routes>
    
   
    <BackgroundSlider />
    <MyContent/>
    </Router>
    
   
    
  );
}

export default App;
