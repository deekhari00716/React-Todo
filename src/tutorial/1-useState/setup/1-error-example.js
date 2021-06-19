import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("Hello Deekshith");
  const handleClick = () => {
    if (title === "Hello Deekshith") {
      setTitle("Welcome to canada");
    } else {
      setTitle("Hello Deekshith");
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
