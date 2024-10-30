import { useEffect, useState } from "react"
import '../assets/css/Form.css'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [subscriberName, setSubscriberName] = useState('')

  useEffect(() => {
    console.log('Form data changed:', formData)
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Subscribed:', formData)
    setIsSubmitted(true)
    setSubscriberName(formData.name)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <h2 className="form-title">Join Our Travel Community!</h2>
        <p className="form-description">
          Stay updated with our latest travel guides, tips, and exclusive offers. Your adventure starts here!
        </p>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button-form">
          {isSubmitted ? 'Subscribed' : 'Subscribe'}
        </button>
        {isSubmitted && (
          <p className="thank-you-message">
            Thank you, {subscriberName}, for subscribing! We’ll keep you posted on all things travel.
          </p>
        )}
      </form>
    </div>
  )
}

export default Form

