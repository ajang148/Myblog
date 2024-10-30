import React from 'react';
import profileImage from '../assets/images/profile2.jpg'
import '../assets/css/about.css'

function About() {
  return (
    <section className="about-section">
    <div className="about-container">
      <div className="image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="text-container">
        <h1>About Me</h1>
        <p>
        I'm an adventurer at heart, always seeking the next thrill and the hidden stories that lie off the beaten path. From scaling rugged mountains to diving into the depths of unfamiliar waters, I’ve wandered far and wide, capturing memories and lessons that only the open world can teach. Join me as I share tales from my journeys, offer tips for fellow explorers, and hopefully inspire you to set out on your own path less traveled.
        </p>
        <p>
        Adventure isn’t just a passion; it's a lifestyle. Whether it's tasting exotic foods, meeting fascinating locals, or navigating uncharted territories, each journey adds a new chapter to my ever-growing story. Let’s embrace the unknown together, one adventure at a time.
        </p>
      </div>
    </div>
  </section>
  )
}

export default About;

