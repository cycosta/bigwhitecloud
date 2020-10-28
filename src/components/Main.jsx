import React, { useState } from 'react'

// Data
import { cities } from '../services/data'

// Components
import Logo from './Logo'
import Dropdown from './Dropdown'
import Card from './Card'

function Main() {
  const [selectedCity, setSelectedCity] = useState({})

  return (
    <main className="main">
      <Logo />
      <Dropdown cities={cities} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <Card selectedCity={selectedCity} />
    </main>
  )
}

export default Main
