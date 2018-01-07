import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './post_image';
import PostDropdown from './post_dropdown';

const PostIndexItem = ({ user, post, deletePost }) => {
  let date = new Date(post.updated_at);
  const options = { year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit" };
  date = date.toLocaleTimeString("en-us", options).split(",");
  date = `${date[0]}${date[1]} at${date[2]}`;

  // <button
  //   className="post-item-delete-btn"
  //   onClick={() => deletePost(post.id)}>
  //
  // </button>

  return (
    <li className="post-item">

      <header className="post-item-header">
        <img className="post-item-profile-pic"
          src={window.staticImages[user.profile_pic_url.split('.')[0]]}
        />

        <div className="post-item-header-right">
          <div className="post-item-name-and-options">
              <Link
                to={`/profile/${user.id}`} style={{ textDecoration: 'none'}}>
                <p className="post-item-name">
                  {`${user.first_name} ${user.last_name}`}
                </p>
              </Link>

              <PostDropdown />
          </div>

          <div className="post-item-date-container">
            <Link to={`/users/${post.author_id}/posts/${post.id}`}
              style={{ textDecoration: 'none'}}>
              <p className="post-item-date">
                { date }
              </p>
            </Link>
          </div>
        </div>
      </header>

      <main className="post-item-body">
        <p>{ post.body }</p>
        <PostImage form={false} imageUrl={post.image_url} />
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
