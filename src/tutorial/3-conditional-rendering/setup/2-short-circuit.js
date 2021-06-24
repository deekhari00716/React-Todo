import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState("Messi");
  const firstValue = text || "hello world";
  const seconcValue = text && "hello world";

  return (
    <>
      <h1>{text || "Deekshith"}</h1>
      {text && <h1>Hello world</h1>}
    </>
  );
};

export default ShortCircuit;
