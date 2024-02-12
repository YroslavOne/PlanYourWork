import { useState, useContext } from 'react';
import TimePicker from './TimerPicker';
import { Context } from '../../../../Context';
import { CaretUp } from 'react-bootstrap-icons';
import { CaretDown } from 'react-bootstrap-icons';
import './elementSettingsTimerList.css';

function ElementSettingsTimerList(props) {
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
          <a>
            {onDisplayTimePicker === true ? (
              <CaretUp className="element-settings-timer-list-arrow" />
            ) : (
              <CaretDown className="element-settings-timer-list-arrow" />
            )}
          </a>
        </div>
      </div>

      {true === onDisplayTimePicker && (
        <TimePicker
          initialValue={valueSettings}
          name={props.name}
          setValueSettings={setValueSettings}
          startSelection={props.startSelection}
          endSelection={props.endSelection}
          settingsTimerList={props.settingsTimerList}
        />
      )}
    </li>
  );
}
export default ElementSettingsTimerList;
