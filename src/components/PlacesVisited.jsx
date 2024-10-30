import React, { useState } from 'react'
import data from '../Images.json'
import '../assets/css/PlacesVisited.css'

function PlacesVisited() {
  const [itemsToShow, setItemsToShow] = useState(4)

  const handleShowMore = () => {
    setItemsToShow(data.placesVisited.length)
  }

  const handleShowLess = () => {
    setItemsToShow(4)
  }

  const placesToShow = data.placesVisited.map((place, index) =>
    index < itemsToShow ? (
      <div key={place.id} className="place-card">
        <div className="place-image-container">
          <img src={place.image} alt={place.title} className="place-image" />
          <div className="place-overlay">
            <h3 className="place-title">{place.title}</h3>
          </div>
        </div>
        <p className="place-description">{place.description}</p>
      </div>
    ) : null
  )

  const showMoreButton = itemsToShow < data.placesVisited.length && (
    <button onClick={handleShowMore} className="more-link">
      Show More
    </button>
  )

  const showLessButton = itemsToShow > 4 && (
    <button onClick={handleShowLess} className="more-link">
      Show Less
    </button>
  )

  return (
    <section className="places-visited">
      <h2>Places I've Visited</h2>
      <div className="places-grid">
        {placesToShow}
      </div>
      {showMoreButton}
      {showLessButton}
    </section>
  )
}

export default PlacesVisited
