function DeleteTimer(timerList, id, setTimerList) {
  console.log(id);
  let timersList = [];
  let deletedTimer = false;
  timerList.map((objTimerList) => {
    if (objTimerList.id === id) {
      deletedTimer = true;
    } else {
      timersList.push(objTimerList);
    }
  });
  setTimerList(timersList);
}

export default DeleteTimer;
