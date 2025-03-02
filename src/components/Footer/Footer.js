import React from 'react'
import logop from '../../assets/logop.png'
import user_icon from '../../assets/user_icon.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='ftop'> 
            <div className="footer-top-left">
                <img src={logop} alt="" />
                <p>I am a front end developer from India</p>
            </div>
            <div className="footer-top-right">
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className='subscribe'>Subscribe</div>
            </div>
        </div> 
        <hr />
        <div className='bottom'>
            <p className='bottom-left'>@ 2025 Kommi Varshith Chowdary.  All rights reserved. </p>
            <div className="bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
