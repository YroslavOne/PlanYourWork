import { SCREENS, SCREENS_TIMER } from '../../../Consist';
import { Context } from '../../../Context';
import { useContext } from 'react';
import { Pencil, Play, Trash3 } from 'react-bootstrap-icons';
import DeleteTimer from './DeleteTimer';

function NameTimerList(props) {
  const { timerList, setSettingsTimer, setScreensTimer, setTimerList } =
    useContext(Context);

  function openSettingsTimer(idElem) {
    setScreensTimer(SCREENS_TIMER.SETTINGS_TIMER);
    timerList.map((objTimerList) => {
      if (objTimerList.id === Number(idElem)) {
        setSettingsTimer(objTimerList);
      }
    });
  }

  return (
    <li key={props.id} id={props.id}>
      <h1 key={props.id} id={props.id}>
        {' '}
        {props.name}
      </h1>
      <Pencil onClick={(e) => openSettingsTimer(props.id)} />
      <Play />
      <Trash3 onClick={(e) => DeleteTimer(timerList, props.id, setTimerList)} />
    </li>
  );
}
export default NameTimerList;
