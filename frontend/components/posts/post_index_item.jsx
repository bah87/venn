import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './post_image';
import PostDropdown from './post_dropdown';
import EditPostForm from './edit_post_form';
import { postDateFormat } from '../../util/date_util';

const PostIndexItem = ({ toggleEditPostModal, currentUser,
  author, post, modal, deletePost, updatePost, deletePostPhoto }) => {
  let date = postDateFormat(post.updated_at);

  if (author) {
    return (
      <li className="post-item">

        <header className="post-item-header">
          <Link to={`/profile/${author.id}`}>
            <img className="post-item-profile-pic"
              src={author.profile_pic_url}
              />
          </Link>

          <div className="post-item-header-right">
            <div className="post-item-name-and-options">
              <Link
                to={`/profile/${author.id}`} style={{ textDecoration: 'none'}}>
                <p className="post-item-name">
                  {`${author.first_name} ${author.last_name}`}
                </p>
              </Link>

              <PostDropdown
                postId={ post.id }
                currentUser={ currentUser }
                author={ author }
                toggleEditPostModal={ toggleEditPostModal }
                deletePost={ deletePost }
              />
              <EditPostForm
                modal={ modal }
                post={ post }
                toggleModal={ toggleEditPostModal }
                updatePost={ updatePost }
                deletePostPhoto={ deletePostPhoto }
                currentUser={ author }
              />
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
          <div
            onClick={() => document.getElementById(`comment-input-focus-${post.id}`).focus()}
            className="comment-btn">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <p>Comment</p>
          </div>
        </footer>
      </li>
    );
  } else { return null; }
};

export default PostIndexItem;
