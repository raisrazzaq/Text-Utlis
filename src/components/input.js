import React from "react";

const InputComponent = (props) => {
  return (
    <div>
      <label>
        {props.label}:
        <input type="text" />
      </label>
    </div>
  );
};

export default InputComponent;
