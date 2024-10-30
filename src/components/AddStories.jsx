import React, { useEffect } from 'react'
import StoryForm from './StoryForm'

function AddStories() {
  const addStory = (newStory) => {
    // Retrieve existing stories from local storage
    const existingStories = JSON.parse(localStorage.getItem('stories')) || []

    // Add the new story to the existing stories
    existingStories.push(newStory)

    // Save the updated stories back to local storage
    localStorage.setItem('stories', JSON.stringify(existingStories))
   
    alert('Story added successfully!')
  }

  return (
    <div>
      <h2>Add New Story</h2>
      <StoryForm onAddStory={addStory} />
    </div>
  )
}

export default AddStories
