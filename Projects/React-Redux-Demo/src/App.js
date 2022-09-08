import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./App.css";
import HookCakeContainer from './components/cakeShop/HookCakeContainer';
import IceCreamContainer from './components/IceCream/IceCreamContainer';
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <IceCreamContainer/>
    </div>
    </Provider>
  );
};

export default App;
