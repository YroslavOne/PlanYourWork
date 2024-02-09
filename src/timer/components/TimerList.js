import { Context } from '../../Context.js';
import { useContext } from 'react';
import NameTimerList from './componentsTimeList/NameTamerList.js';
import { v4 as uuidv4 } from 'uuid';
import { SCREENS_TIMER } from '../../Consist.js';

function TimerList() {
  const { timerList, thisIdForAdd, setSettingsTimer, setScreensTimer } =
    useContext(Context);

  function addNewTimer() {
    setScreensTimer(SCREENS_TIMER.SETTINGS_TIMER);
    setSettingsTimer({
      name: 'Add new timer',
      focuseTime: 1,
      shortBreak: 1,
      longBreak: 1,
      sections: 1,
      id: thisIdForAdd + 1,
      key: uuidv4(),
    });
  }

  function objectNullThen() {
    if (timerList !== null) {
      return (
        <ul>
          {timerList.map((objTimerList) => (
            <NameTimerList
              id={objTimerList.id}
              key={objTimerList.key}
              name={objTimerList.name}
            />
          ))}
        </ul>
      );
    } else {
      return <h2>empty</h2>;
    }
  }
  return (
    <div className="Name-list">
      {objectNullThen()}
      <button onClick={(e) => addNewTimer()}>Add New</button>
    </div>
  );
}
export default TimerList;
