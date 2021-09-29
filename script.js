function toggleForm() {
  let container = document.querySelector(".main-container");
  let section = document.querySelector("section");
  container.classList.toggle("active");
  section.classList.toggle("active");
}

function submitLink() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
