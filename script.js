document.querySelector(".strengthMeter").style.width = 0;
function passwordValue() {
  const num = document.querySelector(".password").value.length;

  document.querySelector(".strengthMeter").style.width = num * 5 + "px";
  progressBarColor(num * 5);
}
function progressBarColor(num) {
  if (num < 40) {
    document.querySelector(".strengthMeter").style.background = "red";
  } else if (num < 60) {
    document.querySelector(".strengthMeter").style.background = "orange";
  } else if (num > 60) {
    document.querySelector(".strengthMeter").style.background = "green";
  }
}
