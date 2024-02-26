import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const add = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 className="heading">{count}</h1>
      <div className="buttons">
        <button onClick={decrement}>Decrement</button>

        <button onClick={reset}>Reset</button>

        <button onClick={add}>Add</button>
      </div>
    </>
  );
}

export default Counter;
