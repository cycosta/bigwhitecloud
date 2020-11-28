import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// API request
import { getWeather } from '../services/api'

// Components
import Loader from './Loader'

function Weather({ id }) {
  const [weather, setWeather] = useState(false)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    getWeather(id).then((data) => {
      setWeather(data)
      setLoading(false)
    })
  }, [id])

  return (
    loading ? (
      <Loader />
    ) : (
      <div className="weather">
        <img src={`${process.env.PUBLIC_URL}/assets/${weather.icon}.svg`} alt={weather.main} className="weather__icon" />
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
      </div>
    )
  )
}

Weather.propTypes = {
  id: PropTypes.number
}

export default Weather
