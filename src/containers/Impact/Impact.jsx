import React from 'react';
import './impact.css';
import future from '../../assets/future.png';

const Impact = () => {
  return (
    <div className="portfolio__impact section__padding" id="impact">
      <div className="portfolio__impact-image">
        <img src={future} />
      </div>
      <div className="portfolio__impact-content">
        <h1 className="gradient__text">What impact will I make?</h1>
        <p>Self-actualization is my biggest goal in life, and in order to truly achieve that, I must leave a marked impact on this world. As a motivated, creative and passionate individual, I want to create a business that will create something to make people's lives easier or solve one of the world's biggest problems. I also want to give back and set other people up for success. <br /> <br /> I know that God has given me the tools to be a problem solver in this world. It is up to me to put my faith in Him, take risks, and make it happen.</p>
        <h4>"The Future is whatever you make it. So make it a good one" - Doc Brown</h4>
      </div>
    </div>
  );
}

export default Impact;
