import React from 'react';
import './App.css';
  
function EducationSection() {
  return (
    <div className='EducationSection' >
      <h1 style={{ color: 'red' }}className='Edu'>Education</h1>
      <div className='Education'>
        <div className='Education-Content'>
          <div style={{ display: 'flex'}}>
            <p className='Institute'>Sri Shakthi Institute of Engineering and Technology</p>
            <p className='Year'>2022-2026</p>
          </div>
          <p className='Degree'>B.E. Computer Science and Engineering</p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
