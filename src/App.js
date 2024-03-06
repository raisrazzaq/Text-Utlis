// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import InputComponent from "./components/input";

function App() {
  return (
    <>
      <Navbar title="TextUtlis" AboutText="About" />
      <div className="container my-3">
        {/* <TextForm title="Enter the text to analyze Bellow"/> */}
        <About />
      </div>
    </>
  );
}

export default App;
