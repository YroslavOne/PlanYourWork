import { SCREENS_TIMER, SCREENS_SETTINGS } from '../../../Consist';
import { Context } from '../../../Context';
import { useContext, useEffect, useRef, useState } from 'react';
// import ElementSettingsTimerList from './settingsTimerList/ElementSettingsTimerList';
import SettingsTimerElem from './settingsTimerList/SettingsTimerElem';
import { v4 as uuidv4 } from 'uuid';
import './settingsTimer.css';

import Editor from './settingsTimerList/EditorName';

function SettingsTimer() {
  const {
    settingsTimer,
    setSettingsTimer,
    nameTimer,
    setNameTimer,
    setScreensTimer,
  } = useContext(Context);
  let settingsTimerList = structuredClone(settingsTimer);

  function cancelButton() {
    let newArray = [];
    settingsTimer.map((objSettingsTimer) => {
      objSettingsTimer.key = uuidv4();
      newArray.push(objSettingsTimer);
    });
    setSettingsTimer(newArray);
    setScreensTimer(SCREENS_TIMER.TIMER);
  }

  function saveButton() {
    let newArray = [];
    settingsTimerList.map((objSettingsTimer) => {
      objSettingsTimer.key = uuidv4();
      newArray.push(objSettingsTimer);
    });
    setSettingsTimer(newArray);
    setScreensTimer(SCREENS_TIMER.TIMER);
  }

  return (
    <div className="settings">
      <Editor valueName={nameTimer} setValueName={setNameTimer} />

      <SettingsTimerElem
        settingsTimer={settingsTimer}
        settingsTimerList={settingsTimerList}
      />
      <div className="settings-button">
        <button
          className="settings-button-cancel"
          onClick={(e) => cancelButton()}
        >
          Cancel
        </button>
        <button className="settings-button-save" onClick={(e) => saveButton()}>
          Save
        </button>
      </div>
    </div>
  );
}
export default SettingsTimer;
