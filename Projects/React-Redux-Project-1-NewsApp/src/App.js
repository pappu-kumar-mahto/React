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
import NotFound from "./components/NotFound";
import Signup from "./components/signUp/signUpForm";
import Login from "./components/login/login";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news/:id" element={<SingleNews />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
