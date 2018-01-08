import React from 'react';
import PhotoPreview from './photo_preview';

class CoverPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      cancelCoverUpload: "cover-upload-hidden",
      saveCoverUpload: "cover-upload-hidden"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
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
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append("user[cover_photo]", this.state.imageFile);
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
    let coverPhotoUrl = "";
    if (this.props.user) coverPhotoUrl = this.props.user.cover_photo_url;

    return (
      <div>
        <div
          style={{
            backgroundImage: "url(" + coverPhotoUrl + ")",
            backgroundPositionY: "0px",
            backgroundSize: "851px"
          }}
          className="profile-cover-photo-container">

          <PhotoPreview imageUrl={this.state.imageUrl} />
          <div className="cover-photo-screen">
            <div className="cover-photo-btn">
              <label for="file-upload" className="custom-file-upload">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                  Upload Cover Photo
              </label>
              <input
                id="file-upload"
                type="file"
                ref={(element) => { this.fileInput = element; }}
                onChange={this.updateFile}
              />
            </div>
          </div>
        </div>

        <div className="profile-cover-nav">
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
    );
  }
}

export default CoverPhoto;
