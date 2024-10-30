import React, { useState } from 'react'


function StoryForm({ onAddStory }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() && description.trim() && image.trim()) {
      const newStory = {
        id: Date.now(),
        title,
        description,
        image,
      }
      onAddStory(newStory)
      setTitle('')
      setDescription('')
      setImage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="story-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Story Title"
        required
        className="form-input"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Story Description"
        required
        className="form-textarea"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        required
        className="form-input"
      />
      <button type="submit" className="submit-button">Add Story</button>
    </form>
  )
}

export default StoryForm
