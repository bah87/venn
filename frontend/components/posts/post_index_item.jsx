import React from 'react';

const PostIndexItem = ({ post, deletePost }) => {
  return (
    <li>
      <p>{ post.body }</p>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </li>
  );
};

export default PostIndexItem;
