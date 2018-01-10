import React from 'react';
import PhotoPreview from './photo_preview';

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
    this.fileInput.value = "";

    this.setState({
      imageUrl: null,
      imageFile: null,
      cancelCoverUpload: "cover-upload-hidden",
      saveCoverUpload: "cover-upload-hidden"
    });
  }

  handleSubmit() {
    event.preventDefault();
    this.props.toggleProfPicModal();
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

    let modalCloseBtn = "post-form-close-btn-hidden";
    let modalPicUploadClass = "pic-upload-hidden";
    let modalProfPicScreen = "pic-upload-hidden";
    if (this.state.modal) {
      modalPicUploadClass = "prof-pic-modal-upload";
      modalProfPicScreen = "prof-pic-modal-screen";
      modalCloseBtn = "prof-modal-close-btn";
    }

    let profPicBtnUpload = "prof-pic-btn-upload";
    if (this.state.imageFile) {
      profPicBtnUpload = "prof-pic-btn-upload-hidden";
    }

    if ((this.props.user) && (this.props.currentUser.id === this.props.user.id)) {
      return (
        <div className="prof-pic-anchor">
          <div className="prof-pic-hover">
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
          </div>

          <div onClick={() => this.props.toggleProfPicModal()}
            className={modalProfPicScreen}>
          </div>

          <div className="modal-prof-pic-upload-anchor">
            <div className={modalPicUploadClass}>
              <div className="modal-upload-header">
                <p>Update Profile Picture</p>
                <span
                  className={modalCloseBtn}
                  onClick={() => this.props.toggleProfPicModal()}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </span>
              </div>

              <div className="prof-pic-upload-btn">
                <div>
                  <label
                    htmlFor="profile-pic-upload"
                    className={ profPicBtnUpload }>
                    <p>+ Upload Photo</p>
                  </label>
                  <input
                    id="profile-pic-upload"
                    type="file"
                    ref={(element) => { this.fileInput = element; }}
                    onChange={this.updateFile}
                  />
                <PhotoPreview cover={ false }
                  imageUrl={this.state.imageUrl} />
                </div>
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

        </div>
      );
    } else {
      return (
        <div className="prof-pic-anchor">
          <div className="profile-picture-container">
            <img
              className="profile-picture"
              src={profPicUrl}
              />
          </div>
        </div>
      );
    }

  }
}

export default ProfilePicture;
