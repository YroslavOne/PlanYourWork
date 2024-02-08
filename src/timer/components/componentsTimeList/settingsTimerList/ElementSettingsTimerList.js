import { useState, useContext } from "react";
import TimePicker from "./TimerPicker"
import { Context } from "../../../../Context";

function ElementSettengsTimerList(focuseTime){

const [onDisplayTimePicker, setOnDisplayTimePicker]=useState(false)
    function clickDisplay() {
        setOnDisplayTimePicker(!onDisplayTimePicker)
      }

    return(
        <li onClick={(e) => clickDisplay()}>
        <p>Focuse time</p>
        {true === onDisplayTimePicker && (
          <TimePicker
            initialValue={focuseTime}
            startSelections={1}
            endSelections={99}
          />
        )}
      </li>
    )
}
export default ElementSettengsTimerList