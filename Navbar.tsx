import logo from "../assets/logo-dark.png";
import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">
        <img
          src={logo}
          alt="Reflect Music Entertainment"
          className="navbar-logo"
        />

        <div className="brand-divider"></div>

        <div className="brand-text">
          <h3>Reflect Music Entertainment</h3>
          <span>Your Sound, Our Mission 🌟</span>
        </div>
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Services
        </NavLink>

        <NavLink
          to="/artists"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Artists
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          FAQ
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contact
        </NavLink>
      </div>

      <div className="nav-right">
        <Link to="/apply">
          <button className="apply-nav-btn">Apply Now</button>
        </Link>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/artists">Artists</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/apply">Apply</Link>
        </div>
      )}
    </nav>
  );
}
