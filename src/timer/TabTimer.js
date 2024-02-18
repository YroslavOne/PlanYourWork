import { Context } from '../Context.js';
import { useContext, useState } from 'react';
import { SCREENS_TIMER } from '../Consist.js';
import SettingsTimer from './components/componentsTimeList/SettingsTimer.js';
import Timer from './components/Timer.js';
import { Clock, Sliders2Vertical } from 'react-bootstrap-icons';
import './tabTimer.css';

function TabTimer() {
  const { screensTimer, setScreensTimer } = useContext(Context);

  // const [value, setValue] = useState(1);

  // function chengeValue(e) {}

  function clickTimer(screen, e) {
    setScreensTimer(screen);
    // setValue(e.target.value);
  }

  return (
    <div className="tab">
      {screensTimer === SCREENS_TIMER.SETTINGS_TIMER && <SettingsTimer />}
      {screensTimer === SCREENS_TIMER.TIMER && <Timer />}
      // cделай отдельный компанент
      <div className="tab-button">
        <Clock
          value="1"
          onClick={(e) => clickTimer(SCREENS_TIMER.TIMER, e)}
          className={
            screensTimer === SCREENS_TIMER.TIMER
              ? 'tab-button-turn'
              : 'tab-button-turn-off'
          }
        />

        <Sliders2Vertical
          value="2"
          onClick={(e) => clickTimer(SCREENS_TIMER.SETTINGS_TIMER, e)}
          className={
            screensTimer === SCREENS_TIMER.SETTINGS_TIMER
              ? 'tab-button-turn'
              : 'tab-button-turn-off'
          }
        />
      </div>
      {/* <input
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
        
      />
      <label name="settings" onChange={(e) => clickTimer(SCREENS_TIMER.SETTINGS_TIMER, e)}>
        <Sliders2Vertical />
      </label> */}
    </div>
  );
}
export default TabTimer;
