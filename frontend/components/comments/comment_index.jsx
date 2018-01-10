import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  render() {
    const comments = this.props.comments.map(comment => {
      return (
        <CommentIndexItem
          key={ comment.id }
          comment={ comment }
          deleteComment={ this.props.deleteComment }
          toggleEditComment={ this.props.toggleEditComment }
          currentUserId={ this.props.currentUserId }
          post={ this.props.post }
          editComment={ this.props.editComment }
        />
      );
    });

    return (
      <ul className="comment-list">
        { comments }
      </ul>
    );
  }
}

export default CommentIndex;
