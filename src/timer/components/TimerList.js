import { Context } from "../../Context.js";
import { useContext } from "react";
import NameTimerList from "./componentsTimeList/NameTamerList.js";

function TimerList() {
  const { timerList } = useContext(Context);

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
      <button>Add New</button>
    </div>
  );
}
export default TimerList;
