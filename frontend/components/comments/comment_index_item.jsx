import React from 'react';
import { Link } from 'react-router-dom';
import { DateFormat } from '../../util/date_util';
import PostImage from '../posts/post_image';
import CommentDropdown from './comment_dropdown';
import CommentFormContainer from './comment_form_container';

const CommentIndexItem = ({ comment, deleteComment, toggleEditComment,
  currentUserId, post, editComment }) => {
  let date = DateFormat(comment.updated_at);

  if (editComment === comment.id) {
    return (
      <CommentFormContainer
        type={ "edit" }
        post={ post }
        comment={ comment }
      />
    );
  } else {
    return (
      <li className="comment-list-item">
        <div className="comment-img-container">
          <Link
            to={`/profile/${comment.author_id}`} style={{ textDecoration: 'none'}}>
            <img src={ comment.author_pic_url }
              className="comment-img"></img>
          </Link>
        </div>
        <div>
          <div className="comment-body-container">
            <div className="comment-body">
              <Link
                to={`/profile/${comment.author_id}`} style={{ textDecoration: 'none'}}>
                <strong className="comment-name">
                  { comment.author_fname + " " + comment.author_lname }
                </strong>
              </Link> { comment.body }
            </div>
          </div>
          <PostImage
            comment={true}
            form={false}
            imageUrl={comment.image_url}
          />
          <div id="comment-date" className="post-item-date">
            { date.slice(0,11) }
          </div>
        </div>
        <CommentDropdown
          authorId={comment.author_id}
          deleteComment={deleteComment}
          toggleEditComment={toggleEditComment}
          currentUserId={currentUserId}
          commentId={comment.id}
        />
      </li>
    );
  }
};

export default CommentIndexItem;
