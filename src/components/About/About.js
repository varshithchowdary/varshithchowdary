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
                <p>Hello! I'm Varshit Chowdary, a passionate frontend developer and student eager to explore the world of technology. I enjoy building intuitive and interactive web applications, constantly learning new frameworks, and improving my problem-solving skills.</p>
                <p>My expertise includes C++, React.js, JavaScript, Flutter, and Python. I am always excited to work on innovative projects and collaborate with like-minded developers!</p>
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
