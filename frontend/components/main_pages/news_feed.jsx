import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import PostFormContainer from '../posts/post_form_container';

class NewsFeed extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        <PostFormContainer
          page={"profile"}
          user={ this.props.user }
          recipient={ false }
        />
        <PostIndexContainer page={"feed"} friends={this.props.friends} />
      </div>
    );
  }
}

export default NewsFeed;
