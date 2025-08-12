// import logo from './logo.svg';
import './App.css';
  
import React, { useEffect } from 'react';
import NavMenu from './NavMenu';
import ProfileContent from './ProfileContent';
import SocialLinks from './SocialLinks';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ContactForm from './contactform';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      const navContent = document.querySelector('.Nav-Content a');
      const navContent1 = document.querySelector('.Nav-Content1 a');
      const navContent2 = document.querySelector('.Nav-Content2 a');
      const navContent3 = document.querySelector('.Nav-Content3 a');
      const navContent4 = document.querySelector('.Nav-Content4 a');

      if (navContent && navContent1 && navContent2 && navContent3 && navContent4) {
        // Desktop scroll logic
        if (window.innerWidth > 768) {
          if (scrollPercentage >= 0 && scrollPercentage < 15) {
            navContent.style.color = 'red';
            navContent1.style.color = 'white';
            navContent2.style.color = 'white';
            navContent3.style.color = 'white';
            navContent4.style.color = 'white';
          } else if (scrollPercentage >= 15 && scrollPercentage < 65) {
            navContent.style.color = 'white';
            navContent1.style.color = 'red';
            navContent2.style.color = 'white';
            navContent3.style.color = 'white';
            navContent4.style.color = 'white';
          } else if (scrollPercentage >= 65 && scrollPercentage < 75) {
            navContent.style.color = 'white';
            navContent1.style.color = 'white';
            navContent2.style.color = 'red';
            navContent3.style.color = 'white';
            navContent4.style.color = 'white';
          } else if (scrollPercentage >= 75 && scrollPercentage < 85) {
            navContent.style.color = 'white';
            navContent1.style.color = 'white';
            navContent2.style.color = 'white';
            navContent3.style.color = 'red';
            navContent4.style.color = 'white';
          } else if (scrollPercentage >= 85) {
            navContent.style.color = 'white';
            navContent1.style.color = 'white';
            navContent2.style.color = 'white';
            navContent3.style.color = 'white';
            navContent4.style.color = 'red';
          }
        } else if (window.innerWidth <= 768 && window.innerWidth >= 440) {
          // Tablet scroll logic
          if (scrollPercentage >= 0 && scrollPercentage < 19) {
            navContent.style.color = 'red';
            navContent1.style.color = 'white';
            navContent2.style.color = 'white';
            navContent3.style.color = 'white';
            navContent4.style.color = 'white';
          } else if (scrollPercentage >= 19 && scrollPercentage < 75) {
            navContent.style.color = 'white';
            navContent1.style.color = 'red';
            navContent2.style.color = 'white';
            navContent3.style.color = 'white';
            navContent4.style.color = 'white';
          } else if (scrollPercentage >= 75 && scrollPercentage < 85) {
            navContent.style.color = 'white';
            navContent1.style.color = 'white';
            navContent2.style.color = 'white';
            navContent3.style.color = 'red';
            navContent4.style.color = 'white';
          } else if (scrollPercentage >= 85) {
            navContent.style.color = 'white';
            navContent1.style.color = 'white';
            navContent2.style.color = 'white';
            navContent3.style.color = 'white';
            navContent4.style.color = 'red';
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
