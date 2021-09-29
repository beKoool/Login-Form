function toggleForm() {
  let container = document.querySelector(".main-container");
  let section = document.querySelector("section");
  container.classList.toggle("active");
  section.classList.toggle("active");
}

function clickForm() {
  // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  audio.play();
}

var audio = new Audio("./yes.mp3");

audio.oncanplaythrough = function () {
  audio.play();
};

audio.loop = true;

audio.onended = function () {
  audio.play();
};
