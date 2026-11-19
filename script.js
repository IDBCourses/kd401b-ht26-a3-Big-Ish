const button = document.querySelector("#theme");

const link = document.querySelector("#palette");
const image = document.querySelector("#ouroboros");

button.addEventListener("click", function () {
  const swapPalette = link.getAttribute("href") == "dark.css";
  link.setAttribute("href", swapPalette ? "light.css" : "dark.css");

  const ouroborousImg = image.getAttribute("src") == "ouroborosDark.png";
  image.setAttribute(
    "src",
    ouroborousImg ? "ouroborosLight.png" : "ouroborosDark.png",
  );
});
