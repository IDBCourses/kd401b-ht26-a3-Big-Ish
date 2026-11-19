const button = document.querySelector("#theme");
const link = document.querySelector("#palette");
const image = document.querySelector("#ouroboros");

button.addEventListener("click", function () {
  // -With If Statements-

  // Switch between Light/Dark colors:
  if (link.getAttribute("href") == "light.css") {
    link.setAttribute("href", "dark.css");
  } else {
    link.setAttribute("href", "light.css");
  }

  // Change the ouroboros image between Light/Dark versions:
  if (image.getAttribute("src") == "ouroborosLight.png") {
    image.setAttribute("src", "ouroborosDark.png");
  } else {
    image.setAttribute("src", "ouroborosLight.png");
  }

  // Change button text:
  if (button.textContent == "Switch to Light Mode") {
    button.textContent = "Switch to Dark Mode";
  } else {
    button.textContent = "Switch to Light Mode";
  }

  /*
  //-----------------------------------------------------------
  // -Learning Conditional/Ternary Operator-

  // Light/Dark Mode:
  const isDarkMode = link.getAttribute("href") == "dark.css";
  link.setAttribute("href", isDarkMode ? "light.css" : "dark.css");

  // Ligth/Dark Image:
  const isDarkImg = image.getAttribute("src") == "ouroborosDark.png";
  image.setAttribute(
    "src",
    isDarkImg ? "ouroborosLight.png" : "ouroborosDark.png",
  );

  // Button Text:
  button.textContent == isDarkMode;
  isDarkMode
    ? (button.textContent = "Switch to Dark Mode")
    : (button.textContent = "Switch to Light Mode");
  */
});
