const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");
const body = document.body;

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  body.classList.toggle("dark");
  darkModeIcon.classList.replace("fa-moon", "fa-sun");
} 

darkModeToggle.addEventListener("click", function () {

let theme = body.classList.contains("dark") ? "dark" : "light";

  body.classList.toggle("dark");
  if (prefersDarkScheme.matches) {
  body.classList.toggle("light");
  }

  localStorage.setItem("theme", theme);
  darkModeIcon.classList.toggle("fa-moon"); 
  darkModeIcon.classList.toggle("fa-sun"); 
});