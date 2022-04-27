import React from 'react';
import './inspiration.css';
import { Article } from '../../components';
import elon from '../../assets/elon.jpg';
import drake from '../../assets/drake.jpg';
import arnold from '../../assets/arnold.jpg';
import kobe from '../../assets/kobe.jpg';
import henry from '../../assets/henry.jpg';


const Inspiration = () => {
  return (
    <div className="portfolio__inspiration section__padding" id="inspiration">
      <div className="portfolio__inspiration-heading" >
        <h1 className="gradient__text">Quotes that keep me going</h1>
      </div>
      <div className="portfolio__inspiration-container">
        <div className="portfolio__inspiration-container_groupA">
          <Article className="article" imgUrl={elon} author="Elon Musk" quote="When something is important enough, you do it even if the odds are not in your favor" />
        </div>
        <div className="portfolio__inspiration-container_groupB">
        <Article className="article" imgUrl={drake} author="Drake" quote="A goal is just a dream with a deadline." />
        <Article className="article" imgUrl={arnold} author="Arnold Schwarzenegger" quote="Stop whining" />
        <Article className="article" imgUrl={kobe} author="Kobe Bryant" quote="If you’re afraid to fail, then you’re probably going to fail" />
        <Article className="article" imgUrl={henry} author="Henry Ford" quote="Whether you think you can or think you can't, you're right" />
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
