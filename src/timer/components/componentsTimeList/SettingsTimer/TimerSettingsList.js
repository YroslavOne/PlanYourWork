import ElementSettingsTimerList from './TimerSettingItem';
import './TimerSettingsList.css';

function TimerSettingsList(props) {
  //почитать еще раз про деструктуризация
  const { settingsTimer } = props;

  return (
    <ul className="settings-timer-element">
      {settingsTimer.map((objSettingsTimer) => {
        const { name , value, unit, startSelection, endSelection, key} = objSettingsTimer;
        return (
          <ElementSettingsTimerList
            settingsTimer={settingsTimer}
            name={name}
            unit={unit}
            value={value}
            startSelection={startSelection}
            endSelection={endSelection}
            key={key}
          />
        );
      })}
    </ul>
  );
}
export default TimerSettingsList;
