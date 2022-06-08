import "./App.css";
import ChildComponent1 from "./components/ChildComponent1";
import ChildComponent2 from "./components/ChildComponent2";


function App() {
  return (
    <div className="parentDiv">
      <h1>App</h1>
      <ChildComponent1/>
      <ChildComponent2 />
    </div>
  );
}

export default App;
