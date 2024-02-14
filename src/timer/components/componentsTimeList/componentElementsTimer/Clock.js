import React, { useState, useEffect } from 'react';
import './clock.css';

function Clock(props) {
  const container = {};
  const [currentIntervalIndex, setCurrentIntervalIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(
    props.intervals[currentIntervalIndex].value * 60
  );
  props.setCurrentlyRunning(currentIntervalIndex)
  let allSeconds = props.intervals[currentIntervalIndex].value * 60;
  let time = allSeconds / 100;

  const [percent, setPercent] = useState(0);
  const [percentForCss, setPercentForCss] = useState(0);

  useEffect(() => {
    if (secondsLeft > 0) {
      if (props.pause === false) {
        let valueForPercent = ((allSeconds - secondsLeft) / allSeconds) * 100;
        setPercent(valueForPercent);
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    } else {
      
      props.setPause(!props.pause)
      const nextIndex = (currentIntervalIndex + 1) % props.intervals.length;
      setCurrentIntervalIndex(nextIndex);
      setPercentForCss(0);
      allSeconds = props.intervals[nextIndex].value * 60;
      setSecondsLeft(allSeconds);
      setPercent(100)
      alert('aleee');
    }
  }, [secondsLeft, currentIntervalIndex, props.intervals]);

  useEffect(() => {
    if (percentForCss < percent) {
      let value = percentForCss + 100 / (allSeconds * 100);
      const timerId = setTimeout(() => {
        setPercentForCss(value);
      }, 8);
      return () => clearTimeout(timerId);
    }
  }, [percentForCss, percent]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="clock">
      <div
        className="clock-timer"
        style={{ '--pie-p': `${percentForCss}%` }}
      ></div>
      <h2 className="timer">{formatTime(secondsLeft)}</h2>
      <div className="timer-background-one"></div>
      <div
        className="timer-background-two"
        style={{ '--pie-p': `${percentForCss}%` }}
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
