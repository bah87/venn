import React from 'react';

const PhotoPreview = ({ imageUrl, cover }) => {
  if (imageUrl && cover) {
    return (
      <div
        style={{
          backgroundImage: "url(" + imageUrl + ")",
          backgroundPositionY: "0px",
          backgroundSize: "851px"
        }}
        className="profile-cover-photo-container">
      </div>
    );
  } else if (imageUrl) {
    return (
      <img className="profile-pic-preview" src={ imageUrl }></img>
    );
  } else {
    return null;
  }
};

export default PhotoPreview;
