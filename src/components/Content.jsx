import heroImage from '../assets/images/travel.jpg'
import About from './About'
import Buttons from './Buttons'
import Form from './Form'
import PlacesVisited from './PlacesVisited'
import Resources from './Resources'
import Stories from './Stories'


function Content() {
    
  return (
    <>
    <div className='hero-section'>
      <img
        src={heroImage} 
        alt="Hero"
        className="hero-image"
      />
      <div className="overlay-text">
        <h1>Welcome to Uncharted Travels</h1>
        <p>Explore the world and the hidden gems with us!</p>
        <input type="text" placeholder='search destination'/>
      </div>
      <div className="newsletter-section">
        <p className="newsletter-text">We set a newsletter if you would like to subscribe 
            and receive  updates on our latest adventures!</p>

        <div className="input-button-container">
          <input 
            type="text" 
            placeholder="Enter your email"
          />
          <Buttons text='Subscribe' />
        </div>
      </div>
    </div>

    {/* SECTION ONE */}

    <section  className="section-one">
   <About/>
    </section>

    <section className='section-two'>
      <Stories/>
    </section>

    <section className='section-three'>
      <Resources/>
    </section>

    <section className='section-four'>
      <PlacesVisited/>
    </section>

    <section className='section-five'>
      <h1>Contact us</h1>
      <Form/>
    </section>

    </>
  )
}

export default Content
