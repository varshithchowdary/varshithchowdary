import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import rect from '../../assets/rect.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={rect} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsum quisquam reprehenderit. Ipsa, autem explicabo.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat expedita nobis eum amet temporibus minima molestiae.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>C++</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>Flutter</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
      <div className='achivements'>
        <div className="about-achivement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIECNE</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
