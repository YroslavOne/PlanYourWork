import { useCallback, useState } from "react";
import TimerPicker from "./TimerPicker";
import TimerPickerDesktop from "./TimerPickerDesktop";
import { CaretUp } from "react-bootstrap-icons";
import { CaretDown } from "react-bootstrap-icons";
import "./TimerSettingItem.css";

function TimerSettingItem(props) {
  const [onDisplayTimePicker, setOnDisplayTimePicker] = useState(false);
  const [valueSettings, setValueSettings] = useState(props.value);
  // function clickDisplay() {
  //   setOnDisplayTimePicker(!onDisplayTimePicker);
  // }
  const clickDisplay = useCallback(
    () => setOnDisplayTimePicker(!onDisplayTimePicker),
    [onDisplayTimePicker]
  );
  let selections = {
    value: [],
  };
  for (let i = props.startSelection; i <= props.endSelection; i++) {
    selections.value.push(i);
  }

  return (
    <li
      key={props.key}
      className="element-settings-timer-list"
      onClick={clickDisplay}
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

      {onDisplayTimePicker && window.innerWidth > 1366 && (
        <TimerPickerDesktop
          name={props.name}
          valueSettings={valueSettings}
          setValueSettings={setValueSettings}
          selections={selections}
          settingsTimer={props.settingsTimer}
        />
      )}
      {onDisplayTimePicker && window.innerWidth < 1366 && (
        <TimerPicker
          valueSettings={valueSettings}
          name={props.name}
          setValueSettings={setValueSettings}
          selections={selections}
          settingsTimer={props.settingsTimer}
        />
      )}
    </li>
  );
}
export default TimerSettingItem;
