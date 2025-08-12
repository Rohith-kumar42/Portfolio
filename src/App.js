// import logo from './logo.svg';
import './App.css';
  
import React from 'react';
import NavMenu from './NavMenu';
import ProfileContent from './ProfileContent';
import SocialLinks from './SocialLinks';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ContactForm from './contactform';
function App() {
  return (
      
    window.addEventListener('scroll', function() {
      // Calculate the scroll percentage
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
      // Get the Nav-Content elements
      // const resume=this.document.getElementsByClassName('button-36');
      const navContent = document.querySelector('.Nav-Content a');
      const navContent1 = document.querySelector('.Nav-Content1 a');
      const navContent2 = document.querySelector('.Nav-Content2 a');
      const navContent3 = document.querySelector('.Nav-Content3 a');
      
      if (scrollPercentage === 0 && scrollPercentage < 19) {
        navContent.style.color = 'red';
        navContent1.style.color = 'white';
    } 
      if (scrollPercentage > 20) {
          navContent1.style.color = 'red';
          navContent1.style.color = 'red';
          navContent.style.color = 'white';
          navContent2.style.color = 'white';
          navContent3.style.color = 'white';
      } 
  
      if (scrollPercentage > 75) {
          navContent2.style.color = 'red';
          navContent1.style.color = 'white';
          navContent.style.color = 'white';
      } 
     if(scrollPercentage > 95){
        navContent3.style.color = 'red';
        navContent1.style.color = 'white';
        navContent2.style.color = 'white';
        navContent.style.color = 'white'; // Reset color
    }
    if (window.innerWidth <= 768 && window.innerWidth >= 440) {
      // Calculate the scroll percentage
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      // Get the Nav-Content elements
      const navContent = document.querySelector('.Nav-Content a');
      const navContent1 = document.querySelector('.Nav-Content1 a');
      const navContent2 = document.querySelector('.Nav-Content2 a');
      const navContent3 = document.querySelector('.Nav-Content3 a');

      if (scrollPercentage === 0 && scrollPercentage < 19) {
        navContent.style.color = 'red';
        navContent1.style.color = 'white';
      } 
      if (scrollPercentage > 20) {
        navContent1.style.color = 'red';
        navContent.style.color = 'white';
        navContent2.style.color = 'white';
        navContent3.style.color = 'white';
      } 

      if (scrollPercentage < 2) {
        navContent2.style.color = 'red';
        navContent1.style.color = 'white';
        navContent.style.color = 'white';
      } 
      if(scrollPercentage > 95){
        navContent3.style.color = 'red';
        navContent1.style.color = 'white';
        navContent2.style.color = 'white';
        navContent.style.color = 'white'; // Reset color
      }
    }
  }),

  
      <div className="App">
        <NavMenu />
        <div className="Nav-header">
          <ProfileContent />
          <SocialLinks />
          <a href="./resume.pdf" download="./resume.pdf">
            <button className="button-36">Download Resume</button>
          </a>
          <h1 className='Project-Header'>Projects</h1>
          <ProjectSection />
          <SkillsSection />
          <EducationSection />
          <h1 className='Contact-Header'>Contact</h1>
          <ContactForm />
        </div>
      </div>
    );
  }

export default App;
