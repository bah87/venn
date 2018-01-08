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

  updateFile() {

  }

  cancelUpload() {

  }

  handleSubmit() {
    
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
