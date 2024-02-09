import { useState, useContext } from 'react';
import TimePicker from './TimerPicker';
import { Context } from '../../../../Context';
import { CaretUp } from 'react-bootstrap-icons';
import { CaretDown } from 'react-bootstrap-icons';

function ElementSettingsTimerList(props) {
  const [onDisplayTimePicker, setOnDisplayTimePicker] = useState(false);
  const [valueSettings, setValueSettings] = useState(props.value);
  function clickDisplay() {
    setOnDisplayTimePicker(!onDisplayTimePicker);
  }

  return (
    <li key={props.key}>
      <div onClick={(e) => clickDisplay()}>
        <h4 className="title-settings-function">{props.name}</h4>
        <p>
          {valueSettings} {props.unit}
        </p>
        <a>{onDisplayTimePicker === false ? <CaretUp /> : <CaretDown />}</a>
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
