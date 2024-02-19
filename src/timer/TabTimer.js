import { Context } from "../Context.js";
import { useContext } from "react";
import { SCREENS_TIMER } from "../Consist.js";
import SettingsWindow from "./components/componentsTimeList/SettingsWindow.js";
import Timer from "./components/Timer.js";
import "./TabTimer.css";
import ButtonsForMain from "./ButtonsForMain.js";

function TabTimer(props) {
  const { screensTimer, setScreensTimer } = useContext(Context);

  return (
    <div className="tab">
      {screensTimer === SCREENS_TIMER.SETTINGS_TIMER && <SettingsWindow />}
      {screensTimer === SCREENS_TIMER.TIMER && <Timer />}
      <ButtonsForMain
        setScreensTimer={setScreensTimer}
        screensTimer={screensTimer}
      />
    </div>
  );
}
export default TabTimer;
