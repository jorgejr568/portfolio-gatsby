import React, { useEffect, useState } from 'react'
import useApi from '../../../hooks/api'

function Vapo({ sentSuccessfully }) {
  if (sentSuccessfully)
    return <span>Vapo! Your message has been sent successfully!</span>
  return null
}

function ContactForm() {
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [canSubmit, setCanSubmit] = useState(false)
  const [sending, setSending] = useState(false)
  const [sentSuccessfully, setSentSuccessfully] = useState(false)
  const api = useApi()

  const handleContactFormSubmit = e => {
    e.preventDefault()
    if (canSubmit) {
      setCanSubmit(false)
      setSending(true)
      api
        .post('/contacts', { email: contactEmail, message: contactMessage })
        .then(() => {
          setContactEmail('')
          setContactMessage('')
          setSentSuccessfully(true)
          setTimeout(() => {
            setSentSuccessfully(false)
          }, 5000)
        })
        .catch(e => {
          console.log(e)
          setCanSubmit(true)
        })
        .finally(() => {
          setSending(false)
        })
    }
  }

  useEffect(() => {
    setCanSubmit(
      contactEmail.toString().length && contactMessage.toString().length
    )
  }, [contactEmail, contactMessage])

  return (
    <section id="contactForm">
      <h2>Get in touch</h2>
      <form onSubmit={e => handleContactFormSubmit(e)}>
        <input
          type="email"
          name="email"
          placeholder="Your e-mail"
          value={contactEmail}
          onChange={e => setContactEmail(e.target.value)}
          aria-label="Your e-mail"
          maxLength="191"
        />
        <span>{contactEmail.length}/191</span>

        <textarea
          name="message"
          id="message"
          rows="4"
          value={contactMessage}
          onChange={e => setContactMessage(e.target.value)}
          placeholder="Your message"
          maxLength="2048"
          aria-label="Your message"
        />
        <span>{contactMessage.length}/2048</span>

        <div>
          <Vapo sentSuccessfully={sentSuccessfully} />

          <input
            type="submit"
            value={sending ? 'sending...' : 'submit'}
            className="button"
            disabled={!canSubmit}
          />
        </div>
      </form>
    </section>
  )
}

export default ContactForm
