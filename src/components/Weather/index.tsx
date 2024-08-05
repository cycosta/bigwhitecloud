import { useState, useEffect } from "react";

import { getWeather } from "../../api/getWeather";

import { Loader } from "..";

import "./_weather.scss";

interface WeatherProps {
  cityId: number;
}

export const Weather = ({ cityId }: WeatherProps) => {
  const [weather, setWeather] = useState({
    main: "",
    description: "",
    temp: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cityId) {
      setLoading(true);

      getWeather(cityId).then((data) => {
        setWeather(data);
        setLoading(false);
      });
    }
  }, [cityId]);

  return loading ? (
    <Loader />
  ) : (
    <div className="weather">
      {cityId && (
        <p className="weather__temp">
          {Math.round(weather.temp)}
          <span className="weather__symbol">&deg;</span>
        </p>
      )}
      <p className="weather__main">{weather.description}</p>
    </div>
  );
};
