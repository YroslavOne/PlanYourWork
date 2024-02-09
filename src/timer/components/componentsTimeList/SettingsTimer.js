import { SCREENS_TIMER, SCREENS_SETTINGS } from '../../../Consist';
import { Context } from '../../../Context';
import { useContext, useEffect, useRef, useState } from 'react';
import ElementSettingsTimerList from './settingsTimerList/ElementSettingsTimerList';
import UpdateSettingsInTimerList from './settingsTimerList/UpdateSettingsInTimerList';
import Editor from './settingsTimerList/EditorName';

function SettingsTimer() {
  const {
    settingsTimer,
    setScreensTimer,
    setSettingsTimer,
    timerList,
    setTimerList,
  } = useContext(Context);
  let settingsTimerList = structuredClone(settingsTimer);

  const [valueName, setValueName] = useState(settingsTimer.name);
  const [valueFocusTime, setValueFocusTime] = useState(
    settingsTimer.focuseTime
  );
  const [valueShortBreak, setValueShortBreak] = useState(
    settingsTimer.shortBreak
  );
  const [valueLongBreak, setValueLongBreak] = useState(settingsTimer.longBreak);
  const [valueSections, setValueSections] = useState(settingsTimer.sections);

  settingsTimerList.name = valueName;
  settingsTimerList.focuseTime = valueFocusTime;
  settingsTimerList.shortBreak = valueShortBreak;
  settingsTimerList.longBreak = valueLongBreak;
  settingsTimerList.sections = valueSections;

  function cancelButton() {
    setScreensTimer(SCREENS_TIMER.TIMER_LIST);
  }
  function saveButton() {
    setScreensTimer(SCREENS_TIMER.TIMER_LIST);
    UpdateSettingsInTimerList(timerList, settingsTimerList, setTimerList);
  }

  return (
    <div>
      <Editor valueName={valueName} setValueName={setValueName} />

      <ul>
        <ElementSettingsTimerList
          name={'Focuse time'}
          unit={'min'}
          value={valueFocusTime}
          setValue={setValueFocusTime}
          startSelections={1}
          endSelections={60}
        />
        <ElementSettingsTimerList
          name={'Short break'}
          unit={'min'}
          value={valueShortBreak}
          setValue={setValueShortBreak}
          startSelections={1}
          endSelections={60}
        />
        <ElementSettingsTimerList
          name={'Long break'}
          unit={'min'}
          value={valueLongBreak}
          setValue={setValueLongBreak}
          startSelections={1}
          endSelections={60}
        />
        <ElementSettingsTimerList
          name={'Sections'}
          unit={'intervals'}
          value={valueSections}
          setValue={setValueSections}
          startSelections={1}
          endSelections={10}
        />
      </ul>

      <button onClick={(e) => cancelButton()}>cancel</button>
      <button onClick={(e) => saveButton()}>save</button>
    </div>
  );
}
export default SettingsTimer;
