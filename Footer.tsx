import logo from "../assets/logo-dark.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img
            src={logo}
            alt="Reflect Music Entertainment"
            className="footer-logo"
          />

          <div className="footer-divider"></div>

          <div className="footer-text">
            <h3>Reflect Music Entertainment</h3>
            <span>Your Sound, Our Mission 🌟</span>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/artists">Artists</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Reflect Music Entertainment. All Rights Reserved.
      </div>
    </footer>
  );
}
