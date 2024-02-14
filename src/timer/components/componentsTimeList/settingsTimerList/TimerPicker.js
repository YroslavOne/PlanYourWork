import { useContext, useState } from 'react';
import Picker from 'react-mobile-picker';
import "./timePicker.css"
// import { Context } from '../../../../Context';

function TimerPicker(props) {
  // const { forSaveSettingsTimer, setForSaveSettingsTimer } = useContext(Context);

  // let settingsList = structuredClone();
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
  props.settingsTimerList.map((objSettingsTimerList) => {
    if (objSettingsTimerList.name === props.name) {
      objSettingsTimerList.value = pickerValue.value;
    }
  });

  return (
    <Picker className='picker'  style={null}  color='blue' value={pickerValue} onChange={setPickerValue}>
      {Object.keys(selections).map((name) => (
        <Picker.Column className='picker-colum' style={null} key={name} name={name}>
          {selections[name].map((option) => (
            <Picker.Item className='picker-colum-item'  style={null}  key={option} value={option}>
              
              {option}
              
            </Picker.Item>
          ))}
          <div>
              </div>
        </Picker.Column>
      ))}
    </Picker>
  );
}

export default TimerPicker;
