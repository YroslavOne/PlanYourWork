import React, { useState, useEffect } from "react";
import "./Clock.css";

function Clock(props) {
  // const container = {};
  const [currentIntervalIndex, setCurrentIntervalIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(
    props.intervals[currentIntervalIndex].value * 60
  );
  props.setCurrentlyRunning(currentIntervalIndex);
  let allSeconds = props.intervals[currentIntervalIndex].value * 60;
  // let time = allSeconds / 100;

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
      setCurrentIntervalIndex(nextIndex);
      
      allSeconds = props.intervals[nextIndex].value * 60;
      setSecondsLeft(allSeconds);
      setPercent(0);
      // setPercentForCss(0);
      alert("aleee");
    }
  }, [secondsLeft, currentIntervalIndex, props.intervals]);

  // requestAnimationFrame
  // transform для css -
  // gudini посмотреть это)

  
  const smoothIncrease = function () {
    console.log("hi")
  if (percentForCss < percent) {
    
      let value = percentForCss + (100 / (allSeconds*100))*1.666666666666667;
      setPercentForCss(value);
      // console.log("hi")
    } else if (percent===0 && percentForCss!==0){
      let value = percentForCss - 100/100*1.666666666666667;
      setPercentForCss(value);
    }
    
  } 
  window.requestAnimationFrame(smoothIncrease);

  // useEffect(() => {
  //   if (percentForCss < percent) {
  //     const smoothIncrease = function () {
  //       let value = percentForCss + (100 / (allSeconds))/58.82352941176471;
  //       setPercentForCss(value);
  //       console.log("hi")
  //     };
  //     window.requestAnimationFrame(smoothIncrease);
  //   } else if(percent===0 && percentForCss!==0){
  //     setPercentForCss(0);

  //   }
  // }, [percentForCss, percent]);

  // const hii = function(){
  //   console.log("hii")
  // }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="clock">
      <div
        className="clock-timer"
        style={{ "--pie-p": `${percentForCss}%` }}
      ></div>
      <h2 className="timer">{formatTime(secondsLeft)}</h2>
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
