import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.action(this.props.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.id !== this.props.id) {
      // debugger
      this.props.action(newProps.id);
    }
  }

  render() {

    let user = this.props.user;
    if (!user && !this.props.friends) { return null; }
    // debugger

    const posts = this.props.posts.map(post => {

      if (this.props.page === "feed") {
        user = this.props.friends[post.author_id];
      }

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
