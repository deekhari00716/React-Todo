import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: "deekshith", age: "26", message: "random message" });
  const clickHandler = () => {
    setPerson({ ...person, message: "Welcome to canada" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={clickHandler}>
        Click
      </button>
    </>
  );
};

export default UseStateObject;
