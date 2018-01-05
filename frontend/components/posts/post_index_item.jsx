import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ user, post, deletePost }) => {

  return (
    <li className="post-item">

      <header className="post-item-header">
        <img className="post-item-profile-pic"
          src={window.staticImages[user.profile_pic_url.split('.')[0]]}
        />

        <div className="post-item-header-right">
          <div className="post-item-name-and-options">
            <Link to={`/profile/${user.id}`}>
              <p id="post-item-name">
                {`${user.first_name} ${user.last_name}`}
              </p>
            </Link>
            <button
              className="post-item-delete-btn"
              onClick={() => deletePost(post.id)}>Delete</button>
          </div>

          <div className="post-item-date-container">
            <p className="post-item-date">{(new Date(post.updated_at)).toString().slice(0,15)}</p>
          </div>
        </div>
      </header>

      <main className="post-item-body">
        <p>{ post.body }</p>
      </main>

      <footer className="post-item-footer">
        <div className="like-btn">
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <p>Like</p>
        </div>
        <div className="comment-btn">
          <i className="fa fa-comment-o" aria-hidden="true"></i>
          <p>Comment</p>
        </div>
      </footer>
    </li>
  );
};

export default PostIndexItem;
