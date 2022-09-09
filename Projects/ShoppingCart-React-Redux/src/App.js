import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
   
    </BrowserRouter>
    </Provider>
  );
}

export default App;
