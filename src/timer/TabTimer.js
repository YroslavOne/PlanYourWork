import { Context } from '../Context.js';
import { useContext } from 'react';
import { SCREENS_TIMER } from '../Consist.js';
import SettingsTimer from './components/componentsTimeList/SettingsTimer.js';
import Timer from './components/Timer.js';

function TabTimer() {
  const { screensTimer, setScreensTimer } = useContext(Context);
  function clickTimer(screen) {
    setScreensTimer(screen);
  }

  return (
    <div className="Tab">
      {/* {screensTimer === SCREENS_TIMER.TIMER_LIST && <TimerList />} */}
      {screensTimer === SCREENS_TIMER.SETTINGS_TIMER && <SettingsTimer />}
      {screensTimer === SCREENS_TIMER.TIMER && <Timer />}
      <button onClick={(e) => clickTimer(SCREENS_TIMER.SETTINGS_TIMER)}>
        SETTINGS_TIMER
      </button>
      <button onClick={(e) => clickTimer(SCREENS_TIMER.TIMER)}>TIMER</button>
    </div>
  );
}
export default TabTimer;
