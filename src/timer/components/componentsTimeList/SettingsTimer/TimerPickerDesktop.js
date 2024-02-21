import React from 'react';
import Picker from 'react-mobile-picker-scroll';
import { useState } from 'react';
import './TimePicker.css';

function TimerPickerDesktop(props) {
  let selections = {
    value: [],
  };

  for (let i = props.startSelection; i <= props.endSelection; i++) {
    selections.value.push(i);
  }

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
      optionGroups={selections}
      valueGroups={valueGroups}
      onChange={handleChange}
    />
  );
}

export default TimerPickerDesktop;
