import React from 'react';
import './App.css';
function SkillsSection() {
  const CN = "Skills-Content";
  const obj = [
    { image: "./html.png", name: "HTML", percentage: "90%", range: 0, className: "slider" },
    { image: "./css.png", name: "CSS", percentage: "80%", range: 0, className: "slider1" },
    { image: "./js.png", name: "JavaScript", percentage: "30%", range: 0, className: "slider2" },
    { image: "./logo192.png", name: "React", percentage: "25%", range: 0, className: "slider3" },
    { image: "./c.png", name: "C", percentage: "40%", range: 0, className: "slider4" },
    { image: "./figma.png", name: "Figma", percentage: "60%", range: 0, className: "slider5" }
  ];

  return (
    <div className='test'>
      <h1 style={{ color: 'red' }} className='SkillsHeader'>Skills</h1>
      <div className='SkillsSection'>
        {obj.map((i, index) => {
          const className = index % 2 === 1 ? 'odd-item' : 'even-item';
          return (
            <div key={index} className={className}>
              <SkillsSection1 
                CN={CN} 
                image={i.image} 
                name={i.name} 
                percentage={i.percentage} 
                range={i.range} 
                sliderClass={i.className} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SkillsSection1({ CN, image, name, percentage, range, sliderClass }) {
  return (
    <div className={CN}>
      <img src={image} alt={name} />
      <div style={{ display: 'flex' }}>
        <p>{name}</p> 
        <p style={{ marginLeft: '80px' }}>{percentage}</p>
      </div>
      <input 
        type='range' 
        min='0' 
        max='100' 
        value={range} 
        className={`slider ${sliderClass}`} 
      />
    </div>
  );
}

export default SkillsSection;
