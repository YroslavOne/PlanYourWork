import { useContext, useState, useEffect } from "react";
import { Context } from "../../../Context";
import Clock from "./componentElementsTimer/Clock";
import { Pause, Play } from "react-bootstrap-icons";
import "./elementTimer.css";

function ElementsTimer() {
  const { settingsTimer } = useContext(Context);

  const [secondsLeft, setSecondsLeft] = useState(5);
  const [pause, setPause] = useState(true);
  const [currentlyRunning, setCurrentlyRunning] = useState(0);
  console.log(currentlyRunning);

  let intervals = [];
  for (let i = 1; i <= settingsTimer[3].value; i++) {
    if (i < settingsTimer[3].value) {
      intervals.push({ value: settingsTimer[0].value, number: i });
      intervals.push( {value: settingsTimer[1].value, number: i });
    } else if (i === settingsTimer[3].value) {
      intervals.push({value: settingsTimer[0].value, number: i } );
      intervals.push({value: settingsTimer[2].value, number: i } );
    }
  }


  let rows = [];
  for (let i = 0; i < settingsTimer[3].value; i++) {


    function addLine(i, line){
      if(i!==(settingsTimer[3].value-1) && line==="standart"){
        rows.push(<li className="line-for-doth-standart"></li>);
      } else if(i!==(settingsTimer[3].value-1) && line==="nestandart")
      {
        rows.push(<li className="line-for-doth-nestandart"></li>);
      }
    }
    
    if(i === (intervals[currentlyRunning].number-1)){
      rows.push(<li className="doth-in-progress"></li>);
      addLine(i, "standart")
    } else if(i < intervals[currentlyRunning].number){
      rows.push(<li className="doth-completed"></li>);
      addLine(i, "nestandart")
    } else {
      rows.push(<li className="doth-not-completed"></li>);
      addLine(i, "standart")

    }
    
  }

  function turnPause() {
    setPause(!pause);
  }
  return (
    <div className="element-timer">
      <Clock
        intervals={intervals}
        pause={pause}
        setPause={setPause}
        setCurrentlyRunning={setCurrentlyRunning}
      />
      <ul className="element-timer-doth">{rows}</ul>
      <button className="element-timer-button" onClick={(e) => turnPause()}>
        {pause === true ? (
          <Play className="element-timer-button-icon" />
        ) : (
          <Pause className="element-timer-button-icon" />
        )}
      </button>
    </div>
  );
}
export default ElementsTimer;
