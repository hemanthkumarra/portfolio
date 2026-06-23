import React from 'react';
import './style.css';

//import images and logos
import profileImage from './images/hemanth.png';
import instaLogo from './logos/insta logo.jpg';
import githubLogo from './logos/github logo.png';
import linkedinLogo from './logos/linkedin logo.jpg'; 

// 1. Capitalized 'App'
function App() {
  return (
    <div className="mainbox">
      <div className="header">
        <h1>home</h1>
        <h1>projects</h1>
        <h1>skills</h1>
        <h1>social</h1>
        <h1>contact</h1>
      </div>
      <div className="profile">
      <h1 className="profile-name">Hemanth Kumar Raju</h1>
      
      <div className="content-wrapper">
        
        <div className="details">
          <h2 className="roll">Full Stack Developer</h2>
          <p className="description">
            I am a passionate web developer with expertise in creating dynamic, responsive, and user-friendly websites. 
            I enjoy turning complex problems into simple, beautiful, and intuitive designs. With a strong foundation 
            in modern web technologies, I focus on writing clean, efficient code and building interfaces that provide 
            engaging user experiences. Whether I am building a site from scratch or optimizing an existing platform, 
            I am always eager to learn new tools and bring creative ideas to life.
          </p>
        </div>
        <img src={profileImage} alt="Profile Image" />
        
      </div>
      </div>

      <div className="socialmedia">
        <h1>Social Media</h1>
        <div className="box insta">
          {/* 2. Closed the img tag */}
          <img src={instaLogo} alt="Instagram" />
          <h1>Instagram</h1>
          <h3>@Hemanth_kumar_raju_2004</h3>
          <p>Follow me on Instagram to see my latest posts and updates!</p>
          <a href="https://www.instagram.com/hemanth_kumar_raju_2004/" target="_blank" rel="noreferrer">
            <button className="instabutton">Follow</button>
          </a>
        </div>
        
        {/* 3. Fixed the spacing on className */}
        <div className="box github">
          {/* Closed the img tag */}
          <img src={githubLogo} alt="GitHub" />
          <h1>GitHub</h1>
          <h3>@hemanthkumarra</h3>
          <p>Follow me on GitHub to see my latest projects!</p>
          <a href="https://github.com/hemanthkumarra" target="_blank" rel="noreferrer">
            <button className="githubbutton">Follow</button>
          </a>
        </div>
        
        <div className="box linkedin">
          {/* Closed the img tag */}
          <img src={linkedinLogo} alt="LinkedIn" />
          <h1>LinkedIn</h1>
          <h3>@Hemanth Kumar Raju</h3>
          <p>Follow me on LinkedIn to see my latest professional updates!</p>
          <a href="https://www.linkedin.com/in/hemanth-kumar-raju-9a1b1b1b1/" target="_blank" rel="noreferrer">
            <button className="linkedinbutton">Follow</button>
          </a>
        </div>
      </div>
    </div>
  );
}

// Capitalized 'App'
export default App;