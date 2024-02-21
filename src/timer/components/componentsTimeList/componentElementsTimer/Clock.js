import React, { useState, useEffect } from "react";
import FormatTime from "./FormatTime";
import Animation from "./Animation";
import "./Clock.css";

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
        const timeStart = new Date();
        let valueForPercent =
          ((allSeconds - secondsLeft + 1) / allSeconds) * 100;
        setPercent(valueForPercent);
        Animation(
          timeStart,
          percentForCss,
          setPercentForCss,
          allSeconds,
          valueForPercent
        );
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
      setPercentForCss(0);
      alert("Next?");
    }
  }, [secondsLeft, currentIntervalIndex, props.intervals]);

  return (
    <div className="clock">
      <div
        className="clock-timer"
        style={{ "--pie-p": `${percentForCss}%` }}
      ></div>
      <h2 className="timer">{FormatTime(secondsLeft)}</h2>
      <div className="timer-background-one"></div>
      <div
        className="timer-background-two"
        style={{ "--pie-p": `${percentForCss}%` }}
      ></div>
      <div
        className="rotate-timer-slider"
        style={{ "--pie-p": `${percent}deg` }}
      >
        <div className="timer-slider"></div>
      </div>
    </div>
  );
}
export default Clock;
