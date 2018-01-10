import React from 'react';

class CommentDropdown extends React.Component {
  render() {
    // <i className="fa fa-ellipsis-h" aria-hidden="true"></i>

    if (this.props.authorId === this.props.currentUserId) {
      return (
        <div className="edit-delete-comment-container">
          <div
            className="comment-item-delete-btn"
            onClick={() => this.props.toggleEditComment(this.props.commentId)}>
            Edit
          </div>
          <div
            className="comment-item-delete-btn"
            onClick={() => this.props.removeComment(this.props.commentId)}>
            Delete
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default CommentDropdown;
