import Picker from 'react-mobile-picker';
import { useState } from 'react';
import './TimePicker.css';

function TimerPicker(props) {
  let selections = {
    value: [],
  };

  for (let i = props.startSelection; i <= props.endSelection; i++) {
    selections.value.push(i);
  }

  const [pickerValue, setPickerValue] = useState({
    value: props.initialValue,
  });
  props.setValueSettings(pickerValue.value);
  props.settingsTimer.map((objSettingsTimer) => {
    if (objSettingsTimer.name === props.name) {
      objSettingsTimer.value = pickerValue.value;
    }
  });

  return (
    <Picker
      className="picker"
      style={null}
      color="blue"
      value={pickerValue}
      onChange={setPickerValue}
    >
      {Object.keys(selections).map((name) => (
        <Picker.Column
          className="picker-colum"
          style={null}
          key={name}
          name={name}
        >
          {selections[name].map((option) => (
            <Picker.Item
              className="picker-colum-item"
              style={null}
              key={option}
              value={option}
            >
              {option}
            </Picker.Item>
          ))}
          <div></div>
        </Picker.Column>
      ))}
    </Picker>
  );
}

export default TimerPicker;
