import { Context } from "../Context.js";
import { useContext } from "react";
import TimerList from "./components/TimerList.js";
import { SCREENS_TIMER } from "../Consist.js";
import SettingsTimer from "./components/componentsTimeList/SettingsTimer.js";

function TabTimer() {
  const { screensTimer } = useContext(Context);
  
  return (
    <div className="Tab">
      {screensTimer ===SCREENS_TIMER.TIMER_LIST&& <TimerList/>}
      {screensTimer ===SCREENS_TIMER.SETTINGS_TIMER&& <SettingsTimer/>}
      
    </div>
  );
}
export default TabTimer;
