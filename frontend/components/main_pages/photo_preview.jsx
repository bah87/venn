import React from 'react';

const PhotoPreview = ({ imageUrl }) => {
  if (imageUrl) {
    return (
      <div>
        <img src={imageUrl}/>
      </div>
    );
  } else {
    return null;
  }
};

export default PhotoPreview;
