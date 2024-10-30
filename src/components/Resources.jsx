import data from '../Images.json'
import '../assets/css/Resources.css'
import Buttons from './Buttons'

function Resources() {
  const resourcesList = data.resources.map((resource) => (
    <div key={resource.id} className="resource-card">
      <img src={(`${resource.image}`)} alt={resource.title} className="resource-image" />
      <h3 className="resource-title">{resource.title}</h3>
      <p className="resource-description">{resource.description}</p>
      <a href={resource.link} className="read-more">Learn more...</a>
    </div>
  ))

  return (
    <section className="latest-resources">
      <h2>Latest Resources</h2>
      <div className="resources-grid">
        {resourcesList}
    </div>
        <div className='button-container'>
        <Buttons text="See more resources"/>
       </div>  
    </section>
  )
}

export default Resources