import React from 'react';
import PostImage from '../posts/post_image';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      imageFile: null,
      imageUrl: null
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
      document.getElementById("comment-input-focus").focus();
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
    document.getElementById("comment-input-focus").focus();
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("comment[body]", this.state.body);
    const file = this.state.imageFile;
    if (file) formData.append("comment[image]", file);
    formData.append("comment[post_id]", this.props.post.id);

    this.fileInput.value = "";

    this.props.action(formData).then(() => {
      this.setState({
        body: "",
        imageFile: null,
        imageUrl: null
      });
    });
  }

  render() {

    let imgPreview = "cancel-upload-btn-hidden";
    if (this.state.imageFile) {
      imgPreview = "comment-cancel-upload-btn";
    }

    if (this.props.currentUser) {
      return (
        <div className="comment-container">
          <img src={ this.props.currentUser.profile_pic_url }
            className="comment-img"></img>
          <div className="comment-box">
            <div className="comment-form-wrapper">
              <form className="comment-form" onSubmit={this.handleSubmit}>
                <input className="comment-input"
                  id="comment-input-focus"
                  placeholder="Write a comment..."
                  value={this.state.body}
                  onChange={this.update}>
                </input>
                <button className="comment-btn-hidden"></button>
              </form>
              <div className={imgPreview}>
                <PostImage form={true}
                  comment={true}
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
            <div className="comment-file-upload-container">
              <label htmlFor="file-upload-comment" id="comment-form-upload-label">
                <i className="fa fa-camera" aria-hidden="true"></i>
              </label>

              <input
                id="file-upload-comment"
                type="file"
                ref={(element) => { this.fileInput = element; }}
                onChange={this.updateFile}
              />
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
