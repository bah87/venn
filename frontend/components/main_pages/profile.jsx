import React from 'react';
import PostFormContainer from '../posts/post_form_container';
import PostIndexContainer from '../posts/post_index_container';
import CoverPhoto from './cover_photo';
import ProfilePicture from './profile_picture';

class Profile extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const id = this.props.match.params.userId;
    this.props.fetchUser(id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(newProps.match.params.userId);
    }
  }

  render() {

    let postForm = null;
    if (parseInt(this.props.match.params.userId) === this.props.currentUser.id) {
      postForm = (
        <PostFormContainer
          page={"profile"}
          user={ this.props.user }
          id={ this.props.match.params.userId }
          recipient={ false }
        />
      );
    } else {
      postForm = (
        <PostFormContainer
          page={"profile"}
          user={ this.props.user }
          id={ this.props.match.params.userId }
          recipient={ true }
        />
      );
    }

    return (
      <div className="profile-main">
        <header className="profile-cover">
          <CoverPhoto
            currentUser={ this.props.currentUser }
            user={ this.props.user }
            saveUserPhoto={ this.props.saveUserPhoto }
          />
          <ProfilePicture
            currentUser={ this.props.currentUser }
            user={ this.props.user }
            saveUserPhoto={ this.props.saveUserPhoto }
            toggleProfPicModal={ this.props.toggleProfPicModal }
            modal={this.props.modal}
          />
        </header>

        <main className="profile-body">
          <aside className="profile-aside">
            <div className="profile-intro">
            </div>

            <div className="profile-photos">
            </div>

            <div className="profile-friends">
            </div>
          </aside>

          <div className="profile-post-index">
            { postForm }
            <PostIndexContainer
              page={"profile"}
              user={ this.props.user }
              id={ this.props.match.params.userId }
              />
          </div>
        </main>
      </div>




    );
  }
}

export default Profile;
