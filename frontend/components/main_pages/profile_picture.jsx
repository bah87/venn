import React from 'react';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateFile = this.updateFile.bind(this);
    // this.cancelUpload = this.cancelUpload.bind(this);
  }

  handleFile(event) {

  }

  cancelUpload() {

  }

  handleSubmit() {

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
          <label
            for="profile-pic-upload"
            className="prof-pic-btn-label">
            <i className="fa fa-camera" aria-hidden="true"></i>
            <p>Update Profile Picture</p>
          </label>
          <input
            id="profile-pic-upload"
            type="file"
            onChange={this.updateFile}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
