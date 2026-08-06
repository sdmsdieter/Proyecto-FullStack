export default function Contact() {
  return (
    <section id='contact' className='contact-section'>
      <div className='contact-header'>
        <div>
          <p className='section-label'>Contact</p>
          <h2>Let's build something together</h2>
          <p className='contact-intro'>
            I'm interested in full-stack development, automation, CAD/CAM,
            and IoT projects. If you have an opportunity or collaboration in
            mind, I'd be happy to hear from you.
          </p>
        </div>
      </div>

      <div className='contact-grid'>
        <div className='contact-info-card'>
          <h3>Contact details</h3>

          <div className='contact-item'>
            <span>Email</span>
            <strong>stefan@example.com</strong>
          </div>

          <div className='contact-item'>
            <span>Location</span>
            <strong>La Paz, Bolivia</strong>
          </div>

          <div className='contact-item'>
            <span>Languages</span>
            <strong>English (B2) / Spanish (Native)</strong>
          </div>

          <div className='contact-item'>
            <span>Availability</span>
            <strong>Open to remote and international opportunities</strong>
          </div>
        </div>

        <form className='contact-form'>
          <div className='form-group'>
            <label>Your name</label>
            <input type='text' placeholder='John Smith' />
          </div>

          <div className='form-group'>
            <label>Your email</label>
            <input type='email' placeholder='john@example.com' />
          </div>

          <div className='form-group'>
            <label>Message</label>
            <textarea
              rows={6}
              placeholder='Tell me about your project or opportunity...'
            ></textarea>
          </div>

          <button type='submit' className='btn-primary'>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}