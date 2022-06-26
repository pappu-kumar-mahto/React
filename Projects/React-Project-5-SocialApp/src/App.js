import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./compoents/Navbar";
import Home from "./compoents/Home/Home";
import About from './compoents/About.js'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />  
          <Route path="/about" element={ <About />} />  
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
