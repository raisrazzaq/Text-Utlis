import React, { useState } from "react";

export default function Textm(props) {
  const [text, setText] = useState("enter text here");
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="contsiner">
        <div className="mb-3">
          <h2>{props.title}</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows={8}
            style={{ resize: "none" }}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minuts read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
