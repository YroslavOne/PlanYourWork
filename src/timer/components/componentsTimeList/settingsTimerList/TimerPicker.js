import { useState } from "react";
import Picker from "react-mobile-picker";

function TimerPicker(props) {
  let selections = {
    value: [],
  };

  for (let i = props.startSelections; i <= props.endSelections; i++) {
    selections.value.push(i);
  }

  const [pickerValue, setPickerValue] = useState({
    value: props.initialValue,
  });

  return (
    <Picker value={pickerValue} onChange={setPickerValue}>
      {Object.keys(selections).map((name) => (
        <Picker.Column key={name} name={name}>
          {selections[name].map((option) => (
            <Picker.Item key={option} value={option}>
              {option}
            </Picker.Item>
          ))}
        </Picker.Column>
      ))}
    </Picker>
  );
}

export default TimerPicker;
