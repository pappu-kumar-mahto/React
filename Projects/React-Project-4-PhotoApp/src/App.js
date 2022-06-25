import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import PhotoApp from "./components/Photo/Photo";
import About from './components/About'
import Contact from './components/Contact'
import EnlargePhoto from './components/EnlargePhoto'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <PhotoApp />} />  
          <Route path="/about" element={ <About />} />  {/* path name should match with 'to' prop of Navbar component's Nav.Link */} 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/photo/:id" element={<EnlargePhoto />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
