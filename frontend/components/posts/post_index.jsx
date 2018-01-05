import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.action(this.props.id);
  }

  render() {

    let user;
    if (this.props.page === "feed") {
      user = this.props.user;
    } else {
      user = this.props.friends[post.author_id];
    }

    const posts = this.props.posts.map(post => {
      return (
        <PostIndexItem
          key={ post.id }
          deletePost={ this.props.deletePost }
          post={ post }
          user={ user }
        />
      );
    });

    return (
      <ul className="post-index-ul">{ posts }</ul>
    );
  }
}

export default PostIndex;
