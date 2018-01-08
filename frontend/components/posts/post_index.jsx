import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.action(this.props.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.id !== this.props.id) {
      this.props.action(newProps.id);
    }
  }

  render() {

    let user = this.props.user;

    //  use currentUser!!!!!
    // debugger

    if (!user && !this.props.friends) { return null; }

    const posts = this.props.posts.reverse().map(post => {

      if (this.props.page === "feed") {
        user = this.props.friends[post.author_id];
      }

      return (
        <PostIndexItem
          key={ post.id }
          deletePost={ this.props.deletePost }
          post={ post }
          author={ user }
          currentUser={ this.props.currentUser }
        />
      );
    });

    return (
      <div >
        <ul className="post-index-ul">{ posts }</ul>
      </div>
    );
  }
}

export default PostIndex;
