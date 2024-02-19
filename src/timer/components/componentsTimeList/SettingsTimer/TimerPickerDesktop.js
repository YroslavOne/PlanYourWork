import React, { Component } from 'react';
import Picker from 'react-mobile-picker-scroll';
import { useState } from 'react';
import './TimePicker.css';

class TimerPickerDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        title: 'Mr.',
        firstName: 'Micheal',
        secondName: 'Jordan',
      },
      optionGroups: {
        title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
      },
    };
  }

  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value,
      },
    }));
  };

  render() {
    const { optionGroups, valueGroups } = this.state;

    return (
      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={this.handleChange}
      />
    );
  }
}

export default TimerPickerDesktop;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       valueGroups: {
//         title: 'Mr.',
//         firstName: 'Micheal',
//         secondName: 'Jordan',
//       },
//       optionGroups: {
//         title: [
//           { value: 'mr', label: 'Mr.' },
//           { value: 'ms', label: 'Ms.' },
//           { value: 'dr', label: 'Dr.' },
//         ],
//         firstName: [
//           { value: 'John', label: 'John' },
//           { value: 'Micheal', label: 'Micheal' },
//           { value: 'Elizabeth', label: 'Elizabeth' },
//         ],
//         secondName: [
//           { value: 'Lennon', label: 'Lennon' },
//           { value: 'Jackson', label: 'Jackson' },
//           { value: 'Jordan', label: 'Jordan' },
//           { value: 'Legend', label: 'Legend' },
//           { value: 'Taylor', label: 'Taylor' },
//         ],
//       },
//     };
//   }

//   // Update the value in response to user picking event
//   handleChange = (name, value) => {
//     this.setState(({ valueGroups }) => ({
//       valueGroups: {
//         ...valueGroups,
//         [name]: value,
//       },
//     }));
//   };

//   render() {
//     const { optionGroups, valueGroups } = this.state;

//     return (
//       <Picker
//         optionGroups={optionGroups}
//         valueGroups={valueGroups}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }
// export default App;
