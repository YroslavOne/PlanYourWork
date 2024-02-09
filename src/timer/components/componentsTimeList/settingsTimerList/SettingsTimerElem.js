// import Chekes from './chekes';
import ElementSettingsTimerList from './ElementSettingsTimerList';

function SettingsTimerElem(props) {
  console.log(props.settingsTimer);

  // function element(objSettingsTimer, index) {
  //   console.log(objSettingsTimer);
  //   return (

  //   );
  // }
  return (
    <ul>
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
