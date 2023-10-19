import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-container">
            <Link to="/">
              <img src="" alt="logo" className="logo-img" />
            </Link>
            <div className="nav-links">
              <Link to="/">categories</Link>
              <Link to="/">lamps</Link>
              <Link to="/">furniture</Link>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
