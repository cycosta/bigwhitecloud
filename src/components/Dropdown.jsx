import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Dropdown({ cities }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const [selectedCity, setSelectedCity] = useState('Choose your city')

  return (
    <div className="dropdown">
      <label onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown__options-filter">
        <ul className={`dropdown__filter ${dropdownOpen ? 'dropdown__filter--open' : ''}`} role="listbox" tabIndex="-1">
          <li className="dropdown__filter-selected" aria-selected="true">
            {selectedCity}
          </li>
          <li>
            <ul className={`dropdown__select ${dropdownOpen ? 'dropdown__select--open' : ''}`}>
              {cities.map(({ id, name }) => (
                <li key={id} onClick={() => setSelectedCity(name)} className="dropdown__select-option" role="option">
                  {name}
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
  cities: PropTypes.array
}

export default Dropdown
