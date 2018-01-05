import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    debugger
    this.props.action(this.props.id);
  }

  render() {
    const posts = this.props.posts.map(post => {
      debugger
      return (
        <PostIndexItem
          key={ post.id }
          deletePost={ this.props.deletePost }
          post={ post }
          user={ this.props.user }
        />
      );
    });

    return (
      <ul className="post-index-ul">{ posts }</ul>
    );
  }
}

export default PostIndex;
