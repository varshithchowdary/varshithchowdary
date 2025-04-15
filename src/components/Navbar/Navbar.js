import React, { useState } from 'react'
import './Navbar.css'
import logop from '../../assets/logop.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {

const[menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logop} alt="" />
      <ul className='nav-menu'>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home" ? <img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about" ? <img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#profiles'><p onClick={()=>setMenu("profiles")}>Profiles</p></AnchorLink>{menu==="profiles" ? <img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#timeline'><p onClick={()=>setMenu("")}>Education</p></AnchorLink>{menu==="eduation" ? <img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact" ? <img src={underline} alt=''/>:<></>}</li>
      </ul>

      <AnchorLink className='anchor-link'offset={50} href='#contact'>
        <div className="nav-connect" >
           Connect with me
        </div>
      </AnchorLink>
    </div>
  )
}

export default Navbar
