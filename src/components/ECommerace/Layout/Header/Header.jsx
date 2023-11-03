import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../../../Images/Logo.svg";


function Header() {
  return (
    <header className="container">
      <nav>
        <div className="nav  justify-content-center align-items-center">
          <NavLink to="/" ><img src={Logo} alt="Logo"/></NavLink>
          {/* <NavLink to="/contactus " className='d-none d-md-flex'>Contact Us</NavLink> */}
          {/* <NavLink to="/about " className='d-none d-md-flex'>About Us</NavLink> */}
        </div>
      
      </nav>
      <Link to="/contactus" >
        <button className="btn login-btn py-md-1">Contact us</button>
      </Link>
    </header>
  );
}

export default Header;