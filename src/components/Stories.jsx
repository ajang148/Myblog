import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Stories.css'

function Stories() {
  const [userStories, setUserStories] = useState([])

  useEffect(() => {
    const existingStories = JSON.parse(localStorage.getItem('stories')) || []
    setUserStories(existingStories)
  }, [])

  const storiesList = userStories.map((story, index) => (
    <div key={story.id || index} className="story-card">
      <img src={story.image} alt={story.title} className="story-image" />
      <p className="story-title">{story.title}</p>
      <p className="story-description">{story.description}</p>
      {/* Use Link for navigation */}
      <Link to={`/summary/${story.id}`} className="read-more">Read more...</Link>
    </div>
  ))

  return (
    <section className="latest-stories">
      <h2>Latest Stories</h2>
      <div className="stories-grid">
        {storiesList}
      </div>
    </section>
  )
}

export default Stories
