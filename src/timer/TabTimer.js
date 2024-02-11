import { Context } from '../Context.js';
import { useContext, useState } from 'react';
import { SCREENS_TIMER } from '../Consist.js';
import SettingsTimer from './components/componentsTimeList/SettingsTimer.js';
import Timer from './components/Timer.js';
import { Clock, Sliders2Vertical } from 'react-bootstrap-icons';
import './tabTimer.css';

function TabTimer() {
  const { screensTimer, setScreensTimer } = useContext(Context);

  const [value, setValue] = useState(1);

  function chengeValue(e) {}

  function clickTimer(screen, e) {
    setScreensTimer(screen);
    setValue(e.target.value);
  }

  return (
    <div className="Tab">
      {/* {screensTimer === SCREENS_TIMER.TIMER_LIST && <TimerList />} */}
      {screensTimer === SCREENS_TIMER.SETTINGS_TIMER && <SettingsTimer />}
      {screensTimer === SCREENS_TIMER.TIMER && <Timer />}

      {/* <button onClick={(e) => clickTimer(SCREENS_TIMER.TIMER)}></button>
      <button
        onClick={(e) => clickTimer(SCREENS_TIMER.SETTINGS_TIMER)}
      ></button> */}

      <input
        type="radio"
        name="timer"
        value="1"
        checked={value == '1' ? true : false}
        onChange={(e) => clickTimer(SCREENS_TIMER.TIMER, e)}
      />
      <label name="settings">
        {' '}
        <Clock />
      </label>

      <input
        type="radio"
        name="settings"
        value="2"
        checked={value == '2' ? true : false}
        onChange={(e) => clickTimer(SCREENS_TIMER.SETTINGS_TIMER, e)}
      />
      <label name="settings">
        {' '}
        <Sliders2Vertical />
      </label>
    </div>
  );
}
export default TabTimer;
