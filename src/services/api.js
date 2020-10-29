const apiKey = process.env.REACT_APP_WEATHER_API_KEY

// Get weather by city id
export function getWeather(id) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main
      const weather = data.weather[0]

      return {
        ...temperature,
        ...weather
      }
    })
    .catch((error) => console.error(error))
}
