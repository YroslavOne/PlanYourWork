import { SCREENS_TIMER, SCREENS_SETTINGS } from "../../../Consist";
import { Context } from "../../../Context";
import { useContext, useEffect, useRef, useState } from "react";
// import TimePicker from "./settingsTimerList/TimerPicker";
import ElementSettengsTimerList from "./settingsTimerList/elementSettingsTimerList";

function SettingsTimer() {
  const { settingsTimer, setScreensTimer, setSettingsTimer } =
    useContext(Context);
//   const [screenForTuning, setScreenForTuning] = useState(SCREENS_SETTINGS.NONE);

  function cancelButton() {
    setScreensTimer(SCREENS_TIMER.TIMER_LIST);
  }
  function saveButton() {
    setScreensTimer(SCREENS_TIMER.TIMER_LIST);
  }
//   function clickFocuseTime() {
//     if (screenForTuning === SCREENS_SETTINGS.FOCUSE_TIME) {
//       setScreenForTuning(SCREENS_SETTINGS.NONE);
//     } else {
//       setScreenForTuning(SCREENS_SETTINGS.FOCUSE_TIME);
//     }
//   }
//   function clickShortBreak() {
//     if (screenForTuning === SCREENS_SETTINGS.SHORT_BREAK) {
//       setScreenForTuning(SCREENS_SETTINGS.NONE);
//     } else {
//       setScreenForTuning(SCREENS_SETTINGS.SHORT_BREAK);
//     }
//   }
//   function clickLongBreak() {
//     if (screenForTuning === SCREENS_SETTINGS.LONG_BREAK) {
//       setScreenForTuning(SCREENS_SETTINGS.NONE);
//     } else {
//       setScreenForTuning(SCREENS_SETTINGS.LONG_BREAK);
//     }
//   }
//   function clickSections() {
//     if (screenForTuning === SCREENS_SETTINGS.SECTIONS) {
//       setScreenForTuning(SCREENS_SETTINGS.NONE);
//     } else {
//       setScreenForTuning(SCREENS_SETTINGS.SECTIONS);
//     }
//   }

  return (
    <div>
      <ul>
        <ElementSettengsTimerList name={"Focuse time"} value={settingsTimer.focuseTime}/>
        {/* <li onClick={(e) => clickFocuseTime()}>
          <p>Focuse time</p>
          {SCREENS_SETTINGS.FOCUSE_TIME === screenForTuning && (
            <TimePicker
              initialValue={settingsTimer.focuseTime}
              startSelections={1}
              endSelections={99}
            />
          )}
        </li>
        <li onClick={(e) => clickShortBreak()}>
          <p>Short break</p>
          {SCREENS_SETTINGS.SHORT_BREAK === screenForTuning && (
            <TimePicker
              initialValue={settingsTimer.shortBreak}
              startSelections={1}
              endSelections={99}
            />
          )}
        </li>
        <li onClick={(e) => clickLongBreak()}>
          <p>Long break</p>
          {SCREENS_SETTINGS.LONG_BREAK === screenForTuning && (
            <TimePicker
              initialValue={settingsTimer.longBreak}
              startSelections={1}
              endSelections={99}
            />
          )}
        </li>
        <li onClick={(e) => clickSections()}>
          <p>Sections</p>
          {SCREENS_SETTINGS.SECTIONS === screenForTuning && (
            <TimePicker
              initialValue={settingsTimer.sections}
              startSelections={1}
              endSelections={10}
            />
          )}
        </li> */}
      </ul>

      <button onClick={(e) => cancelButton()}>cancel</button>
      <button onClick={(e) => saveButton()}>save</button>
    </div>
  );
}
export default SettingsTimer;
