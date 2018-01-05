import React from 'react';
import PostFormContainer from '../posts/post_form_container';
import PostIndexContainer from '../posts/post_index_container';

class Profile extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.userId;
    this.props.fetchUser(id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.match.params.userId) {

      this.props.fetchUser(newProps.match.params.userId);
    }
  }

  render() {
    // debugger
    // (this.props.user) && (parseInt(this.props.match.params.userId) === this.props.user.id)

    let postForm = null;
    if ((this.props.user) && (this.props.user.id === this.props.currentUser.id)) {
      postForm = (
        <PostFormContainer
          page={"profile"}
          user={ this.props.user }
          id={ this.props.match.params.userId }
        />
      );
    }

    return (
      <main className="post-index">
        { postForm }
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
