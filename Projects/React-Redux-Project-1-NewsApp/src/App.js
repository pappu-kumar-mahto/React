import { useState, useEffect } from "react";
// import axios from "axios";
import News from './components/NewsList/News.json'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList/NewsList";
import SingleNews from "./components/SingleNews";
import About from "./components/About";
import Contact from "./components/Contact";
import Counter from "./components/Count";
import NotFound from "./components/NotFound";

const App = () => {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // const res = await axios.get(
        //   "https://newsapi.org/v2/top-headlines?apiKey=c56aa996e4654733a6af9434349a647d&country=in"
        // );
        const res = News
        setNewsList(res.articles);
      } catch (err) {
        alert(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<NewsList newsList={newsList} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/news/:id"
              element={<SingleNews newsList={newsList} />}
            />
            <Route path="/count" element={<Counter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
