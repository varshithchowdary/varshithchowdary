import React from 'react';
import myprofile from '../../assets/myprofile';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Profile.css';
import arrow_icon from '../../assets/arrow_icon.svg'

const Profile = () => {
  return (
    <div id='profiles' className='profile'>
      <div className='title'>
        <h1>My Profiles</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      
      <div className='profile-container'>
        {myprofile.map((profile, index) => (
          <div key={index} className='profile-card'>
            <img src={profile.profilePic} alt={profile.name} className='profile-pic' />
            <a href={profile.link} target='_blank' rel='noopener noreferrer'>
            <img src={profile.logo} alt={`${profile.name} Logo`} className='profile-logo' />
            </a>
            <p className='profile-name'>{profile.name}</p>
          </div>
        ))}
      </div>
      <div className='showmore'><p>Show More</p>
      <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Profile;
