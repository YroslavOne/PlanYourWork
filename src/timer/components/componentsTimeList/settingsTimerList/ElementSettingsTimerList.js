import { useState, useContext } from "react";
import TimePicker from "./TimerPicker"
import { Context } from "../../../../Context";

function ElementSettengsTimerList(props){

const [onDisplayTimePicker, setOnDisplayTimePicker]=useState(false)
    function clickDisplay( ) {
        setOnDisplayTimePicker(!onDisplayTimePicker)
      }

    return(
        <li onClick={(e) => clickDisplay()}>
        <p>{props.name}</p>
        {true === onDisplayTimePicker && (
          <TimePicker
            initialValue={props.value}
            startSelections={1}
            endSelections={99}
          />
        )}
      </li>
    )
}
export default ElementSettengsTimerList