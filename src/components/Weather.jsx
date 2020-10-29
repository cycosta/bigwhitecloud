import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// API request
import { getWeather } from '../services/api'

function Weather({ id }) {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    if (!id) return
    getWeather(id).then((data) => {
      setWeather(data)
      console.log(data)
    })
  }, [id])

  return (
    id ?
    <div className="weather">
      <img src={`${process.env.PUBLIC_URL}/assets/${weather.icon}.svg`} alt="" className="weather__icon"/>
      <p className="weather__temp">{Math.round(weather.temp)}<span className="weather__symbol">&deg;</span></p>
      <h3 className="weather__main">{weather.description}</h3>
      <div className="weather__levels">
        <div className="weather__min">
          <span className="weather__label">Min</span>
          <p className="weather__value">{Math.round(weather.temp_min)}&deg;</p>
        </div>
        <div className="weather__max">
          <span className="weather__label">Max</span>
          <p className="weather__value">{Math.round(weather.temp_max)}&deg;</p>
        </div>
      </div>
    </div> : ''
  )
}

Weather.propTypes = {
  id: PropTypes.number
}

export default Weather
