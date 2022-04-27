import React from 'react';
import './header.css';

import BackgroundAnimation from '../../assets/BackgroundAnimation';
import resume from '../../assets/jj-lintol-resume.pdf.pdf';


const Header = () => {
  return (
    <div className="portfolio__header section__padding" id="home">  
      <div className="portfolio__header-content">
        <h1 className="gradient__text">Hello, I'm <br />JJ Lintol</h1>
        <p>Driven by my passions, I wake up every day ready to give 110% effort to whatever endeavors that day may face. I am a big dreamer and will do whatever it takes to make dreams a reality.</p>
        <a href={resume} target="_blank"><button type="button">View Resume</button></a>
      </div>
      <div className="portfolio__header-image">
        <BackgroundAnimation className="animation" />
      </div>
    </div>
  );
}

export default Header;
