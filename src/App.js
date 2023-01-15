import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Countdown from "react-countdown";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [points, setPoints] = useState(0);
  const [endTime, setEndTime] = useState(null);
  const [pausedTime, setPausedTime] = useState(null);
  const [startStopGame, setStartStopGame] = useState(false);
  const [latestResult, setLatestResults] = useState();

  //starts the game
  const startGame = () => {
    if (!endTime) {
      setEndTime(Date.now() + 10000);
      setPoints(0);
    } else {
      setEndTime(endTime + (Date.now() - pausedTime));
    }
    setStartStopGame(true);
  };

  //sets random number state

  const randomize = () => {
    const numArr = Array.from({ length: Math.ceil(Math.random() * 5) }).map(
      () => Math.floor(Math.random() * 20 + 1)
    );
    setNumbers(numArr);
  };

  //stops the game
  const stopGame = () => {
    setStartStopGame(false);
    setPausedTime(Date.now());
  };

  const timer = useRef();

  //triggers randomizer when start game is clicked
  useEffect(() => {
    if (startStopGame) {
      timer.current = setInterval(randomize, 500);
    } else {
      clearInterval(timer.current);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [startStopGame]);

  //Adds a point when a mole button is clicked
  const addPoint = () => {
    if (startStopGame) {
      setPoints(points + 1);
    }
  };

  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          <span className="red">{seconds}</span> Seconds left!
        </span>
      );
    }
  };

  return (
    <div className="App">
      <div>
        {startStopGame === false ? (
          <button className="startStopBtn" onClick={startGame}>
            Start Game
          </button>
        ) : null}
        {startStopGame === true ? (
          <button className="startStopBtn" onClick={stopGame}>
            Stop Game
          </button>
        ) : null}
      </div>

      {startStopGame ? (
        <div className="countdown">
          <Countdown
            onComplete={() => {
              setStartStopGame(false);
              setLatestResults(points);
              setPausedTime(null);
              setEndTime(null);
            }}
            date={endTime}
            renderer={renderer}
          />
        </div>
      ) : null}

      <div className="row">
        <div className="hole">
          {numbers.includes(1) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(2) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(3) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(4) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(5) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="hole">
          {numbers.includes(6) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(7) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(8) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(9) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(10) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="hole">
          {numbers.includes(11) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(12) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(13) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(14) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(15) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="hole">
          {numbers.includes(16) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(17) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(18) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(19) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(20) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="hole">
          {numbers.includes(21) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(22) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(23) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(24) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
        <div className="hole">
          {numbers.includes(25) ? (
            <button className="mole" onClick={addPoint}></button>
          ) : null}
        </div>
      </div>
      <div className="points">
        Points: <span className="green">{points}</span>
      </div>

      <div className="results">
        <p>Latest score: {latestResult}</p>
      </div>
    </div>
  );
}

export default App;
