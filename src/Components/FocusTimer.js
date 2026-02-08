import { useState, useEffect } from "react";

function FocusTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [minutesInput, setMinutesInput] = useState(0);

  const handleStart = () => {
    if (isActive === false && time === 0) {
      const totalSeconds = Number(minutesInput * 60);
      setTime(totalSeconds);
      setIsActive(true);
    } else if (isActive === true) {
      setIsActive(false);
    } else if (isActive === false && time !== 0) {
      setIsActive(true);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isActive === true && time > 0) {
      interval = setInterval(() => {
        setTime((prevtime) => prevtime - 1);
      }, 1000);
    }

    if (time === 0 && isActive === true) {
      setIsActive(false);
      alert("Hết giờ làm việc rồi!");
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div>
      <input
        placeholder="Enter number of minutes"
        type="number"
        value={minutesInput === 0 ? "" : minutesInput}
        onChange={(event) => setMinutesInput(Number(event.target.value))}
      ></input>
      <h1>
        Time remaining:{" "}
        <span style={time < 10 ? { color: "red" } : { color: "black" }}>
          {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
        </span>
      </h1>
      <button onClick={handleStart}>
        {isActive === false ? "Start timer" : "Stop timer"}
      </button>
    </div>
  );
}

export default FocusTimer;
