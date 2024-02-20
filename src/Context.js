import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SCREENS_TIMER } from './Consist';

export const Context = React.createContext({
  settingsTimer: null,
  setSettingsTimer: () => {},
  screensTimer: null,
  setScreensTimer: () => {},
  nameTimer: null,
  setNameTimer: () => {},
});

export const ContextProvider = ({ children }) => {
  let settingTimer = [
    {
      name: 'Focuse time',
      unit: 'min',
      value: 25,
      startSelection: 1,
      endSelection: 60,
      key: uuidv4(),
    },
    {
      name: 'Short break',
      unit: 'min',
      value: 5,
      startSelection: 1,
      endSelection: 60,
      key: uuidv4(),
    },
    {
      name: 'Long break',
      unit: 'min',
      value: 15,
      startSelection: 1,
      endSelection: 60,
      key: uuidv4(),
    },
    {
      name: 'Sections',
      unit: 'intervals',
      value: 4,
      startSelection: 1,
      endSelection: 10,
      key: uuidv4(),
    },
  ];

  if (!localStorage?.SettingTimer) {
    localStorage.SettingTimer = JSON.stringify(settingTimer);
  }
  if (!localStorage?.NameTimer) {
    localStorage.setItem('NameTimer', 'Add new timer');
  }

  const [settingsTimer, setSettingsTimer] = useState(
    JSON.parse(localStorage.SettingTimer)
  );
  const [nameTimer, setNameTimer] = useState(localStorage?.NameTimer);

  const [screensTimer, setScreensTimer] = useState(SCREENS_TIMER.TIMER);

useEffect(()=>{
  localStorage.SettingTimer = JSON.stringify(settingsTimer);
  localStorage.NameTimer = nameTimer;
},[nameTimer,settingsTimer])



  return (
    <Context.Provider
      value={{
        settingsTimer,
        setSettingsTimer,
        screensTimer,
        setScreensTimer,
        nameTimer,
        setNameTimer,
      }}
    >
      {children}
    </Context.Provider>
  );
};
