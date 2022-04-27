import React from 'react';
import { InfoCard } from '../../components';

import './about.css';

const aboutMeInfo = [
  {
    title: 'Sports Fanatic',
    text: 'I have a love for sports, especially football, basketball, and ski racing. I have played sports my entire life, and watching a football or basketball game is one of my favorite hobbies. I would also consider myself a self-proclaimed sports guru (especially in football!)'
  },
  {
    title: 'Gym Rat',
    text: 'I am a believer in the phrase \'Health is Wealth\', and I love to go to the gym and maintain a healthy lifestyle. The gym is almost therapeutic to me; it is a time where I can escape reality and focus on nothing other than improving myself.'
  },
  {
    title: 'Passionate',
    text: 'One of my greatest strengths is my passion. If I develop a passion for a goal, I will become obsessed with that goal and will stop at nothing to make it happen and am relatively unfazed by hardship or setbacks.'
  },
  {
    title: 'Entertainer',
    text: 'I love to put in work, but I also love to have fun. It means a lot to me to make someone\'s day better and I am always trying to use my sense of humor to do that. I am the type of person that can light up a room with a few jokes.'
  },
]

const About = () => {
  return (
    <div className="portfolio__about section__padding" id="about">
      <div className="portfolio__about-heading">
        <h1 className="gradient__text">Who am I?</h1>
      </div>
      <div className="portfolio__about-container">
        {
          aboutMeInfo.map((item, index) => (
            <InfoCard title={item.title} text={item.text} key={item.title + index} />
          ))
        }
      </div>
    </div>
  );
}

export default About;
