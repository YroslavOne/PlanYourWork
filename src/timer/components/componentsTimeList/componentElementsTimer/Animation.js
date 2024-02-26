function Animation(time, percentForCss, setPercentForCss, allSeconds, percent) {
  let timeLastCycle = 0;
  let increasingPercentage = percentForCss;

  requestAnimationFrame(function animate() {
    let endTime = new Date();

    let timeFraction = endTime - time;

    if (timeFraction > 1000) timeFraction = 1000;
    if (percent>percentForCss){
      increasingPercentage =
      increasingPercentage +
      ((percent - percentForCss) / 1000) * (timeFraction - timeLastCycle);
    }
        
      

    setPercentForCss(increasingPercentage);
    timeLastCycle = timeFraction;
    if (timeFraction < 1000) {
      requestAnimationFrame(animate);
    }
  });
}
export default Animation;
