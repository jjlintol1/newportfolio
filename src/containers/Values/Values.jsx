import React from 'react';
import { InfoCard } from '../../components';
import './values.css';


const Values = () => {
  return (
    <div className="portfolio__values section__margin" id="values">
      <div className="portfolio__values-info">
        <InfoCard title="Core Values" text="My values are held very dear to me. They define who I am today as well as my aspirational self, and they are the heart of my existence as a human being." />
      </div>
      <div className="portfolio__values-heading">
        <h1 className="gradient__text">Values</h1>
      </div>
      <div className="portfolio__values-container">
        <InfoCard title="Faith" text="I am a proud, devout Catholic and my faith means everything to me. I put my life in God's hands and when I deserve nothing, He has given me everything and I know that I am nothing without His power." />
        <InfoCard title="Success" text="I have an obsession with success, and I will never settle for second best. My greatest fear in life is being average, and I will do whatever it takes to reach my full potential." />
        <InfoCard title="Integrity" text="I define integrity as doing the right thing when no one is looking. Holding integrity close to my heart will help me to be an impactful human being." />
      </div>
    </div>
  );
}

export default Values;
