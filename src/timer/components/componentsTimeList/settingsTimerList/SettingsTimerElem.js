// import Chekes from './chekes';
import ElementSettingsTimerList from './ElementSettingsTimerList';
import './settingsTimerElement.css';

function SettingsTimerElem(props) {
  const { settingsTimer } = props;

  return (
    <ul className="settings-timer-element">
      {
        settingsTimer.map((objSettingsTimer) => {
          return (
            <ElementSettingsTimerList
              // settingsTimerList={settingsTimerList}
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
