function passwordValue() {
  const num = document.querySelector(".password").value.length;
  const text = document.querySelector(".response");

  document.querySelector(".strengthMeter").style.width = num * 5 + "px";
  progressBarColor(num * 5, text);
}
function progressBarColor(num, text) {
  if (num < 40) {
    document.querySelector(".strengthMeter").style.background = "red";
    text.innerHTML = "Should be longer";
  } else if (num < 60) {
    document.querySelector(".strengthMeter").style.background = "orange";
    text.innerHTML = "Pretty good";
  } else if (num > 60) {
    document.querySelector(".strengthMeter").style.background = "green";
    text.innerHTML = "Grrrreat!";
  }
}
