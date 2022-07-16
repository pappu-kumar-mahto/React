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
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<NewsList  />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/news/:id"
              element={<SingleNews  />}
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
