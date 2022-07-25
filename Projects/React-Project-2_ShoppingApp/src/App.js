import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import Products from './components/Products'
import SignupForm from './components/signUp/FormUsingHook/signUpForm'
import Signup from './components/signUp/Signup'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />}/>
            {/* <Route path="/about" element={<Aboout />}/> */}
            {/* <Route path="/contact" element={<Contact />}/> */}
            <Route path="/signup" element={<SignupForm />}/>
            <Route path="/signupcontrol" element={<Signup />}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
