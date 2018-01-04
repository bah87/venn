import React from 'react';

const PostIndexItem = ({ post, deletePost }) => {
  return (
    <li className="post-item">

      <header className="post-item-header">
        <div>
          
        </div>
      </header>

      <main className="post-item-body">
        <p>{ post.body }</p>
      </main>

      <footer className="post-item-footer">

      </footer>



      <button onClick={() => deletePost(post.id)}>Delete</button>
    </li>
  );
};

export default PostIndexItem;
