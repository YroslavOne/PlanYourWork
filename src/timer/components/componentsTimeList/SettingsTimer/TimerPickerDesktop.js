import React from 'react';
import Picker from 'react-mobile-picker';
import { useState } from 'react';
import './TimePicker.css';

function TimerPickerDesktop(props) {

  const valueGroups = {
    value: props.valueSettings,
  };
  function handleChange(_, value) {
    props.setValueSettings(value);
    props.settingsTimer.map((objSettingsTimer) => {
      if (objSettingsTimer.name === props.name) {
        objSettingsTimer.value = value;
      }
    });
  }

  return (
    <Picker
      className="picker"
      optionGroups={props.selections}
      valueGroups={valueGroups}
      onChange={handleChange}
    />
  );
}

export default TimerPickerDesktop;
