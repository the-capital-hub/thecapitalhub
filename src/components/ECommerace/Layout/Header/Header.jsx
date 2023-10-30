import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../../../Images/Logo.svg";


function Header() {
  return (
    <header>
      <nav>
        <div className="nav d-none d-md-flex justify-content-center align-items-center">
          <NavLink to="/" ><img src={Logo} alt="Logo"/></NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
      
      </nav>
      <Link to="/web-development">
        <button className="btn login-btn py-2">Contact us</button>
      </Link>
    </header>
  );
}

export default Header;