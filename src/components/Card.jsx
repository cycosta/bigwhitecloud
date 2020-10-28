import React from 'react'
import PropTypes from 'prop-types'

import placeholder from '../assets/images/cities/default-image.jpg'

function Card({ selectedCity }) {
  return (
    <div className="card">
			<figure className="card__figure">
				<img className="card__image" src={selectedCity.image || placeholder} alt={selectedCity.alt || 'Photography by Sorasak'} />
				<figcaption className="card__name">{selectedCity.name}</figcaption>
			</figure>
		</div>
  )
}

Card.propTypes = {
  selectedCity: PropTypes.object
}

export default Card
