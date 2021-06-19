import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("rendered");
    if (value > 5) {
      document.title = `Hello ${value}`;
    }
  }, [value]);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Greetings
      </button>
    </>
  );
};

export default UseEffectBasics;
