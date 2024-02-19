import ElementSettingsTimerList from "./TimerSettingItem";
import "./TimerSettingsList.css";

function TimerSettingsList(props) {
  const { settingsTimer } = props;

  return (
    <ul className="settings-timer-element">
      {settingsTimer.map((objSettingsTimer) => {
        return (
          <ElementSettingsTimerList
            settingsTimer={props.settingsTimer}
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
