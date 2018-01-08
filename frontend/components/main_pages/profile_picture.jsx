import React from 'react';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      modal: this.props.modal
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ modal: newProps.modal });
  }

  handleFile(event) {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result,
        imageFile: file
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({
        imageUrl: null,
        imageFile: null
      });
    }
  }

  cancelUpload() {
    this.setState({
      imageUrl: null,
      imageFile: null
    });
  }

  handleSubmit() {
    event.preventDefault();
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append("user[image]", this.state.imageFile);
      formData.append("user[id]", this.props.user.id);
      this.props.saveUserPhoto(formData).then(() => {
        this.setState({
          imageUrl: null,
          imageFile: null
        });
      });
    }
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
