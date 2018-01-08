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
    let profPicUrl = "";
    if (this.props.user) profPicUrl = this.props.user.profile_pic_url;

    return (
      <div>
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src={profPicUrl}
            />
        </div>

        <div className="profile-pic-btn">
          
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
