import UI from "./UI";
import getFormattedWeatherData from "./weather-data";

export default class HandleInput {
  static inputField = document.getElementById("inputSearch");

  static submitBtn = document.getElementById("submitBtn");

  static start() {
    this.submitBtn.addEventListener("click", () => {
      const inputValue = this.getInputValue();
      this.setCurrentWeatherUI(inputValue);
    });
  }

  static async setCurrentWeatherUI(city) {
    const weather = await getFormattedWeatherData(city, "metric");
    UI.setCurrentWeather(
      weather.temp.toFixed(),
      weather.feels_like.toFixed(),
      weather.windspeed.toFixed(),
      weather.name,
      weather.country
    );
  }

  static getInputValue() {
    return this.inputField.value;
  }
}
