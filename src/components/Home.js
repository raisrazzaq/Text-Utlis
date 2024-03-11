import React, { useState } from "react";
export default function Home(props) {
  const [text, setText] = useState("");
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase!", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1").value;
    navigator.clipboard.writeText(text);
    props.showAlert("Copied text to clipboard!", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };
  return (
    <>
      <div className="contsiner">
        <div className=" mb-3">
          <h2 style={{ color: props.mode === "dark" ? "white" : "black",}}>
            {props.title}
          </h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            style={{
              resize: "none",
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows={8}
          />
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>
          Convert to UpperCase
        </button>
        <button disabled={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy text
        </button>
        <button disabled={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts read</p>
        <h2>Preview</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          rows={8}
          style={{
            resize: "none",
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
      </div>
    </>
  );
}
