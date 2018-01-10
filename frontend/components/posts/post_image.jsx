import React from 'react';

const PostImage = ({ imageUrl, form, comment }) => {

  if (comment && imageUrl && form) {
    return (
      <div className="img-preview-container">
        <img className="img-preview" src={imageUrl}/>
      </div>
    );
  } else if (comment && imageUrl) {
    return (
      <img className="comment-body-img" src={imageUrl}/>
    );
  } else if (imageUrl && form) {
    return (
      <div className="img-preview-container">
        <img className="img-preview" src={imageUrl}/>
      </div>
    );
  } else if (imageUrl && !form) {
    return (
      <img className="post-body-img" src={imageUrl}/>
    );
  } else {
    return null;
  }
};

export default PostImage;
