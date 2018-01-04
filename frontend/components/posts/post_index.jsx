import React from 'react';
import PostIndexItem from './post_index_item';
import PostFormContainer from './post_form_container';

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
        />
      );
    });

    return (
      <main className="post-index">
        <PostFormContainer />

        <ul>{ posts }</ul>
      </main>
    );
  }
}

export default PostIndex;
