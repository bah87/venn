import React from 'react';

const PostIndexItem = ({ post, deletePost }) => {
  return (
    <li>
      <p>{ post.author.first_name }</p>
      <p>{ post.body }</p>
      <p>{ post.created_at }</p>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </li>
  );
};

export default PostIndexItem;
