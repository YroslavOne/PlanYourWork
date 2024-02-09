import { SCREENS_TIMER, SCREENS_SETTINGS } from '../../../Consist';
import { Context } from '../../../Context';
import { useContext, useEffect, useRef, useState } from 'react';
// import ElementSettingsTimerList from './settingsTimerList/ElementSettingsTimerList';
import SettingsTimerElem from './settingsTimerList/SettingsTimerElem';
import { v4 as uuidv4 } from 'uuid';

import Editor from './settingsTimerList/EditorName';

function SettingsTimer() {
  const { settingsTimer, setSettingsTimer, nameTimer, setnameTimer } =
    useContext(Context);
  let settingsTimerList = structuredClone(settingsTimer);

  function cancelButton() {
    let newArray = [];
    settingsTimer.map((objSettingsTimer) => {
      objSettingsTimer.key = uuidv4();
      newArray.push(objSettingsTimer);
    });
    setSettingsTimer(newArray);
  }

  function saveButton() {
    let newArray = [];
    settingsTimerList.map((objSettingsTimer) => {
      objSettingsTimer.key = uuidv4();
      newArray.push(objSettingsTimer);
    });
    setSettingsTimer(newArray);
  }

  return (
    <div>
      <Editor valueName={nameTimer} setValueName={setnameTimer} />

      <SettingsTimerElem
        settingsTimer={settingsTimer}
        settingsTimerList={settingsTimerList}
      />
      <button onClick={(e) => cancelButton()}>cancel</button>
      <button onClick={(e) => saveButton()}>save</button>
    </div>
  );
}
export default SettingsTimer;
