const API_KEY = "419b41cd14e38896374646981d529f46"; // Free public key

export default async function getWeatherData(city, unit) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${API_KEY}`
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
