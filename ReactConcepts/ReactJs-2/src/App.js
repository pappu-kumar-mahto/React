import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HelloClass from"./components/HelloClass"
// import CounterComponent from "./components/Counter/CounterComponent"
// import RenderingUsingLoops from "./components/RenderingUsingLoops"
// import BulbOnOff from "./components/toggle/bulbOnOff"
// import Counter from './components/Counter/CounterUsingHooks'
import BulbOnOffUsingHooks from "./components/toggle/bulbOnOffUsingHoks"
// import BootstrapBasics from './components/BootstrapBasics';
function App() {
  return (
    <div className="App">
      {/*  <RenderingUsingLoops/>
      <BulbOnOff/> */}
      <BulbOnOffUsingHooks/>
    </div>
  )
}

export default App;
