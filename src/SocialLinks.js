import React from 'react';
import './App.css';
  
function SocialLinks() {
  return (
    <div className='ImageSection' style={{ marginLeft: '270px' }}>
      <a href='https://linkedin.com'><img src='./linkedin-square-logo.jpg' alt='LinkedIn' /></a>
      <a href='https://github.com'><img src='./github.jpg' alt='GitHub' /></a>
      <a href='https://medium.com'><img src='./medium.jpeg' alt='Medium' /></a>
    </div>
  );
}

export default SocialLinks;
