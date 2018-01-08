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
    }
    this.props.saveUserPhoto(formData).then(() => {
      this.setState({ imageUrl: "", imageFile: null });
    });
  }

  render() {
    return (
      <div className="profile-cover-photo">
        <input
          className="file-upload-btn"
          type="file"
          onChange={this.updateFile}
          />
      </div>
    );
  }
}

export default CoverPhoto;
