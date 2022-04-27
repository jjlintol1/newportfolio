import React from 'react'

import './infocard.css';

const InfoCard = ({title, text}) => {
  return (
    <div className="portfolio__infocard-container__infocard">
      <div className="portfolio__infocard-container__infocard-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="portfolio__infocard-container__infocard-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default InfoCard
