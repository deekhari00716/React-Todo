import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const decrease = () => {
    setValue(value - 1);
  };

  const increase = () => {
    setValue(value + 1);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevVal) => {
        return prevVal + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={decrease}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={increase}>
          increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
