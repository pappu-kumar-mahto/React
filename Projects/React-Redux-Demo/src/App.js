import React from 'react';
import {useSelector} from 'react-redux'
import "./App.css";
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout'
import { selectUser } from './redux/userSlice';
const App = () => {

  const user = useSelector(selectUser)
  return (
 

      <div className="App">
      {
        user ? <Logout/> : <Login />
        }
          
          
       
    </div>

  );
};

export default App;
