import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import EmptyCart from "../Cart/EmptyCart";
import CartWithItems from "../Cart/CartWithItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);
  // array for cart items
  const cartArray = [];

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
      {/* nav items */}
      <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <FontAwesomeIcon
          className="xmark"
          onClick={() => setMobileNav(!mobileNav)}
          icon={faX}
        />
        <div className="mobile-links">
          <Link to="/categories">categories</Link>
          <Link to="/">lamps</Link>
          <Link to="/">furniture</Link>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      {/* cart */}
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          {cart ? (
            <h2 className="cart-full-h2">Your Shopping Cart (0 items)</h2>
          ) : (
            <h2>Your Shopping Cart (0 items)</h2>
          )}
          <FontAwesomeIcon onClick={openCart} icon={faX} />
        </div>

        {/* cart body */}
        <div className="cart-body">
          {cartArray.length === 0 ? <EmptyCart /> : <CartWithItems />}
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
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories">
                categories
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                lamps
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                furnitures
              </Link>
              <FontAwesomeIcon onClick={openCart} icon={faCartShopping} />
            </div>
            <div className="hamburger-menu">
              <FontAwesomeIcon
                className="hamburger-cart"
                onClick={openCart}
                icon={faCartShopping}
              />
              <FontAwesomeIcon
                className="hamburger-hamb"
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
