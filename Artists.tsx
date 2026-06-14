export default function Artists() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Our Artists</h1>

        <p>Talents distributed through Reflect Music.</p>
      </section>

      <section className="artists-grid">
        <div className="artist-card">
          <div className="artist-image"></div>

          <h3>Artist One</h3>

          <p>Spotify • YouTube</p>
        </div>

        <div className="artist-card">
          <div className="artist-image"></div>

          <h3>Artist Two</h3>

          <p>Apple Music • TikTok</p>
        </div>

        <div className="artist-card">
          <div className="artist-image"></div>

          <h3>Artist Three</h3>

          <p>Global Distribution</p>
        </div>

        <div className="artist-card">
          <div className="artist-image"></div>

          <h3>Artist Four</h3>

          <p>Marketing & Publishing</p>
        </div>
      </section>
    </main>
  );
}
