import React from 'react'

// Icons
import cloud from '../assets/images/icons/cloud.svg'
import sun from '../assets/images/icons/sun.svg'

function Loader() {
  return (
    <div className="loader">
      <div className="loader__container">
        <img className="loader__cloud loader__cloud--left" src={cloud} alt=""/>
        <img className="loader__sun" src={sun} alt=""/>
        <img className="loader__cloud" src={cloud} alt=""/>
      </div>
    </div>
  )
}

export default Loader
