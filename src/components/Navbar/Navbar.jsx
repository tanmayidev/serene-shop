import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div
        className={`mobile-nav-full ${mobileNav ? "open-nav" : "closed-nav"}`}
      >
        <i
          onClick={() => setMobileNav(!mobileNav)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
        <div className="mobile-links">
          <Link to="/">categories</Link>
          <Link to="/">lamps</Link>
          <Link to="/">furniture</Link>
        </div>
      </div>
      <div className="open-cart">
        <div className="cart-title-btn">
          <h2>Your Shopping Cart (0 items)</h2>
          <i
            onClick={() => setMobileNav(!mobileNav)}
            className="fa-sharp fa-solid fa-xmark"
          ></i>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <img src="" alt="logo" className="logo-img" />
            </Link>
            <div className="nav-links">
              <Link to="/">categories</Link>
              <Link to="/">lamps</Link>
              <Link to="/">furniture</Link>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="hamburger-menu">
              <i className="fa-solid fa-cart-shopping hamburger-cart"></i>
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="fa-solid fa-bars hamburger-hamb"
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
