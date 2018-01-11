import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './post_image';
import PostDropdown from './post_dropdown';
import EditPostForm from './edit_post_form';
import { postDateFormat } from '../../util/date_util';
import NameHover from '../main_pages/name_hover';

const PostIndexItem = ({ toggleEditPostModal, currentUser, page,
  user, post, modal, deletePost, updatePost, deletePostPhoto }) => {
  let date = postDateFormat(post.updated_at);

  let wallPostClass = "wall-post-hidden";
  if (post.recipient_id  && page !== "feed") {
    wallPostClass = "wall-post";
  }

  if (user) {
    return (
      <li className="post-item">

        <header className="post-item-header">
          <Link to={`/profile/${post.author_id}`}>
            <img className="post-item-profile-pic"
              src={post.author_img}
              />
          </Link>

          <div className="post-item-header-right">
            <div className="post-item-name-and-options">
              <Link
                to={`/profile/${post.author_id}`} style={{ textDecoration: 'none'}}>
                <div className="post-item-name">
                  {post.author_name}
                  <NameHover
                    post={{
                      "name": post.author_name,
                      "coverImg": post.author_cover_img,
                      "profImg": post.author_img
                    }}
                  />
                </div>
              </Link>

              <div className={wallPostClass}>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                <p className="post-item-name">
                  {`${user.first_name} ${user.last_name}`}
                  <NameHover
                    post={{
                      "name": `${user.first_name} ${user.last_name}`,
                      "coverImg": post.recipient_cover_img,
                      "profImg": post.recipient_img
                    }}
                  />
                </p>
              </div>

              <PostDropdown
                postId={ post.id }
                currentUser={ currentUser }
                authorId={ post.author_id }
                toggleEditPostModal={ toggleEditPostModal }
                deletePost={ deletePost }
              />
              <EditPostForm
                modal={ modal }
                post={ post }
                toggleModal={ toggleEditPostModal }
                updatePost={ updatePost }
                deletePostPhoto={ deletePostPhoto }
                currentUser={ user }
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
