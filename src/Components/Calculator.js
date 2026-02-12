import { useState } from "react";

function Calculator() {
  const [fisrtNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [showTotal, setShowTotoal] = useState(false);

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          value={fisrtNumber}
          onChange={(event) => setFirstNumber(Number(event.target.value))}
        ></input>
        <input
          value={secondNumber}
          onChange={(event) => setSecondNumber(Number(event.target.value))}
        ></input>
        <button onClick={() => setShowTotoal(true)}>Add Two Numbers</button>
        {showTotal === true && <p>Total: {fisrtNumber + secondNumber}</p>}
      </form>
    </div>
  );
}
export default Calculator;
