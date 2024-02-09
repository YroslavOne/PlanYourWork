function UpdateSettingsInTimerList(timerList, settingsTimerList, setTimerList) {
  let timersList = [];
  let newTimerAdd = false;
  timerList.map((objTimerList) => {
    if (objTimerList.id === settingsTimerList.id) {
      timersList.push(settingsTimerList);
      newTimerAdd = true;
    } else {
      timersList.push(objTimerList);
    }
  });
  if (newTimerAdd !== true) {
    timersList.push(settingsTimerList);
  }
  setTimerList(timersList);
}

export default UpdateSettingsInTimerList;
