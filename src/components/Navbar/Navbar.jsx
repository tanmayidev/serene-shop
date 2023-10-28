import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import EmptyCart from "../Cart/EmptyCart";
import CartWithItems from "../Cart/CartWithItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../contexts/CartContext";
import LogoImg from "../../images/logo.png";

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
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/serene-shop/categories"
          >
            categories
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/serene-shop/product/19"
          >
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
            <Link to="/serene-shop">
              <img
                onClick={scrollToTop}
                src={LogoImg}
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/serene-shop/categories"
              >
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/serene-shop/product/1"
              >
                product detail
              </Link>
              <span
                className={
                  totalItems < 1 ? "cart-icon" : "cart-icon with-items"
                }
                data-array-length={totalItems}
                onClick={openCart}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
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
