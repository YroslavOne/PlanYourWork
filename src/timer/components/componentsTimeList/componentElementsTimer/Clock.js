import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock(props) {
  const [currentIntervalIndex, setCurrentIntervalIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(
    props.intervals[currentIntervalIndex].value * 60
  );
  props.setCurrentlyRunning(currentIntervalIndex);
  let allSeconds = props.intervals[currentIntervalIndex].value * 60;

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
      props.setPause(!props.pause);
      const nextIndex = (currentIntervalIndex + 1) % props.intervals.length;
      let chekNextIndex =
        props.intervals[nextIndex] === undefined ? 0 : nextIndex;
      setCurrentIntervalIndex(chekNextIndex);

      allSeconds = props.intervals[nextIndex].value * 60;
      setSecondsLeft(allSeconds);
      setPercent(0);
      alert('Next?');
    }
  }, [secondsLeft, currentIntervalIndex, props.intervals]);

  // requestAnimationFrame
  // transform для css -
  // gudini посмотреть это)

  const smoothIncrease = function () {
    if (percentForCss < percent) {
      let value =
        percentForCss + (100 / (allSeconds * 100)) * 1.666666666666667;
      setPercentForCss(value);
    } else if (percent === 0 && percentForCss !== 0) {
      let value = percentForCss - (100 / 100) * 1.666666666666667;
      setPercentForCss(value);
    }
  };
  window.requestAnimationFrame(smoothIncrease);

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
