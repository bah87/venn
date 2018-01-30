import React from 'react';
import { postDateFormat } from '../../util/date_util';

const LinkHover = ({ article }) => {
  return (
    <div className="link-img-container">
      <img className="link-img" src={article.urlToImage}></img>
      <div className="link-hover-details">
        <div className="link-hover-title">{article.title}</div>
        <div className="link-hover-date">
          {postDateFormat(article.publishedAt)}
        </div>
        <div className="link-hover-desc">{article.description}</div>
      </div>
    </div>
  );
};

export default LinkHover;
