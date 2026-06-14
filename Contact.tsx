export default function Contact() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Contact Us</h1>

        <p>We'd love to hear from you.</p>
      </section>

      <section className="cta-section">
        <input className="form-input" placeholder="Your Name" />

        <input className="form-input" placeholder="Email Address" />

        <textarea className="form-textarea" placeholder="Your Message" />

        <button className="primary-btn">Send Message</button>
      </section>
    </main>
  );
}
