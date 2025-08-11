import React from 'react';
import './App.css';
  
function ProjectSection() {

  const CN = "Project-Content";

  const obj = [
    {title: "Souled", text: "The jersey and boots purchasing website allows users to browse and buy sports apparel. It features user authentication for secure accounts, an intuitive interface with HTML and CSS, and PHP for handling transactions and managing inventory."},
    {title: "Gamercult", text: "The game purchase website includes user authentication and OTP verification. Users register, log in, and manage profiles with HTML, CSS, and PHP."},
    {title: "Pharmacy Management", text: "Developed a website for managing pharmacy.Implemented  stock management, billing system, and real time inventory updates with secure user authentication"},
    {title: "Invoice Generator", text: "The basic invoice generator uses HTML for structure, CSS for styling, and JavaScript for dynamic functionality. Users can input item details, quantities, and prices to automatically generate and display an invoice with calculated totals and formatting."}
  ];

  const gitLinks = [
    "https://github.com/Rohith-kumar42/Souled",
    "https://github.com/Rohith-kumar42/Gamercult",
    "https://github.com/Rohith-kumar42/Pharmacy-Management",
    "https://github.com/Rohith-kumar42/Invoice-Generator"
  ]

  return (
    <div className='Project' >
      {obj.map((i, index) => {
        return <ProjectContent key={index} CN={CN} heading={obj[index].title} text={obj[index].text} git={gitLinks[index]}/>
      })}
    </div>
  );
}

function ProjectContent({ CN, heading, text, git }) {
  return (
    <div className={CN}>
        <a href={git}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </a>
      </div>
  );
}

export default ProjectSection;
