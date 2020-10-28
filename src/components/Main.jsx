import React from 'react'

// Data
import { cities } from '../services/data'

// Components
import Logo from './Logo'
import Dropdown from './Dropdown'
import Card from './Card'

function Main() {
  return (
    <main className="main">
      <Logo />
      <Dropdown cities={cities} />
      <Card />
    </main>
  )
}

export default Main
