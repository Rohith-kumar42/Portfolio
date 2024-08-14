import React from 'react';
import './App.css';
  
function NavMenu() {
  return (
    <div className='Navmenu'>
      <ul>
        <li className='Nav-Content'><a style={{ color: 'red'}} href='skills.html'>About</a></li>
        <li className='Nav-Content Nav-Content1'><a href='skills.html'>Project</a></li>
        <li className='Nav-Content Nav-Content2'><a href='skills.html'>Skills</a></li>
        <li className='Nav-Content Nav-Content3'><a href='education.html'>Education</a></li>
      </ul>
    </div>
  );
}

export default NavMenu;
