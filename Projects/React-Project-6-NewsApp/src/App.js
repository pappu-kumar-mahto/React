import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NewsList from './components/NewsList/NewsList'
import SingleNews from './components/SingleNews'
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from './components/NotFound'
import Signup from './compoents/signUp/signUpForm'
import Login from './compoents/login/login'

const App = () => {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?apiKey=c56aa996e4654733a6af9434349a647d&country=in"
        );
        setNewsList(res.data.articles);
      } catch (err) {
        alert(err);
      }
    }
      fetchNews();
  },[]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<NewsList newsList={newsList}/> } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/news/:id' element={<SingleNews newsList={newsList} />} />
          <Route path="/signup" element={ <Signup />} />  
          <Route path="/login" element={ <Login />} />  
          <Route path='*' element={<NotFound/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
