import React from 'react';
import './Timeline.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';
import theme_pattern from '../../assets/theme_pattern.svg';

const timelineData = [
  {
    title: 'Chaitanya Bharathi Institute of Technology',
    subtitle: 'CGPA: 8.16',
    date: '2021 - 2025',
    description: 'Pursuing B.Tech in Computer Science and Engineering.',
    icon: <GraduationCap size={20} />,
  },
  {
    title: 'Frontend Intern',
    subtitle: 'Motioncut',
    date: 'Oct 2023 - Nov 2023',
    description: 'Built responsive UI components using React and Tailwind CSS.',
    icon: <Briefcase size={20} />,
  },
  {
    title: 'Sri Chaitanya Jr Colleg',
    subtitle: 'Intermediate-MPC',
    date: '2020 - 2021',
    description: 'Completed Intermediate with a focus on MPC stream.',
    icon: <GraduationCap size={20} />,
  },
  {
    title: " Dr. Kishore's Ratnam FVS",
    subtitle: 'CGPA: 8.8',
    date: '2019',
    description: "Completed I completed my class 10 education at Dr. Kishore's Ratnam FVS, Nellore.",
    icon: <GraduationCap size={20} />,
  },
];

const Timeline = () => {
  return (
    <div className="timeline" id="timeline">
      <div className="title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            contentStyle={{
              background: '#1e1e1e',
              color: '#fff',
              borderBottom: '4px solid #da7c25', // 👈 custom bottom line here
              boxShadow: 'none',
              borderRadius: '10px',
              padding: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #1e1e1e',
            }}
            iconStyle={{
              background: 'linear-gradient(267deg, #da7c25, #b923e1)',
              color: '#fff',
            }}
            icon={item.icon}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
