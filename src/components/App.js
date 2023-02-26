import React, { useState, useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = (time % 1000) / 1000;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toFixed(3).slice(2)}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleLap = () => {
    setLaps((laps) => [...laps, time]);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <h1>{formatTime(time)}</h1>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}>Stop</button>
        )}
        <button onClick={handleLap}>Lap</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {laps.length > 0 && (
        <div className="lap-section">
          <h2>Laps:</h2>
          <ul>
            {laps.map((lapTime, index) => (
              <li key={index}>{formatTime(lapTime)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;