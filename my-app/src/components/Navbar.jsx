import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="navbar" ref={navRef}>
      
      {/* LOGO */}
      <div className="logo">Tanish</div>

      {/* NAV LINKS */}
      <div className="nav-links">

        <Link to="/" className="nav-item">HOME</Link>

        {/* ABOUT (NO DROPDOWN NOW) */}
        <Link to="/about" className="nav-item">ABOUT</Link>

        {/* PORTFOLIO */}
        <div className="nav-item" onClick={() => toggleMenu("portfolio")}>
          PORTFOLIO ▾
          {openMenu === "portfolio" && (
            <div className="dropdown">
              <Link to="/completed">Completed Projects</Link>
              <Link to="/current">Current Projects</Link>
            </div>
          )}
        </div>

        {/* PRODUCTS */}
        <div className="nav-item" onClick={() => toggleMenu("products")}>
          PRODUCTS ▾
          {openMenu === "products" && (
            <div className="dropdown">
              <Link to="/products">All Products</Link>
              <Link to="/products/vrv">VRV Systems</Link>
              <Link to="/products/split">Split AC</Link>
              <Link to="/products/cassette">Cassette AC</Link>
            </div>
          )}
        </div>

        <Link to="/services" className="nav-item">SERVICES</Link>

        <Link to="/contact" className="nav-item">CONTACT</Link>

      </div>
    </nav>
  );
}

export default Navbar;