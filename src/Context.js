import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SCREENS, SCREENS_TIMER } from "./Consist";

export const Context = React.createContext({
  timerList: null,
  setTimerList: () => {},
  settingsTimer: null,
  setSettingsTimer: () => {},
  screensTimer: null,
  setScreensTimer: () => {},
});

export const ContextProvider = ({ children }) => {
  let arrayTimerList = [
    {
      name: "timer1",
      focuseTime: 20,
      shortBreak: 5,
      longBreak: 15,
      sections: 4,
      id: 1,
      key: uuidv4(),
    },
    {
      name: "timer2",
      focuseTime: 20,
      shortBreak: 5,
      longBreak: 15,
      sections: 4,
      id: 2,
      key: uuidv4(),
    },
  ];

  if (localStorage?.TimerList) {
  } else {
    localStorage.TimerList = JSON.stringify(arrayTimerList);
  }
  let timersList = JSON.parse(localStorage.TimerList);

  const [timerList, setTimerList] = useState(arrayTimerList);
  const [settingsTimer, setSettingsTimer] = useState(arrayTimerList);
  const [screensTimer, setScreensTimer] = useState(SCREENS_TIMER.TIMER_LIST);

  localStorage.TimerList = JSON.stringify(timerList);

  return (
    <Context.Provider
      value={{
        timerList,
        setTimerList,
        settingsTimer,
        setSettingsTimer,
        screensTimer,
        setScreensTimer,
      }}
    >
      {children}
    </Context.Provider>
  );
};
