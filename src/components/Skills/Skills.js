import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

import cpp from '../../icons/cpp.png';
import css from '../../icons/css.png';
import js from '../../icons/js.png';
import python from '../../icons/python.png';
import dart from '../../icons/dart.png';
import java from '../../icons/java.png';

import react from '../../icons/react.png';
import node from '../../icons/node.png';
import express from '../../icons/express-logo.png';
import tailwind from '../../icons/tailwind.png';
import flutter from '../../icons/flutter.png';

import git from '../../icons/git.png';
import github from '../../icons/github.png';
import mongo from '../../icons/mongo.png';
import post from '../../icons/post.png';

const skills = {
  Languages: [cpp, css, js, python, dart, java],
  Frameworks: [react, flutter, node, express, tailwind],
  Tools: [git, github, mongo, post],
};

const SkillCategory = ({ title, icons }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      className={`skill-category ${visible ? 'visible' : ''}`}
      ref={ref}
    >
      <h2>{title}</h2>
      <div className="skill-items">
        {icons.map((icon, idx) => (
          <div className="skill-box" key={idx}>
            <img
              src={icon}
              alt="skill"
              style={{ maxWidth: '60%', maxHeight: '60%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, icons]) => (
          <SkillCategory key={category} title={category} icons={icons} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
