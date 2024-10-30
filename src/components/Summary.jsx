import React from 'react';
import { useParams } from 'react-router-dom';

function Summary() {
  const { id } = useParams(); // Get the story ID from the URL
  const [story, setStory] = React.useState(null);

  React.useEffect(() => {
    const stories = JSON.parse(localStorage.getItem('stories')) || [];
    const foundStory = stories.find(story => story.id === Number(id));
    setStory(foundStory);
  }, [id]);

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div className="story-page">
      <h2>{story.title}</h2>
      <img src={story.image} alt={story.title} />
      <p>{story.description}</p>
    </div>
  );
}

export default Summary;
