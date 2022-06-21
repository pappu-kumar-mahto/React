import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './components/useState/Navbar'
// import Products from './components/useState/Products'
import ParentComp from "./components/LifeCycleClassComp/ParentComp";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Products/> */}
      <ParentComp />
    </div>
  );
}

export default App;
