import React from 'react'

function Dropdown() {
  return (
    <div className="dropdown">
      <input type="checkbox" className="dropdown__switch" id="filter-switch" hidden />
      <label htmlFor="filter-switch" className="dropdown__options-filter">
        <ul className="dropdown__filter" role="listbox" tabIndex="-1">
          <li className="dropdown__filter-selected" aria-selected="true">
            Choose your city
          </li>
          <li>
            <ul className="dropdown__select">
              <li className="dropdown__select-option" role="option">
                Option 1
              </li>
              <li className="dropdown__select-option" role="option">
                Option 2
              </li>
              <li className="dropdown__select-option" role="option">
                Option 3
              </li>
              <li className="dropdown__select-option" role="option">
                Option 4
              </li>
              <li className="dropdown__select-option" role="option">
                Option 5
              </li>
            </ul>
          </li>
        </ul>
      </label>
    </div>
  )
}

export default Dropdown
