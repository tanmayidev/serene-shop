import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import EmptyCart from "../Cart/EmptyCart";
import CartWithItems from "../Cart/CartWithItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const [cartState, dispatch] = useContext(CartContext);
  const { items } = cartState;

  useEffect(() => {
    let num = 0;
    for (let i = 0; i < items.length; i++) {
      num += 1 * items[i].quantity;
    }
    setTotalItems(num);
  }, [items]);

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
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories">
            categories
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/product/19">
            product detail
          </Link>
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
          <h2 className="cart-full-h2">
            Your Shopping Cart ({totalItems} items)
          </h2>
          <FontAwesomeIcon onClick={openCart} icon={faX} />
        </div>

        {/* cart body */}
        <div className="cart-body">
          {items.length === 0 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
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
              <Link onClick={() => window.scrollTo(0, 0)} to="/product/1">
                product detail
              </Link>
              <FontAwesomeIcon onClick={openCart} icon={faCartShopping} />
              {/* Add Red Circle on top of Shopping Cart - When cartState.items.length > 1 */}
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
