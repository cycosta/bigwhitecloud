const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = (id: number) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main;
      const weather = data.weather[0];

      return {
        ...temperature,
        ...weather,
      };
    })
    .catch((error) => console.error(error));
};
