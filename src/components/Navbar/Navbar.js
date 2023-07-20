import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from '../../Images/Logo.svg'


function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [selectedLink, setSelectedLink] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsScrolling(scrollTop > 0);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="container">
      <nav className={isScrolling ? "scrolling-nav" : ""}>
        <Link to="/">
          <img src={Logo} alt="logo" style={{height:"41px", width:"221px"}}/>
        </Link>

        <div>
          <ul
            id="navbar"
            className={clicked ? "active" : ""}
          >
            <li>
              <Link to="/" className={selectedLink === 'home' ? 'active' : ''} onClick={() => setSelectedLink('home')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={selectedLink === 'about' ? 'active' : ''} onClick={() => setSelectedLink('about')}>About Us</Link>
            </li>
            <li>
              <Link to="/contactus" className={selectedLink === 'contactus' ? 'active' : ''} onClick={() => setSelectedLink('contactus')}>Contact Us</Link>
            </li>
            <li>
              {/* {console.log((localStorage.getItem('isLoggedIn')))} */}
              <Link to="/login" className={'loginbtn'} onClick={() => setSelectedLink('login')}>Log in</Link>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={handleClick}>
          {/* <span
            style={{color:'#fff'}}
            id="bar"
            className=""
          >{clicked ? <RxCross2 size={'2rem'}/> : <FaBars size={'2rem'}/>}</span> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
