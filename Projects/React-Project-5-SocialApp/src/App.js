import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./compoents/Navbar";
import SocialApp from "./compoents/Posts/Post";
import About from './compoents/About.js'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <SocialApp />} />  
          <Route path="/about" element={ <About />} />  
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
