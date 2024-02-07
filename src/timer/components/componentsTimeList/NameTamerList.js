import { SCREENS, SCREENS_TIMER } from "../../../Consist";
import { Context } from "../../../Context";
import { useContext } from "react";

function NameTimerList(props) {

    const {timerList, setSettingsTimer, setScreensTimer} = useContext(Context)


function openSettingsTimer(idElem){
  setScreensTimer(SCREENS_TIMER.SETTINGS_TIMER)
    timerList.map((objTimerList)=>{
        if(objTimerList.id===idElem){
          setSettingsTimer(objTimerList)
        }
    })
}

    
  return (
    <li key={props.id} id={props.id} onClick={(e)=> openSettingsTimer(e.target.id)}>
        <h1 key={props.id} id={props.id} onClick={(e)=> openSettingsTimer(e.target.id)}> {props.name}</h1>
    </li>
  );
}
export default NameTimerList;
