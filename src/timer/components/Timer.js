import { useContext } from 'react';
import { Context } from '../../Context';
import ElementsTimer from './componentsTimeList/ElementsTimer';
import { Pencil } from 'react-bootstrap-icons';
import { SCREENS_TIMER } from './../../Consist';

function Timer() {
  const { nameTimer, setScreensTimer } = useContext(Context);

  function openSettings() {
    setScreensTimer(SCREENS_TIMER.SETTINGS_TIMER);
  }

  return (
    <div>
      <h1>promodoro timer</h1>
      <div onClick={(e) => openSettings()}>
        <h2>Task: {nameTimer}</h2>
        <Pencil />
      </div>

      <ElementsTimer />
    </div>
  );
}
export default Timer;
