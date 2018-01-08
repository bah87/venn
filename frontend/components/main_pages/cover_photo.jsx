import React from 'react';

class CoverPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
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
        imageFile: file
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  cancelUpload() {
    this.setState({ imageUrl: "", imageFile: null });
  }

  handleSubmit() {
    event.preventDefault();
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append("user[cover_photo]", this.state.imageFile);
      formData.append("user[id]", this.props.user.id);
      this.props.saveUserPhoto(formData).then(() => {
        this.setState({ imageUrl: "", imageFile: null });
      });
    }
  }

  render() {

    let coverPhotoUrl = "";
    if (this.props.user) coverPhotoUrl = this.props.user.cover_photo_url;

    return (
      <div>
        <div className="profile-cover-photo">
          <img src={coverPhotoUrl}
            />
          <img src={this.state.imageUrl}/>
          <i className="fa fa-camera" aria-hidden="true"></i>
          <input
            type="file"
            onChange={this.updateFile}
            />
        </div>

        <div className="profile-cover-nav">
          <button
            className="cancelCoverUpload"
            onClick={this.cancelUpload}>
            Cancel
          </button>
          <button
            className="saveCoverUpload"
            onClick={this.handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}

export default CoverPhoto;
