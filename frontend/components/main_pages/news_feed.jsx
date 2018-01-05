import React from 'react';
import PostIndexContainer from '../posts/post_index_container';

class NewsFeed extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <PostIndexContainer page={"feed"} friends={this.props.friends} />
    );
  }
}

export default NewsFeed;
