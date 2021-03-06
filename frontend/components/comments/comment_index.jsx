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
          currentUser={ this.props.currentUser }
          post={ this.props.post }
          users={ this.props.users }
          editComment={ this.props.editComment }
          likeComment={ this.props.likeComment }
          unlikeComment={ this.props.unlikeComment }
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
