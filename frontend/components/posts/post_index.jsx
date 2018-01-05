import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post => {
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
