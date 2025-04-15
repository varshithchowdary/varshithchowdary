import React, { useState } from 'react';
import './Navbar.css';
import logop from '../../assets/logop.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, X } from 'lucide-react'; // 👈 install if not installed

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    setMenu(section);
    setIsOpen(false);
  };

  return (
    <div className='navbar'>
      <img src={logop} alt="logo" className='nav-logo' />

      <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={26} color="white" /> : <Menu size={26} color="white" />}
      </div>

      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <AnchorLink className='anchor-link' href='#home'><p onClick={() => handleClick("home")}>Home</p></AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => handleClick("about")}>About me</p></AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#profiles'><p onClick={() => handleClick("profiles")}>Profiles</p></AnchorLink>
          {menu === "profiles" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#timeline'><p onClick={() => handleClick("education")}>Education</p></AnchorLink>
          {menu === "education" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => handleClick("contact")}>Contact</p></AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>

      <AnchorLink className='anchor-link nav-connect-btn' offset={50} href='#contact'>
        <div className="nav-connect">Connect with me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
