import React from 'react'
import PropTypes from 'prop-types'

function Weather({ selectedCity }) {
  return (
    <div className="weather">
      <img src="" alt="" className="weather__icon"/>
      <h3 className="weather__main">Heavy Rain</h3>
      <p className="weather__date">Thursday, October 29</p>
      <p className="weather__temp">12</p>
    </div>
  )
}

Weather.propTypes = {
  selectedCity: PropTypes.object
}

export default Weather
