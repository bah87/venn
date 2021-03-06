import React from 'react';
import PostImage from '../posts/post_image';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      imageFile: null,
      imageUrl: this.props.comment.image_url
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
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
      let inputFocus = `comment-input-focus-${this.props.post.id}`;
      document.getElementById(inputFocus).focus();
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: null, imageFile: null });
    }
  }

  cancelUpload() {
    this.fileInput.value = "";
    this.setState({ imageUrl: null, imageFile: null });
    let inputFocus = "comment-input-focus-" + `${this.props.post.id}`;
    document.getElementById(inputFocus).focus();
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("comment[body]", this.state.body);
    const file = this.state.imageFile;
    if (file) formData.append("comment[image]", file);
    formData.append("comment[post_id]", this.props.post.id);
    if (this.props.type === "edit") {
      formData.append("comment[id]", this.props.comment.id);
      this.props.toggleEditComment();
    }

    this.fileInput.value = "";

    this.props.action(formData).then(() => {
      if (this.props.type === "new") {
        this.setState({
          body: "",
          imageFile: null,
          imageUrl: null
        });
      }
    });
  }

  render() {

    let imgPreview = "comment-img-preview-box-hidden";
    if (this.state.imageFile) {
      imgPreview = "comment-img-preview-box";
    }
    let fileUploadId = "file-upload-comment-" + `${this.props.post.id}`;
    let inputFocus = "comment-input-focus-" + `${this.props.post.id}`;

    if (this.props.currentUser) {
      return (
        <div className="comment-container">
          <img src={ this.props.currentUser.profile_pic_url }
            className="comment-img"></img>
          <div>
            <div className="comment-box">
              <div className="comment-form-wrapper">
                <form className="comment-form" onSubmit={this.handleSubmit}>
                  <input className="comment-input"
                    id={inputFocus}
                    placeholder="Write a comment..."
                    value={this.state.body}
                    onChange={this.update}>
                  </input>
                  <button className="comment-btn-hidden"></button>
                </form>
              </div>
              <div className="comment-file-upload-container">
                <label htmlFor={fileUploadId} id="comment-form-upload-label">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </label>

                <input
                  id={fileUploadId}
                  type="file"
                  ref={(element) => { this.fileInput = element; }}
                  onChange={this.updateFile}
                />
              </div>
            </div>
            <div className={imgPreview}>
              <PostImage form={true}
                comment={true}
                imageUrl={this.state.imageUrl} />
              <i
                className="fa fa-times"
                aria-hidden="true"
                onClick={this.cancelUpload}>
              </i>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CommentForm;
