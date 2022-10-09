const API_KEY = "419b41cd14e38896374646981d529f46"; // Free key, not a subscription key.

async function getWeatherData(city, unit) {
  let weatherData;
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${API_KEY}`
    );
    weatherData = await response.json();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  return weatherData;
}

// main > feels_like/humidity/temp/temp_max/temp_min
// name
// sys > country/sunrise/sunset
// weather > description/main
// wind > speed

// async function getCurrentWeather(){
//   const data = await getWeatherData()

// }

export default async function formattedWeatherData(city, unit) {
  const rawData = await getWeatherData(city, unit);
  console.log(rawData);
}
