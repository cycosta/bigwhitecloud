import React from 'react'
import PropTypes from 'prop-types'

// Default Image
import placeholder from '../assets/images/cities/default-image.jpg'

// Components
import Weather from './Weather'

function Card({ selectedCity }) {
  return (
    <div className="card">
			<figure className="card__figure">
				<img className="card__image" src={selectedCity.image || placeholder} alt={selectedCity.alt || 'Photography by Sorasak'} />
				<figcaption className="card__name">
          <h2>{selectedCity.name}</h2>
        </figcaption>
			</figure>
      <Weather id={selectedCity.id} />
		</div>
  )
}

Card.propTypes = {
  selectedCity: PropTypes.object
}

export default Card
