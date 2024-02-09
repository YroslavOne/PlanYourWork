import { useContext } from 'react';
import { Context } from '../../Context';
import ElementsTimer from './componentsTimeList/ElementsTimer';

function Timer() {
  const { nameTimer, setnameTimer } = useContext(Context);
  return (
    <div>
      <h1>promodoro timer</h1>
      <h2>Task: {nameTimer}</h2>
      <ElementsTimer />
    </div>
  );
}
export default Timer;
