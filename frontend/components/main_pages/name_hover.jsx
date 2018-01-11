import React from 'react';

const NameHover = ({ post }) => {
  return (
    <div className="hover-container">
      <img className="hover-cover-img" src={post.coverImg}></img>
      <img className="hover-prof-img" src={post.profImg}></img>
      <div className="hover-name">{post.name}</div>
    </div>
  );
};

export default NameHover;
