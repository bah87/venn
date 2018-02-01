import React from 'react';
import { Link } from 'react-router-dom';
import { commentDateFormat } from '../../util/date_util';
import PostImage from '../posts/post_image';
import CommentDropdown from './comment_dropdown';
import CommentFormContainer from './comment_form_container';
import Linkify from 'react-linkify';

class CommentIndexItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    let date = commentDateFormat(this.props.comment.updated_at);

    if (this.props.editComment === this.props.comment.id) {
      return (
        <CommentFormContainer
          type={ "edit" }
          post={ this.props.post }
          comment={ this.props.comment }
        />
      );
    } else {
      return (
        <li className="comment-list-item">
          <div className="comment-img-container">
            <Link
              to={`/profile/${this.props.comment.author_id}`}
              style={{ textDecoration: 'none'}}>
              <img src={ this.props.comment.author_pic_url }
                className="comment-img"></img>
            </Link>
          </div>
          <div>
            <div className="comment-body-container">
              <div className="comment-body">
                <Link
                  to={`/profile/${this.props.comment.author_id}`}
                  style={{ textDecoration: 'none'}}>
                  <strong className="comment-name">
                    { this.props.comment.author_fname +
                      " " + this.props.comment.author_lname }
                  </strong>
                </Link> <Linkify>{ this.props.comment.body }</Linkify>
              </div>
            </div>
            <PostImage
              comment={true}
              form={false}
              imageUrl={this.props.comment.image_url}
            />
            <div id="comment-date" className="post-item-date">
              { date }
            </div>
          </div>
          <CommentDropdown
            authorId={this.props.comment.author_id}
            deleteComment={this.props.deleteComment}
            toggleEditComment={this.props.toggleEditComment}
            currentUserId={this.props.currentUserId}
            commentId={this.props.comment.id}
          />
        </li>
      );
    }
  }
}

export default CommentIndexItem;
