// import logo from './logo.svg';
import './App.css';

function App() {
  return (

    window.addEventListener('scroll', function() {
      // Calculate the scroll percentage
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
      // Get the Nav-Content elements
      const resume=this.document.getElementsByClassName('button-36');
      const navContent = document.querySelector('.Nav-Content a');
      const navContent1 = document.querySelector('.Nav-Content1 a');
      const navContent2 = document.querySelector('.Nav-Content2 a');
      const navContent3 = document.querySelector('.Nav-Content3 a');
      // Remove the unused function declaration
      //  navContent1.addEventListener('click', function() {
      //  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      //   const scrollTo = (scrollHeight * 15) / 100;
      //   window.scrollTo(0, scrollTo);
      //  });
      resume.addEventListener('click', function() {
          const link = document.createElement('a');
          link.href = './resume.pdf';
          link.download = 'resume.pdf';
          link.click();
      });
      // Change color based on scroll percentage
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
  }),
  
    <div className="App">
      <body>
      {/* <button className='Dark'>Dark</button> */}
      <div className='Navmenu'>
        <ul>
          <li className='Nav-Content'><a style={{color:'red'}} href='skills.html'>About</a></li>
          <li className='Nav-Content Nav-Content1' > <a href='skills.html'>Project</a></li>
          <li className='Nav-Content Nav-Content2'><a href='skills.html'>Skills</a></li>
          <li className='Nav-Content Nav-Content3'><a href='education.html'>Education</a></li>
        </ul>
      </div>

      <div className="Nav-header">
        <div className="Header">
          <div style={{display:'flex',paddingRight:'120px',width:'1000px'}}>
            <p><span style={{color:'red',fontSize:'3em'}}>Rohith Kumar B</span>,<br />A Front End Developer with highly interested in pursuing his career as Full Stack Developer<br />
            Rohith Kumar - A student who is building his career in the field of his interest .He is focused in improving his skill as much as he can and focused on what he needs. He is a focused person when it comes to things he works. 
            He likes to learn new things and gives his attention in noticing minute details in the things he works and learn. 
            The philosophy he loves to follow is do the things u like and built your career in the field of your interest.</p>
           <a href='https://github.com/Rohith-kumar42'><img src="./photo.jpeg" alt="Profile" className="profile-image" /></a> 
          </div>
          <div className='ImageSection' style={{display:'flex '}} >
        <a href='likendin.com'><img src='./linkedin-square-logo.jpg' alt='linkedin'/></a>
        <a href='github.com'><img src='./github.jpg' alt='github' /><p></p></a>
       <a href='medium.com'><img src='./medium.jpeg' alt='medium' /><p></p></a>
      </div>
      <a href="./resume.pdf" download="./resume.pdf">
              <button class="button-36" >Download Resume</button>
      </a>
          <h1 style={{color:'red'}}>Projects</h1>
          <div className='Project' >
            <a href='https://github.com/Rohith-kumar42/Souled'>  
              <div className='Project-Content'>
                <h2>Souled</h2>
                <p>
                  The jersey and boots purchasing website allows users to browse and buy sports apparel. It features user authentication for secure accounts, an intuitive interface with HTML and CSS, and PHP for handling transactions and managing inventory.
                </p>
              </div>
            </a>
            <div className='Project-Content'>
              <a href='https://github.com/Rohith-kumar42/Gamercult'>  
                <h2>Gamercult</h2>
                <p>
                  The game purchase website includes user authentication and OTP verification. Users register, log in, and manage profiles with HTML, CSS, and PHP.
                </p>
              </a>
            </div>
            <a href='https://github.com/Rohith-kumar42/Contact-Front-End'>  
              <div className='Project-Content'>
                <h2>Contact List</h2>
                <p>
                  Create a contact list application that allows users to add, delete, and update contacts. The UI will include forms for adding and editing contacts, and options to remove contacts. The app will feature a responsive design and dynamic interactions using JavaScript.
                </p>
              </div>
            </a>
            <div className='Project-Content'>
              <a href='https://github.com/Rohith-kumar42/Invoice-Generator'>
                <h2>Invoice Generator</h2>
                <p>
                  The basic invoice generator uses HTML for structure, CSS for styling, and JavaScript for dynamic functionality. Users can input item details, quantities, and prices to automatically generate and display an invoice with calculated totals and formatting.
                </p>
              </a>
            </div>
          </div>
          <h1 style={{color:'red'}}>Skills</h1>
          <div className='Skills' style={{display:'flex'}}>
            <div className='Skills-Content'>
              <img src='./html.png'  alt='html'/>
              <div style={{display:'flex'}}><p>HTML</p> <p style={{marginLeft:'80px'}}>90%</p></div>
              <input type='range' min='0' max='100' value='0' className='slider'/>
            </div>
            <div className='Skills-Content'>
              <img src='./css.png' alt='css'/>
              <div style={{display:'flex'}}><p>CSS</p> <p style={{marginLeft:'80px'}}>80%</p></div>
              <input type='range' min='0' max='100' value='0' className='slider slider1'/>
            </div>
          </div>
          <div className='Skills' style={{display:'flex'}}>
            <div className='Skills-Content'>
              <img src='./js.png' alt='js' />
              <div style={{display:'flex'}}><p>JAVASCRIPT</p> <p style={{marginLeft:'40px'}}>45%</p></div>
              <input type='range' min='0' max='100' value='0' className='slider slider2'/>
            </div>
            <div className='Skills-Content'>
              <img src='./figma.png' alt='figma' />
              <div style={{display:'flex'}}><p>FIGMA</p> <p style={{marginLeft:'70px'}}>75%</p></div>
              <input type='range' min='0' max='100' value='0' className='slider slider3'/>
            </div>
          </div>
          <div className='Skills' style={{display:'flex'}}>
            <div className='Skills-Content'>
              <img src='./logo192.png' alt='react' />
              <div style={{display:'flex'}}><p>REACT</p> <p style={{marginLeft:'70px'}}>25%</p></div>
              <input type='range' min='0' max='100' value='0' className='slider slider4'/>
            </div>
            <div className='Skills-Content'>
              <img src='./c.png' alt='c' />
              <div style={{display:'flex'}}><p>C</p> <p style={{marginLeft:'110px'}}>50%</p></div>
              <input type='range' min='0' max='100' value='0' className='slider slider5'/>
            </div>
          </div>
          <h1 style={{color:'red'}}>Education</h1>
          <div className='Skills' >
            <div className='Skills-Content' style={{width:'880px'}}>
              <div style={{display:'flex'}}><p>Sri Shakthi Insitute of Engineering and Technology</p> <p style={{marginLeft:'0px'}}>2022-2026  </p></div>
              <p>B.E. Computer Science and Engineering</p>
            </div>
          </div>
        </div>
      </div>
      </body>
    </div>
  );
}

export default App;
