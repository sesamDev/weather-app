import BackgroundImage from "../Background-images/bg.jpg";

export default class UI {
  static bg = document.getElementById("backgroundImage");

  static currentTemp = document.querySelector(".current-temp");

  static feelsLike = document.querySelector(".feels-like");

  static windspeed = document.querySelector(".windspeed");

  static cityAndCountry = document.querySelector(".city");

  static loadUI() {
    this.bg.src = BackgroundImage;
  }

  static setCurrentWeather(
    currentTemp,
    feelsLikeTemp,
    windspeed,
    city,
    country
  ) {
    this.setCurrentTemp(currentTemp);
    this.setFeelsLike(feelsLikeTemp);
    this.setWindspeed(windspeed);
    this.setCity(city, country);
  }

  static setCurrentTemp(temp) {
    this.currentTemp.innerText = `${temp}°C`;
  }

  static setFeelsLike(temp) {
    this.feelsLike.innerText = `Feels like: ${temp}°C`;
  }

  static setWindspeed(speed) {
    this.windspeed.innerText = `Windspeed: ${speed}m/s`;
  }

  static setCity(city, country) {
    this.cityAndCountry.innerText = `${city}, ${country}`;
  }
}
