import getFormattedWeatherData from "./weather-data";

export default class HandleInput {
  static inputField = document.getElementById("inputSearch");

  static submitBtn = document.getElementById("submitBtn");

  static start() {
    this.submitBtn.addEventListener("click", () => {
      const inputValue = this.getInputValue();
      console.log(getFormattedWeatherData(inputValue, "metric"));
    });
  }

  static getInputValue() {
    return this.inputField.value;
  }
}
