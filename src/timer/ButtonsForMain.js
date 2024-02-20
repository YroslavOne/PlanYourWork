import { Clock, Sliders2Vertical } from "react-bootstrap-icons";
import React, { useState } from "react";
import { SCREENS_TIMER } from "../Consist.js";

function ButtonsForMain(props) {
  function shiftScreen(screen, e) {
    props.setScreensTimer(screen);
  }

  return (
    <div className="tab-button">
      <Clock
        value="1"
        onClick={(e) => shiftScreen(SCREENS_TIMER.TIMER, e)}
        className={
          props.screensTimer === SCREENS_TIMER.TIMER
            ? "tab-button-turn"
            : "tab-button-turn-off"
        }
      />

      <Sliders2Vertical
        value="2"
        onClick={(e) => shiftScreen(SCREENS_TIMER.SETTINGS_TIMER, e)}
        className={
          props.screensTimer === SCREENS_TIMER.SETTINGS_TIMER
            ? "tab-button-turn"
            : "tab-button-turn-off"
        }
      />
    </div>
  );
}
export default ButtonsForMain;
