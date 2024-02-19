import { SCREENS_TIMER, SCREENS_SETTINGS } from "../../../Consist";
import { Context } from "../../../Context";
import { useContext, useEffect, useRef, useState } from "react";
// import ElementSettingsTimerList from './settingsTimerList/ElementSettingsTimerList';
import TimerSettingsList from "./SettingsTimer/TimerSettingsList";
import { v4 as uuidv4 } from "uuid";
import "./SettingsWindow.css";

import EditorNameTimer from "./SettingsTimer/EditorNameTimer";

function SettingsWindow() {
  const {
    settingsTimer,
    setSettingsTimer,
    nameTimer,
    setNameTimer,
    setScreensTimer,
  } = useContext(Context);
  let settingsTimerClone = [...settingsTimer.map((timer) => ({ ...timer }))];

  const [editNameTimer, setEditNameTimer] = useState(nameTimer);

  function saveOrCancelTimer(settingsTimer, valueNameTimer) {
    setNameTimer(valueNameTimer);
    setSettingsTimer([...settingsTimer.map((timer) => ({ ...timer }))]);
    setScreensTimer(SCREENS_TIMER.TIMER);
  }

  return (
    <div className="settings">
      <EditorNameTimer
        valueName={editNameTimer}
        setValueName={setEditNameTimer}
      />

      <TimerSettingsList settingsTimer={settingsTimerClone} />
      <div className="settings-button">
        <button
          className="settings-button-cancel"
          onClick={(e) => saveOrCancelTimer(settingsTimer, nameTimer)}
        >
          Cancel
        </button>
        <button
          className="settings-button-save"
          onClick={(e) => saveOrCancelTimer(settingsTimerClone, editNameTimer)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default SettingsWindow;
