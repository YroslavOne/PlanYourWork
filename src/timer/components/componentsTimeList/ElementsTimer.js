import { useContext, useState, useEffect } from 'react';
import { Context } from '../../../Context';
import Clock from './componentElementsTimer/Clock';

function ElementsTimer() {
  const { settingsTimer } = useContext(Context);

  const [secondsLeft, setSecondsLeft] = useState(5);
  const [pause, setPause] = useState(true);

  let intervals = [];
  for (let i = 1; i <= settingsTimer[3].value; i++) {
    if (i < settingsTimer[3].value) {
      intervals.push(settingsTimer[0].value);
      intervals.push(settingsTimer[1].value);
    } else if (i === settingsTimer[3].value) {
      intervals.push(settingsTimer[0].value);
      intervals.push(settingsTimer[2].value);
    }
  }

  function turnPause() {
    setPause(!pause);
  }
  return (
    <div>
      <Clock intervals={intervals} pause={pause} />
      <button onClick={(e) => turnPause()}>pause</button>
    </div>
  );
}
export default ElementsTimer;
