import { useContext } from "react";
import { Context } from "../../Context";
import ElementsTimer from "./componentsTimeList/ItemsTimer";
import { Pencil } from "react-bootstrap-icons";
import { SCREENS_TIMER } from "./../../Consist";
import "./Timer.css";

function Timer() {
  const { nameTimer, setScreensTimer } = useContext(Context);

  function openSettings() {
    setScreensTimer(SCREENS_TIMER.SETTINGS_TIMER);
  }

  return (
    <div className="timer">
      <h1 className="timer-name-app">promodoro timer</h1>
      <div onClick={(e) => openSettings()} className="timer-name-timer">
        <h2 className="timer-name-timer-title">Task: {nameTimer}</h2>
        <Pencil className="timer-name-timer-pencil" />
      </div>

      <ElementsTimer />
    </div>
  );
}
export default Timer;
