import React from 'react';

class PostDropdown extends React.Component {
  render() {
    if (this.props.author.id === this.props.currentUser.id) {
      return (
        <div className="post-item-delete-btn">
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
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
