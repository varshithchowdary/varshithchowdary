import React from 'react';
import './Bob.css';
import circular from '../../assets/circular.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Bob = () => {
  return (
    <div id='home' className='bob'>
      <div className="bob-left">
        <h1><span>I'm Varshith Chowdary,</span> developer based in India.</h1>
        <p>I am a frontend developer and a student, exploring the world of web development by building projects and learning new technologies.</p>
        <div className="bob-action">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <div className="bob-connect">
              Connect with me
            </div>
          </AnchorLink>
          <div className='bob-resume' 
            onClick={() => {
              window.open('https://drive.google.com/file/d/1ihjZBjoChH-G2LuiClw5FW7qaKJOyHnk/view?usp=sharing', '_blank');
            }}>
            My Resume
            </div>
        </div>
      </div>

      <div className="bob-right">
        <img src={circular} alt="Varshith Chowdary" />
      </div>
    </div>
  );
}

export default Bob;
