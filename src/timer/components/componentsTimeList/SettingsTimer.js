import { SCREENS_TIMER } from "../../../Consist";
import { Context } from "../../../Context";
import { useContext } from "react";


function SettingsTimer(){
const {settingsTimer, setScreensTimer, setSettingsTimer } = useContext(Context)

function cancelButton(){
    setScreensTimer(SCREENS_TIMER.TIMER_LIST)
}
function saveButton(){
    setScreensTimer(SCREENS_TIMER.TIMER_LIST)
}


return(
    <div>
        <ul>
            <li>
                <p>Focuse time</p>
                <a>{settingsTimer.focuseTime}</a>
            </li>
            <li>
                <p>Short break</p>
                <a>{settingsTimer.shortBreak}</a>
            </li>
            <li>
                <p>Long break</p>
                <a>{settingsTimer.longBreak}</a>
            </li>
            <li>
                <p>Sections</p>
                <a>{settingsTimer.sections}</a>
            </li>
        </ul>

        <button onClick={(e)=>cancelButton()}>cancel</button>
        <button onClick={(e)=>saveButton()}>save</button>
    </div>

)
}
export default SettingsTimer;