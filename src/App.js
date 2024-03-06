// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import InputComponent from "./components/input";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtlis"
        AboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm title="Enter the text to analyze Bellow" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
