// import Chekes from './chekes';
import ElementSettingsTimerList from './ElementSettingsTimerList';
import './settingsTimerElement.css';

function SettingsTimerElem(props) {
  return (
    <ul className="settings-timer-element">
      {
        props.settingsTimer.map((objSettingsTimer) => {
          return (
            <ElementSettingsTimerList
              settingsTimerList={props.settingsTimerList}
              name={objSettingsTimer.name}
              unit={objSettingsTimer.unit}
              value={objSettingsTimer.value}
              startSelection={objSettingsTimer.startSelection}
              endSelection={objSettingsTimer.endSelection}
              key={objSettingsTimer.key}
            />
          );
        })
        // ((objSettingsTimer, index) => {
        //   element(objSettingsTimer, index);
        //   // console.log('hi');
        // })
      }
    </ul>
  );
}
export default SettingsTimerElem;
