import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <div className="nav d-none d-md-flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
        </div>
      
      </nav>
      <Link to="/login">
        <button className="btn login-btn">Log In</button>
      </Link>
    </header>
  );
}

export default Header;