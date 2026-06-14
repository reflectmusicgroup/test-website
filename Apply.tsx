export default function Apply() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Apply Now</h1>

        <p>Join Reflect Music Entertainment</p>
      </section>

      <section className="cta-section">
        <input className="form-input" placeholder="Artist Name" />

        <input className="form-input" placeholder="Email" />

        <input className="form-input" placeholder="Country" />

        <input className="form-input" placeholder="Genre" />

        <input className="form-input" placeholder="Spotify Link" />

        <input className="form-input" placeholder="Instagram Link" />

        <input className="form-input" placeholder="Monthly Listeners" />

        <textarea
          className="form-textarea"
          placeholder="Tell us about yourself"
        />

        <button className="primary-btn">Submit Application</button>
      </section>
    </main>
  );
}
