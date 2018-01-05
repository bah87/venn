import React from 'react';
import PostFormContainer from '../posts/post_form_container';
import PostIndexContainer from '../posts/post_index_container';

class Profile extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.userId;
    this.props.fetchUser(id);
  }

  render() {
    return (
      <main className="post-index">
        <PostFormContainer
          page={"profile"}
          user={ this.props.user }
          id={ this.props.match.params.userId }
        />
        <PostIndexContainer
          page={"profile"}
          user={ this.props.user }
          id={ this.props.match.params.userId }
        />
      </main>
    );
  }
}

export default Profile;
