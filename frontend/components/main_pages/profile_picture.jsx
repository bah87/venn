import React from 'react';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
  }

  render() {
    return (
      <div className="profile-picture-container">
        <img
          className="profile-picture"
          src={this.props.user.profile_pic_url}
        />
      </div>
    );
  }
}

export default ProfilePicture;
