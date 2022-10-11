/* eslint-disable camelcase */
const API_KEY = "419b41cd14e38896374646981d529f46"; // Free key, not a subscription key.

async function getWeatherData(city, unit) {
  let weatherData;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${API_KEY}`
    );
    weatherData = await response.json();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  return weatherData;
}

export default async function formattedWeatherData(city, unit) {
  const rawDataObj = await getWeatherData(city, unit);
  const {
    name,
    weather: [{ main: weatherCondition, description: weatherDescription }],
    main: { temp, feels_like, temp_min, temp_max },
    wind: { speed: windspeed },
    sys: { country, sunrise, sunset },
  } = rawDataObj;

  return {
    name,
    weatherCondition,
    weatherDescription,
    temp,
    feels_like,
    temp_min,
    temp_max,
    windspeed,
    country,
    sunrise,
    sunset,
  };
}
