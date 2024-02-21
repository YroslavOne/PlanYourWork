import ElementSettingsTimerList from './TimerSettingItem';
import './TimerSettingsList.css';

function TimerSettingsList(props) {
  //почитать еще раз про деструктуризация
  const { settingsTimer } = props;

  return (
    <ul className="settings-timer-element">
      {settingsTimer.map((objSettingsTimer) => {
        // const { name , value, unit,} = settingsTimer;
        return (
          <ElementSettingsTimerList
            settingsTimer={settingsTimer}
            name={objSettingsTimer.name}
            unit={objSettingsTimer.unit}
            value={objSettingsTimer.value}
            startSelection={objSettingsTimer.startSelection}
            endSelection={objSettingsTimer.endSelection}
            key={objSettingsTimer.key}
          />
        );
      })}
    </ul>
  );
}
export default TimerSettingsList;
