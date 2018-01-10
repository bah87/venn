import React from 'react';

class PostDropdown extends React.Component {
  render() {
    // <i className="fa fa-ellipsis-h" aria-hidden="true"></i>

    if (this.props.author.id === this.props.currentUser.id) {
      return (
        <div className="edit-delete-post-container">
          <div
            className="post-item-delete-btn"
            onClick={() => this.props.toggleEditPostModal(this.props.postId)}>
            Edit Post
          </div>
          <div
            className="post-item-delete-btn"
            onClick={() => this.props.deletePost(this.props.postId)}>
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

export default PostDropdown;
