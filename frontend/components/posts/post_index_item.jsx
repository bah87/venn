import React from 'react';

const PostIndexItem = ({ post, deletePost }) => {
  return (
    <li className="post-item">

      <header className="post-item-header">
        <p className="post-item-profile-pic"></p>
        <div className="post-item-header-right">
          <div>
            <p className="post-item-name">Brendan Higgins</p>
            <button
              className="post-item-delete-btn"
              onClick={() => deletePost(post.id)}>Delete</button>
          </div>

          <p className="post-item-date">{"January 1 at 5:27pm"}</p>
        </div>
      </header>

      <main className="post-item-body">
        <p>{ post.body }</p>
      </main>

      <footer className="post-item-footer">
        <div className="like">
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <p>Like</p>
        </div>
        <div className="comment">
          <i className="fa fa-comment-o" aria-hidden="true"></i>
          <p>Comment</p>
        </div>
      </footer>
    </li>
  );
};

export default PostIndexItem;
