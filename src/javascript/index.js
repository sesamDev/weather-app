import "../css/style.css";
import getWeatherData from "./app";

console.log("Hello world");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  getWeatherData("Stockholm", "metric");
});
