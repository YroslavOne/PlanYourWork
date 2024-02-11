import React, { useState, useEffect } from 'react';
import './clock.css';

function Clock(props) {
  const container = {};
  const [currentIntervalIndex, setCurrentIntervalIndex] = useState(0);

  const [secondsLeft, setSecondsLeft] = useState(
    props.intervals[currentIntervalIndex] * 60
  );
  let allSeconds = props.intervals[currentIntervalIndex] * 60;
  let time = allSeconds / 100;

  const [percent, SetPercent] = useState(0);

  useEffect(() => {
    if (secondsLeft > 0) {
      if (props.pause === false) {
        let valueForPercent = ((allSeconds - secondsLeft) / allSeconds) * 100;
        SetPercent(valueForPercent);
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    } else {
      alert('aleee');
      const nextIndex = (currentIntervalIndex + 1) % props.intervals.length;
      setCurrentIntervalIndex(nextIndex);
      // setSecondsLeft(props.intervals[nextIndex] * 60);
      allSeconds = props.intervals[nextIndex] * 60;
      setSecondsLeft(allSeconds);
    }
  }, [secondsLeft, currentIntervalIndex, props.intervals]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="clock">
      {/* <h2>
        Текущий интервал: {currentIntervalIndex % 2 === 0 ? 'Работа' : 'Отдых'}
      </h2> */}
      <div
        className="clock-timer"
        style={{ '--pie-p': `${percent}%` }}
        // style={{
        //   background: `conic-gradient(#4caf50 ${percent}%, #ddd ${percent}%)`,
        // }}
      ></div>
      <h2 className="timer">{formatTime(secondsLeft)}</h2>
      <div className="timer-background-one"></div>
      <div
        className="timer-background-two"
        style={({ '--pie-p': `${percent}%` }, { '--pie-t': `${allSeconds}` })}
      ></div>
      <div
        className="rotate-timer-slider"
        style={{ '--pie-p': `${percent}deg` }}
      >
        <div className="timer-slider"></div>
      </div>
    </div>
  );
}
export default Clock;
