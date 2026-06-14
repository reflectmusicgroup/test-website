import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import FadeUp from "../components/FadeUp";
import logoDark from "../assets/logo-dark.png";

import spotifyLogo from "../assets/Platforms/spotify.png";
import instagramLogo from "../assets/Platforms/instagram.png";
import tiktokLogo from "../assets/Platforms/tiktok.png";
import appleLogo from "../assets/Platforms/apple_music.png";
import deezerLogo from "../assets/Platforms/Deezer.png";
import anghamiLogo from "../assets/Platforms/Anghami_Icon.png";

import MusicDistributionIcon from "../assets/Icon/Music Distribution.png";
import PublishingIcon from "../assets/Icon/Publishing.png";
import ContentIdIcon from "../assets/Icon/Content ID.png";
import PlaylistIcon from "../assets/Icon/Playlist Pitching.png";
import MarketingIcon from "../assets/Icon/Marketing.png";
import ArtistDevelopmentIcon from "../assets/Icon/Artist Development.png";

import GlobalReachIcon from "../assets/Icon/Global Reach.png";
import FastReleasesIcon from "../assets/Icon/Fast Releases.png";
import CareerGrowthIcon from "../assets/Icon/Career Growth.png";
import RightsManagementIcon from "../assets/Icon/Rights Management.png";
import ReleasePlanningIcon from "../assets/Icon/Release Planning.png";
import RoyaltyCollectionIcon from "../assets/Icon/Royalty Collection.png";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="shared-box">
          <div className="glass-orb orb1"></div>
          <div className="glass-orb orb2"></div>
          <div className="glass-orb orb3"></div>
          <div className="glass-orb orb4"></div>
          <div className="glass-orb orb5"></div>

          <div className="v-line v1"></div>
          <div className="v-line v2"></div>
          <div className="v-line v3"></div>
          <div className="v-line v4"></div>

          <div className="diag-line d1"></div>
          <div className="diag-line d2"></div>
          <div className="diag-line d3"></div>

          <div className="floating-dot dot1"></div>
          <div className="floating-dot dot2"></div>
          <div className="floating-dot dot3"></div>
          <div className="floating-dot dot4"></div>
          <div className="floating-dot dot5"></div>
          <div className="floating-dot dot6"></div>
          <div className="floating-dot dot7"></div>
          <div className="floating-dot dot8"></div>
          <div className="floating-dot dot9"></div>
          <div className="floating-dot dot10"></div>
          <div className="floating-dot dot11"></div>
          <div className="floating-dot dot12"></div>
          <div className="floating-dot dot13"></div>
          <div className="floating-dot dot14"></div>
          <div className="floating-dot dot15"></div>
          <div className="floating-dot dot16"></div>

          <div className="glow-ball glow1"></div>
          <div className="glow-ball glow2"></div>

          <span className="hero-welcome">Welcome to</span>

          <h1>
            Reflect Music
            <br />
          </h1>

          <p className="hero-description">
            Reflect Music Entertainment is an independent music distribution and
            artist development company dedicated to empowering the next
            generation of artists across the Arab world.
          </p>

          <div className="platform-pills">
            <div className="platform-pill">
              <img src={spotifyLogo} alt="Spotify" />
              <span>Spotify</span>
            </div>

            <div className="platform-pill">
              <img src={appleLogo} alt="Apple Music" />
              <span>Apple Music</span>
            </div>

            <div className="platform-pill">
              <img src={instagramLogo} alt="Instagram" />
              <span>Instagram & Facebook</span>
            </div>

            <div className="platform-pill">
              <img src={deezerLogo} alt="Deezer" />
              <span>Deezer</span>
            </div>

            <div className="platform-pill">
              <img src={anghamiLogo} alt="Anghami" />
              <span>Anghami</span>
            </div>

            <div className="platform-pill">
              <img src={tiktokLogo} alt="TikTok" />
              <span>TikTok</span>
            </div>

            <div className="platform-pill">
              <span>🌍 44+ Platforms</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link to="/apply">
              <button className="primary-btn">Apply Now</button>
            </Link>

            <Link to="/artists">
              <button className="secondary-btn">Explore Artists</button>
            </Link>
          </div>
        </div>
      </section>
      <FadeUp>
        <div className="shared-box">
          <div className="glass-orb orb1"></div>
          <div className="glass-orb orb2"></div>
          <div className="glass-orb orb3"></div>
          <div className="glass-orb orb4"></div>
          <div className="glass-orb orb5"></div>

          <div className="v-line v1"></div>
          <div className="v-line v2"></div>
          <div className="v-line v3"></div>
          <div className="v-line v4"></div>

          <div className="diag-line d1"></div>
          <div className="diag-line d2"></div>
          <div className="diag-line d3"></div>

          <div className="floating-dot dot1"></div>
          <div className="floating-dot dot2"></div>
          <div className="floating-dot dot3"></div>
          <div className="floating-dot dot4"></div>
          <div className="floating-dot dot5"></div>
          <div className="floating-dot dot6"></div>
          <div className="floating-dot dot7"></div>
          <div className="floating-dot dot8"></div>
          <div className="floating-dot dot9"></div>
          <div className="floating-dot dot10"></div>
          <div className="floating-dot dot11"></div>
          <div className="floating-dot dot12"></div>
          <div className="floating-dot dot13"></div>
          <div className="floating-dot dot14"></div>
          <div className="floating-dot dot15"></div>
          <div className="floating-dot dot16"></div>

          <div className="glow-ball glow1"></div>
          <div className="glow-ball glow2"></div>
          <section className="stats-intro">
            <span className="stats-badge">Trusted by Independent Artists</span>

            <h2>
              Our achievements are built on the success of the artists we work
              with.
            </h2>

            <p>
              These numbers represent our commitment to helping music reach
              audiences around the world.
            </p>
          </section>
        </div>
      </FadeUp>
      <FadeUp>
        <section className="stats-section">
          <div className="stat-card">
            <h2>
              <Counter end={370} suffix="+" />
            </h2>
            <p>Artists</p>
          </div>

          <div className="stat-card">
            <h2>
              <Counter end={15} suffix="M+" />
            </h2>
            <p>Streams</p>
          </div>

          <div className="stat-card">
            <h2>
              <Counter end={1760} suffix="+" />
            </h2>
            <p>Releases</p>
          </div>

          <div className="stat-card">
            <h2>
              <Counter end={50} suffix="+" />
            </h2>
            <p>Platforms</p>
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <div className="shared-box">
          {/* BACKGROUND EFFECTS */}

          <div className="glass-orb orb1"></div>
          <div className="glass-orb orb2"></div>
          <div className="glass-orb orb3"></div>
          <div className="glass-orb orb4"></div>
          <div className="glass-orb orb5"></div>

          <div className="v-line v1"></div>
          <div className="v-line v2"></div>
          <div className="v-line v3"></div>
          <div className="v-line v4"></div>

          <div className="diag-line d1"></div>
          <div className="diag-line d2"></div>
          <div className="diag-line d3"></div>

          <div className="floating-dot dot1"></div>
          <div className="floating-dot dot2"></div>
          <div className="floating-dot dot3"></div>
          <div className="floating-dot dot4"></div>
          <div className="floating-dot dot5"></div>
          <div className="floating-dot dot6"></div>
          <div className="floating-dot dot7"></div>
          <div className="floating-dot dot8"></div>
          <div className="floating-dot dot9"></div>
          <div className="floating-dot dot10"></div>
          <div className="floating-dot dot11"></div>
          <div className="floating-dot dot12"></div>
          <div className="floating-dot dot13"></div>
          <div className="floating-dot dot14"></div>
          <div className="floating-dot dot15"></div>
          <div className="floating-dot dot16"></div>

          <div className="glow-ball glow1"></div>
          <div className="glow-ball glow2"></div>

          <section className="features-intro">
            <span className="features-badge">
              Everything You Need to Grow Your Music Career
            </span>

            <h2>
              From global distribution and publishing to marketing and artist
              development.
            </h2>

            <p>
              Reflect Music provides the tools, support, and expertise artists
              need to reach new audiences and build long-term success in the
              music industry.
            </p>
          </section>

          <section className="features-section">
            <div className="feature-card">
              <img
                src={MusicDistributionIcon}
                alt="Music Distribution"
                className="icon"
              />
              <h3>Music Distribution</h3>
              <p>Release your music on all major platforms worldwide.</p>
            </div>

            <div className="feature-card">
              <img src={PublishingIcon} alt="Publishing" className="icon" />
              <h3>Publishing</h3>
              <p>Collect publishing royalties globally.</p>
            </div>

            <div className="feature-card">
              <img src={ContentIdIcon} alt="Content ID" className="icon" />
              <h3>Content ID</h3>
              <p>Protect your content across digital platforms.</p>
            </div>

            <div className="feature-card">
              <img
                src={PlaylistIcon}
                alt="Playlist Pitching"
                className="icon"
              />
              <h3>Playlist Pitching</h3>
              <p>Increase playlist placement opportunities.</p>
            </div>

            <div className="feature-card">
              <img src={MarketingIcon} alt="Marketing" className="icon" />
              <h3>Marketing</h3>
              <p>Grow your fanbase with strategic campaigns.</p>
            </div>

            <div className="feature-card">
              <img
                src={ArtistDevelopmentIcon}
                alt="Artist Development"
                className="icon"
              />
              <h3>Artist Development</h3>
              <p>Long-term support for your music career.</p>
            </div>
          </section>
        </div>
      </FadeUp>

      <FadeUp>
        <div className="shared-box">
          <div className="glass-orb orb1"></div>
          <div className="glass-orb orb2"></div>
          <div className="glass-orb orb3"></div>
          <div className="glass-orb orb4"></div>
          <div className="glass-orb orb5"></div>

          <div className="v-line v1"></div>
          <div className="v-line v2"></div>
          <div className="v-line v3"></div>
          <div className="v-line v4"></div>

          <div className="diag-line d1"></div>
          <div className="diag-line d2"></div>
          <div className="diag-line d3"></div>

          <div className="floating-dot dot1"></div>
          <div className="floating-dot dot2"></div>
          <div className="floating-dot dot3"></div>
          <div className="floating-dot dot4"></div>
          <div className="floating-dot dot5"></div>
          <div className="floating-dot dot6"></div>
          <div className="floating-dot dot7"></div>
          <div className="floating-dot dot8"></div>
          <div className="floating-dot dot9"></div>
          <div className="floating-dot dot10"></div>
          <div className="floating-dot dot11"></div>
          <div className="floating-dot dot12"></div>
          <div className="floating-dot dot13"></div>
          <div className="floating-dot dot14"></div>
          <div className="floating-dot dot15"></div>
          <div className="floating-dot dot16"></div>

          <div className="glow-ball glow1"></div>
          <div className="glow-ball glow2"></div>

          <section className="why-section">
            <span className="features-badge">Why Reflect Music</span>

            <h2>Built For Independent Artists</h2>

            <p className="section-description">
              Reflect Music provides artists with the tools, support, and
              industry expertise needed to release music, grow audiences,
              protect rights, and build sustainable careers.
            </p>

            <div className="why-grid">
              <div className="why-card">
                <h3>Global Reach</h3>
                <p>
                  Reach listeners worldwide through leading streaming platforms.
                </p>
              </div>

              <div className="why-card">
                <img
                  src={FastReleasesIcon}
                  alt="Fast Releases"
                  className="icon"
                />
                <h3>Fast Releases</h3>
                <p>
                  Distribute your music quickly and efficiently across all major
                  stores.
                </p>
              </div>

              <div className="why-card">
                <h3>Career Growth</h3>
                <p>
                  Access tools and opportunities designed to help your music
                  career grow.
                </p>
              </div>

              <div className="why-card">
                <img
                  src={RightsManagementIcon}
                  alt="Rights Management"
                  className="icon"
                />
                <h3>Rights Management</h3>
                <p>
                  Protect your music and maintain full control of your creative
                  work.
                </p>
              </div>

              <div className="why-card">
                <h3>Release Planning</h3>
                <p>
                  Receive strategic guidance to maximize the impact of every
                  release.
                </p>
              </div>

              <div className="why-card">
                <h3>Royalty Collection</h3>
                <p>
                  Collect and manage royalties from platforms around the world.
                </p>
              </div>
            </div>
          </section>
        </div>
      </FadeUp>

      <FadeUp>
        <div className="shared-box">
          <div className="glass-orb orb1"></div>
          <div className="glass-orb orb2"></div>
          <div className="glass-orb orb3"></div>
          <div className="glass-orb orb4"></div>
          <div className="glass-orb orb5"></div>

          <div className="v-line v1"></div>
          <div className="v-line v2"></div>
          <div className="v-line v3"></div>
          <div className="v-line v4"></div>

          <div className="diag-line d1"></div>
          <div className="diag-line d2"></div>
          <div className="diag-line d3"></div>

          <div className="floating-dot dot1"></div>
          <div className="floating-dot dot2"></div>
          <div className="floating-dot dot3"></div>
          <div className="floating-dot dot4"></div>
          <div className="floating-dot dot5"></div>
          <div className="floating-dot dot6"></div>
          <div className="floating-dot dot7"></div>
          <div className="floating-dot dot8"></div>
          <div className="floating-dot dot9"></div>
          <div className="floating-dot dot10"></div>
          <div className="floating-dot dot11"></div>
          <div className="floating-dot dot12"></div>
          <div className="floating-dot dot13"></div>
          <div className="floating-dot dot14"></div>
          <div className="floating-dot dot15"></div>
          <div className="floating-dot dot16"></div>

          <div className="glow-ball glow1"></div>
          <div className="glow-ball glow2"></div>
          <section className="cta-section">
            <h2>Ready To Release Your Music Worldwide?</h2>

            <Link to="/apply">
              <button className="primary-btn">Apply Now</button>
            </Link>
          </section>
        </div>
      </FadeUp>
    </main>
  );
}
