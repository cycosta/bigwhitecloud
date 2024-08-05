import { useState } from "react";

import "./_dropdown.scss";

interface DropdownProps {
  cities: {
    id: number;
    name: string;
    image: string;
    alt: string;
  }[];
  selectedCity?: {
    id: number;
    name: string;
    image: string;
    alt: string;
  };
  setSelectedCity: (city: {
    id: number;
    name: string;
    image: string;
    alt: string;
  }) => void;
}

export const Dropdown = ({
  cities,
  selectedCity,
  setSelectedCity,
}: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
      <label className="dropdown__options-filter">
        <ul
          className={`dropdown__filter ${
            dropdownOpen && "dropdown__filter--open"
          }`}
          role="listbox"
          tabIndex={-1}
        >
          <li className="dropdown__filter-selected">
            {selectedCity?.name || "Choose your city"}
          </li>
          <li>
            <ul
              className={`dropdown__select ${
                dropdownOpen && "dropdown__select--open"
              }`}
            >
              {cities.map((city) => (
                <li
                  key={city.id}
                  onClick={() => setSelectedCity(city)}
                  className="dropdown__select-option"
                >
                  {city.name}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </label>
    </div>
  );
};
