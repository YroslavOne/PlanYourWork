import { useState } from 'react';
// import TimePicker from './TimerPicker';
import TimerPickerDesktop from './TimerPickerDesktop';
import { CaretUp } from 'react-bootstrap-icons';
import { CaretDown } from 'react-bootstrap-icons';
import './TimerSettingItem.css';

function TimerSettingItem(props) {
  const [onDisplayTimePicker, setOnDisplayTimePicker] = useState(false);
  const [valueSettings, setValueSettings] = useState(props.value);
  function clickDisplay() {
    setOnDisplayTimePicker(!onDisplayTimePicker);
  }

  return (
    <li
      key={props.key}
      className="element-settings-timer-list"
      onClick={(e) => clickDisplay()}
    >
      <div className="element-settings-timer-list-div">
        <h4 className="element-settings-timer-list-title">{props.name}</h4>
        <div className="element-settings-timer-list-block">
          <p className="element-settings-timer-list-value">
            {valueSettings} {props.unit}
          </p>
          <a className="element-settings-timer-list-arrow-style">
            {onDisplayTimePicker === true ? (
              <CaretUp className="element-settings-timer-list-arrow" />
            ) : (
              <CaretDown className="element-settings-timer-list-arrow" />
            )}
          </a>
        </div>
      </div>

      {true === onDisplayTimePicker && (
        <TimerPickerDesktop
          initialValue={valueSettings}
          name={props.name}
          setValueSettings={setValueSettings}
          startSelection={props.startSelection}
          endSelection={props.endSelection}
          settingsTimer={props.settingsTimer}
        />
        // <App />
      )}
    </li>
  );
}
export default TimerSettingItem;
