import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PhotoApp from "./compoents/Photo/Photo";
import Navbar from "./compoents/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <PhotoApp />
    </div>
  );
}

export default App;
