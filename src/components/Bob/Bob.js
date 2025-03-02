import React from 'react'
import './Bob.css'
import circular from '../../assets/circular.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Bob = () => {
  return (
    <div id='home' className='bob'>
      <img src={circular} alt="" />
      <h1><span>I'm Varshith Chowdary,</span> developer based in India.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos  qui culpa libero quidem?</p>
      <div className="bob-action">

      <AnchorLink className='anchor-link'offset={50} href='#contact'>
        <div className="bob-connect">
         Connect with me 
          </div>
      </AnchorLink>
      
        <div className='bob-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Bob
