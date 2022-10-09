import "../css/style.css";
import hello from "./hello";

console.log("Hello world");

const button = document.querySelector("button");

button.addEventListener("click", hello);
