import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
        <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
