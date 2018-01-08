import React from 'react';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      modal: this.props.modal,
      cancelCoverUpload: "cover-upload-hidden",
      saveCoverUpload: "cover-upload-hidden"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ modal: newProps.modal });
  }

  updateFile(event) {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result,
        imageFile: file,
        cancelCoverUpload: "cancel-cover-upload",
        saveCoverUpload: "save-cover-upload"
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({
        imageUrl: null,
        imageFile: null,
        cancelCoverUpload: "cover-upload-hidden",
        saveCoverUpload: "cover-upload-hidden"
      });
    }
  }

  cancelUpload() {
    this.setState({
      imageUrl: null,
      imageFile: null,
      cancelCoverUpload: "cover-upload-hidden",
      saveCoverUpload: "cover-upload-hidden"
    });
  }

  handleSubmit() {
    event.preventDefault();
    this.props.togglePostFormModal();
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append("user[image]", this.state.imageFile);
      formData.append("user[id]", this.props.user.id);
      this.props.saveUserPhoto(formData).then(() => {
        this.setState({
          imageUrl: null,
          imageFile: null,
          cancelCoverUpload: "cover-upload-hidden",
          saveCoverUpload: "cover-upload-hidden"
        });
      });
    }
  }

  render() {
    let profPicUrl = "";
    if (this.props.user) profPicUrl = this.props.user.profile_pic_url;

    let modalPicUploadClass = "pic-upload-hidden";
    let modalProfPicScreen = "pic-upload-hidden";
    if (this.state.modal) {
      modalPicUploadClass = "prof-pic-modal-upload";
      modalProfPicScreen = "prof-pic-modal-screen";
    }

    return (
      <div>
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src={profPicUrl}
            />
        </div>

        <div onClick={() => this.props.toggleProfPicModal()}
          className="profile-pic-btn">
          <label className="prof-pic-btn-label">
            <i className="fa fa-camera" aria-hidden="true"></i>
            <p>Update Profile Picture</p>
          </label>
        </div>

        <div onClick={() => this.props.toggleProfPicModal()}
          className={modalProfPicScreen}>
        </div>

        <div className={modalPicUploadClass}>
          <div className="modal-upload-header">
            Update Profile Picture
          </div>

          <div className="prof-pic-upload-btn">
            <label
              for="profile-pic-upload"
              className="prof-pic-btn-label">
              <i className="fa fa-camera" aria-hidden="true"></i>
              <p>+ Upload Photo</p>
            </label>
            <input
              id="profile-pic-upload"
              type="file"
              onChange={this.updateFile}
            />
          </div>

          <div className="modal-upload-footer">
            <button
              className={this.state.cancelCoverUpload}
              onClick={this.cancelUpload}>
              Cancel
            </button>
            <button
              className={this.state.saveCoverUpload}
              onClick={this.handleSubmit}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
