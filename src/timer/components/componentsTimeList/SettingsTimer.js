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
  let settingsTimerClone = structuredClone(settingsTimer);

  // function getUpdateTimerCallBack() {
  //   return (settingsTimer) => {
  //     let newArray = [];
  //     settingsTimer.map((objSettingsTimer) => {
  //       objSettingsTimer.key = uuidv4();
  //       newArray.push(objSettingsTimer);
  //     });
  //     setSettingsTimer(newArray);
  //     setScreensTimer(SCREENS_TIMER.TIMER);
  //   };
  // }

  // const cancelTimer = getUpdateTimerCallBack();
  // const saveTimer = getUpdateTimerCallBack();

  function saveOrCancelTimer(settingsTimer) {
    // let newArray = [];
    // settingsTimer.map((objSettingsTimer) => {
    //   objSettingsTimer.key = uuidv4();
    //   newArray.push(objSettingsTimer);
    // });
    setSettingsTimer([...settingsTimer.map((timer) => ({ ...timer }))]);
    // setScreensTimer(SCREENS_TIMER.TIMER);
  }

  return (
    <div className="settings">
      <Editor valueName={nameTimer} setValueName={setNameTimer} />

      <SettingsTimerElem settingsTimer={settingsTimerClone} />
      <div className="settings-button">
        <button
          className="settings-button-cancel"
          onClick={(e) => saveOrCancelTimer(settingsTimer)}
        >
          Cancel
        </button>
        <button
          className="settings-button-save"
          onClick={(e) => saveOrCancelTimer(settingsTimerClone)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default SettingsTimer;
