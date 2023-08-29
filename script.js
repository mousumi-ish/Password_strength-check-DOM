function passwordValue() {
  const num = document.querySelector(".password").value.length;
  const text = document.querySelector(".response");

  document.querySelector(".strengthMeter").style.width = num * 5 + "px";
  progressBarColor(num * 5, text);
}
function progressBarColor(num, text) {
  document.querySelector(".strengthMeter").style.background =
    num < 8 ? "red" : num < 12 ? "orange" : "green";
  text.innerHTML =
    num < 8 ? "Should be longer" : num < 12 ? "Pretty good" : "Grrrreat!";
}
