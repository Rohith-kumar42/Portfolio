import React from 'react';
import './App.css';
  
function ProfileContent() {
  return (
    <div className='Profile-Content' style={{ display: 'flex', paddingRight: '120px' }}>
      <p className='Profile-Content-Para'> 
        <span style={{ color: 'red', fontSize: '3em' }}>Rohith Kumar B</span>,<br />
        A Front End Developer highly interested in pursuing a career as a Full Stack Developer.
        Rohith Kumar is a student who is building his career in the field of his interest.
        He is focused on improving his skills and is determined to succeed.
        He enjoys learning new things and pays close attention to details in his work.
        His philosophy is to do what you love and build your career in the field of your interest.
      </p>
      <a href='https://github.com/Rohith-kumar42' className='Profilephoto'>
        <img src="./photo.png" alt="Profile" className="profile-image" />
      </a>
    </div>
  );
}

export default ProfileContent;
