import React from 'react';
import PostIndexItem from './post_index_item';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {

    if (!this.props.user || !this.props.post) {
      return null;
    } else {
      return (
        <ul className="post-show-ul">
          <PostIndexItem
            deletePost={ this.props.deletePost }
            post={ this.props.post }
            user={ this.props.user }
            />
        </ul>
      );
    }
  }
}

export default PostShow;
