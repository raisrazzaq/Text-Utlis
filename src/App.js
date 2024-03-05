// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtlis" AboutText="About" />
      <div className="container my-3">
        <TextForm title="Enter the text to analyze Bellow"/>
      </div>
    </>
  );
}

export default App;
