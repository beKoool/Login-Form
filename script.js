function toggleForm() {
  let container = document.querySelector(".main-container");
  let section = document.querySelector("section");
  container.classList.toggle("active");
  section.classList.toggle("active");
}

function clickForm() {
  // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  audio.play();
  document.getElementById("h2-signin-up").innerHTML = "RickRoll'd";
  document.getElementById("imgBox").src =
    "https://i.pinimg.com/originals/f7/85/7f/f7857f7dc8194d91da6b825d3ab90fce.gif";
  section.classList.toggle("changed");
}

let audio = new Audio("./yes.mp3");

audio.oncanplaythrough = function () {
  audio.play();
};

audio.loop = true;

audio.onended = function () {
  audio.play();
};
