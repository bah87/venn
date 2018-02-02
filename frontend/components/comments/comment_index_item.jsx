import React from 'react';
import { Link } from 'react-router-dom';
import { commentDateFormat } from '../../util/date_util';
import PostImage from '../posts/post_image';
import CommentDropdown from './comment_dropdown';
import CommentFormContainer from './comment_form_container';
import Linkify from 'react-linkify';
import { urlMatch } from '../../util/embed_links_util';
import CommentLikes from './comment_likes';

class CommentIndexItem extends React.Component {
  constructor() {
    super();

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    let likeId;
    this.props.comment.likes.forEach(like => {
      if (like.liker_id === this.props.currentUser.id) {
        likeId = like.id;
      }
    });

    if (likeId) {
      this.props.unlikeComment(likeId, this.props.comment.id);
    } else {
      this.props.likeComment(this.props.comment.id);
    }
  }

  render() {
    let date = commentDateFormat(this.props.comment.updated_at);

    let likeBtn = "comment-like-btn";
    if (this.props.comment.likes.map(
      like => like.liker_id).includes(this.props.currentUser.id)) {
      likeBtn += " comment-liked";
    }

    let likers = [];
    if (Object.values(this.props.users).length > 0) {
      likers = this.props.comment.likes.map(like => {
        return this.props.users[like.liker_id];
      });
    }

    const body = urlMatch(this.props.comment.body, "comment");

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
              <CommentLikes likers={ likers } />
              <div className="comment-body">
                <Link
                  to={`/profile/${this.props.comment.author_id}`}
                  style={{ textDecoration: 'none'}}>
                  <strong className="comment-name">
                    { this.props.comment.author_fname +
                      " " + this.props.comment.author_lname }
                  </strong>
                </Link>{ " " }{ body[1] }
              </div>
            </div>
            <PostImage
              comment={true}
              form={false}
              imageUrl={this.props.comment.image_url}
            />
            <div id="comment-date">
              <strong onClick={this.handleLike}
                className={likeBtn}>Like</strong>
              <strong className="comment-strong-date">
                { `• ${date}` }
              </strong>
            </div>
          </div>
          <CommentDropdown
            authorId={this.props.comment.author_id}
            deleteComment={this.props.deleteComment}
            toggleEditComment={this.props.toggleEditComment}
            currentUserId={this.props.currentUser.id}
            commentId={this.props.comment.id}
          />
        </li>
      );
    }
  }
}

export default CommentIndexItem;
