import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar-body">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Hem
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          Om Oss
        </NavLink>
        <NavLink to="/dogs" onClick={() => setIsOpen(false)}>
          Hundar
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
