function start() {
  var sec = document.getElementById("sec");
  var min = document.getElementById("min");
  var hr = document.getElementById("hour");
  var s = 0;
  var m = 0;
  var h = 0;
  var sCount = 0;
  var mCount = 0;
  setInterval(() => {
    if (sCount == 360) {
      s = 0;
      m += 6;
      sCount = 0;
      mCount += 12;
      min.style.transform = `rotate(${m}deg)`;
    }
    if (mCount == 360) {
      m = 0;
      h += 6;
      mCount = 0;
      hr.style.transform = `rotate(${h}deg)`;
      min.style.transform = `rotate(${m}deg)`;
    }
    sec.style.transform = `rotate(${s}deg)`;
    s += 6;
    sCount += 6;
  }, 1000);
}
