import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SCREENS, SCREENS_TIMER } from './Consist';

export const Context = React.createContext({
  settingsTimer: null,
  setSettingsTimer: () => {},
  screensTimer: null,
  setScreensTimer: () => {},
  forSaveSettingsTimer: null,
  setForSaveSettingsTimer: () => {},
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
      endSelection: 60,
      key: uuidv4(),
    },
  ];

  if (localStorage?.SettingTimer) {
  } else {
    localStorage.SettingTimer = JSON.stringify(settingTimer);
  }

  const [settingsTimer, setSettingsTimer] = useState(
    JSON.parse(localStorage.SettingTimer)
  );
  const [forSaveSettingsTimer, setForSaveSettingsTimer] = useState(null);
  const [screensTimer, setScreensTimer] = useState(
    SCREENS_TIMER.SETTINGS_TIMER
  );
  localStorage.SettingTimer = JSON.stringify(settingsTimer);

  return (
    <Context.Provider
      value={{
        settingsTimer,
        setSettingsTimer,
        screensTimer,
        setScreensTimer,
        forSaveSettingsTimer,
        setForSaveSettingsTimer,
      }}
    >
      {children}
    </Context.Provider>
  );
};
