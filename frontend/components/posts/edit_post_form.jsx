import React from 'react';
import PhotoPreview from '../main_pages/photo_preview';

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: this.props.post.body,
      imageFile: null,
      imageUrl: this.props.post.image_url,
      modal: this.props.modal,
      deleteReq: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ modal: newProps.modal });
  }

  update(event) {
    this.setState({ body: event.target.value });
  }

  updateFile(event) {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result,
        imageFile: file
      });
      if (!this.state.modal) {
        this.props.toggleEditPostModal();
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  cancelChanges() {
    if (this.state.imageFile) this.fileInput.value = "";

    this.props.toggleModal();

    this.setState({
      body: this.props.post.body,
      imageFile: null,
      imageUrl: this.props.post.image_url,
    });
  }

  cancelUpload() {
    if (this.props.post.image_url) {
      this.setState({ deleteReq: true });
    }

    this.fileInput.value = "";
    this.setState({ imageUrl: "", imageFile: null });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toggleModal();

    const formData = new FormData();
    formData.append("post[body]", this.state.body);
    formData.append("post[id]", this.props.post.id);

    const file = this.state.imageFile;
    if (file) formData.append("post[image]", file);

    if (this.state.deleteReq) {
      this.props.deletePostPhoto(this.props.post.id).then(() => {
        this.props.updatePost(formData);
      }).then(() => {
        this.setState({ deleteReq: false });
      });
    }

    this.props.updatePost(formData);
  }

  render() {

    let editPostUpload = "edit-post-upload-label";
    let modalImgPreview = "cancel-upload-btn-hidden";
    if (this.state.imageUrl) {
      modalImgPreview = "cancel-upload-btn";
      editPostUpload = "edit-post-upload-label-hidden";
    }

    if (this.state.modal === this.props.post.id) {
      return (
        <div>
          <div className="edit-post-modal-screen"></div>

          <div className="edit-post-container">
            <div className="edit-post-header">
              Edit Post
              <span
                onClick={this.cancelChanges}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </span>
            </div>

            <div className="edit-post-body">
              <img
                className="edit-post-img"
                src={this.props.currentUser.profile_pic_url}>
              </img>
              <textarea
                className="edit-post-text"
                value={this.state.body}
                onChange={this.update}
                />
            </div>

            <div className="edit-post-upload-btn">
              <div>
                <label
                  for="edit-post-upload"
                  className={ editPostUpload }>
                  <p>+ Upload Photo</p>
                </label>
                <input
                  id="edit-post-upload"
                  type="file"
                  ref={(element) => { this.fileInput = element; }}
                  onChange={this.updateFile}
                />
              <div className="edit-post-img-preview">
                  <div className={modalImgPreview}>
                      <PhotoPreview cover={ false }
                        imageUrl={this.state.imageUrl} />
                        <span>
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                            onClick={this.cancelUpload}>
                          </i>
                        </span>
                    </div>
                </div>
              </div>
            </div>

            <div className="edit-post-footer">
              <button className="save-post-edits-btn"
                onClick={this.handleSubmit}>
                Save
              </button>
            </div>

          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

export default EditPostForm;
