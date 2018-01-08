import React from 'react';

const PhotoPreview = ({ imageUrl }) => {
  if (imageUrl) {
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
  } else {
    return null;
  }
};

export default PhotoPreview;
