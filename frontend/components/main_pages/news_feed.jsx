import React from 'react';
import PostIndexContainer from '../posts/post_index_container';

class NewsFeed extends React.Component {
  render() {
    return (
      <main className="news-feed">
        <PostIndexContainer />
      </main>
    );
  }
}

export default NewsFeed;
