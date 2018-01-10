import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.post.id);
  }

  componentWillReceiveProps(newProps) {
    // debugger
    // this.props.fetchComments(newProps.post.id);
  }

  render() {
    const comments = this.props.comments.map(comment => {
      return (
        <CommentIndexItem
          key={ comment.id }
          comment={ comment }
        />
      );
    });

    return (
      <ul>
        { comments }
      </ul>
    );
  }
}

export default CommentIndex;
