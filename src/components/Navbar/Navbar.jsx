import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import EmptyCart from "../../images/cart/empty-cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  const openCart = () => {
    setCart(!cart);
  };
  window.addEventListener("scroll", handleScroll);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <FontAwesomeIcon onClick={() => setMobileNav(!mobileNav)} icon={faX} />
        <div className="mobile-links">
          <Link to="/categories">categories</Link>
          <Link to="/">lamps</Link>
          <Link to="/">furniture</Link>
        </div>
      </div>
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2>Your Shopping Cart (0 items)</h2>
          <FontAwesomeIcon onClick={openCart} icon={faX} />
        </div>
        <div className="cart-body">
          <div className="empty-cart">
            <img src={EmptyCart} alt="empty-cart" />
            <p>Your cart is empty</p>
            <button onClick={openCart}>Keep Browsing</button>
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <img
                onClick={scrollToTop}
                src=""
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link to="/categories">categories</Link>
              <Link to="/categories">lamps</Link>
              <Link to="/categories">furniture</Link>
              <FontAwesomeIcon onClick={openCart} icon={faCartShopping} />
            </div>
            <div className="hamburger-menu">
              <FontAwesomeIcon onClick={openCart} icon={faCartShopping} />
              <FontAwesomeIcon
                onClick={() => setMobileNav(!mobileNav)}
                icon={faBars}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
