const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains3 = document.getElementById("mountains3");
const mountains4 = document.getElementById("mountains4");
const river = document.getElementById("river");
const boat = document.getElementById("boat");
const dhedy = document.getElementById("dhedy");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  boat.style.left = value * 3 + "px";
  boat.style.top = value + "px";
  river.style.top = value + "px";
  dhedy.style.fontSize = value + "px";
  if (value >= 67) {
    dhedy.style.fontSize = 67 + "px";
    dhedy.style.position = "fixed";
    if (value >= 460) {
      dhedy.style.display = "none";
    } else {
      dhedy.style.display = "block";
    }
  } else {
    dhedy.style.fontSize = value + "px";
  }
  if (value >= 120) {
    document.querySelector(".main").style.background =
      "linear-gradient(to top, black, rgb(14 105 255))";
  } else {
    document.querySelector(".main").style.background =
      " linear-gradient(to top, black, rgb(38, 1, 39))";
  }
};
