import { useState, useEffect } from "react";

function FocusTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [minutesInput, setMinutesInput] = useState(0);

  const handleStart = () => {
	const totalSeconds = Number(minutesInput * 60);
	setTime(totalSeconds);
	setIsActive(true);
  };

  useEffect(() => {
	let interval = null
	if (isActive === true && time > 0) {
		interval = setInterval(() => {
			setTime((prevtime) => prevtime-1);
		}, 1000)
	}
  }

  )

  return (
    <div>
      <input type="number" value={minutesInput} onChange={(event) => setMinutesInput(Number(event.target.value))}></input>
	  <h1>Time remaining: </h1>
	  <button onClick={handleStart}>Start timer</button>
    </div>
  );
}
