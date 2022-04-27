import React from 'react';
import './article.css';


const Article = ({imgUrl, author, quote}) => {
  return (
    <div className="portfolio__quote">
      <div className="portfolio__quote-image">
        <img src={imgUrl} />
      </div>
      <div className="portfolio__quote-content">
        <p>{author}</p>
        <h3>"{quote}"</h3>
      </div>
    </div>
  );
}

export default Article;
