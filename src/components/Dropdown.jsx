import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function Dropdown({ cities, selectedCity, setSelectedCity }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownElement = useRef()

  useEffect(() => {
    document.addEventListener('click', handleClick);
  }, [])

  const handleClick = e => {
    if (dropdownElement.current.contains(e.target)) {
      return;
    }
    setDropdownOpen(false)
  };

  return (
    <div className="dropdown" ref={dropdownElement}>
      <label onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown__options-filter">
        <ul className={`dropdown__filter ${dropdownOpen ? 'dropdown__filter--open' : ''}`} role="listbox" tabIndex="-1">
          <li className="dropdown__filter-selected">
            {selectedCity.name || 'Choose your city'}
          </li>
          <li>
            <ul className={`dropdown__select ${dropdownOpen ? 'dropdown__select--open' : ''}`}>
              {cities.map((city) => (
                <li key={city.id} onClick={() => setSelectedCity(city)} className="dropdown__select-option">
                  {city.name}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </label>
    </div>
  )
}

Dropdown.propTypes = {
  cities: PropTypes.array,
  selectedCity: PropTypes.object,
  setSelectedCity: PropTypes.func
}

export default Dropdown
