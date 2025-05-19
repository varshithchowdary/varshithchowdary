  import React, { useState, useEffect } from 'react';
  import './Navbar.css';
  import logop from '../../assets/logop.png';
  import AnchorLink from "react-anchor-link-smooth-scroll";
  import { Menu, X } from 'lucide-react';

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
      <div className={`navbar-container ${visible ? 'show' : 'hide'}`}>
        <div className='navbar-glass'>
          <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} color="white" /> : <Menu size={26} color="white" />}
          </div>
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            {['home', 'about', 'skills', 'timeline', 'contact'].map((section, i) => (
              <li key={i}>
                <AnchorLink className='anchor-link' offset={50} href={`#${section}`}>
                    <p onClick={() => setIsOpen(false)}>{section === 'timeline' ? 'Education' : section.charAt(0).toUpperCase() + section.slice(1)}</p>
                </AnchorLink>
              </li>
            ))}
          </ul>
          <AnchorLink className='anchor-link nav-connect-btn' offset={50} href='#contact'>
          </AnchorLink>
        </div>
      </div>
    );
  };

  export default Navbar;