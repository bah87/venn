import React from 'react';

const NameHover = ({ user }) => {
  return (
    <div className="name-hover-container">
      <img className="name-hover-cover" src={user.coverImg}></img>
      <div className="name-hover-nav">
        <div>
          {user.name}
        </div>
        <div className="name-hover-pic-container">
          <img className="name-hover-prof-pic" src={user.profImg}></img>
        </div>
      </div>
    </div>
  );
}

export default NameHover;
