import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import rect from '../../assets/rect.jpg'

const FadeInSection = ({ children }) => {
  const domRef = useRef()
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(domRef.current)
        }
      })
    })
    observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}

const About = () => {
  return (
    <div id='about' className='about'>
      <FadeInSection>
        <div className="about-title">
          <h1>About Me</h1>
        </div>
      </FadeInSection>
      <div className="about-section">
        <FadeInSection>
          <div className="about-left">
            <img src={rect} alt="profile" />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="about-right">
            <div className="about-para">
              <p>
                Hello! I'm Varshit Chowdary, a passionate frontend developer and
                student eager to explore the world of technology. I enjoy building
                intuitive and interactive web applications, constantly learning new
                frameworks, and improving my problem-solving skills.
              </p>
              {/* <div className='achivements'>
                <div className="about-achivement">
                  <h1>2+</h1>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                  <h1>30+</h1>
                  <p>PROJECTS</p>
                </div>
              </div> */}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}

export default About
