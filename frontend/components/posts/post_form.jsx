import React from 'react';
import PostImage from './post_image';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    let placeholderText;
    if (!this.props.user || !this.props.recipient) {
      placeholderText = "What's on your mind?";
    } else {
      placeholderText = `Write something to ${this.props.user.first_name}...`;
    }

    this.state = {
      body: "",
      recipient_id: null,
      imageFile: null,
      imageUrl: null,
      modal: this.props.modal,
      errorModal: this.props.errorModal,
      placeholderText: placeholderText
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handlePlaceholderText = this.handlePlaceholderText.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ modal: newProps.modal });
    this.handlePlaceholderText();
  }

  update(event) {
    this.setState({ body: event.target.value });
  }

  handlePlaceholderText() {
    let placeholderText;
    if (!this.props.user || !this.props.recipient) {
      placeholderText = "What's on your mind?";
    } else {
      placeholderText = `Write something to ${this.props.user.first_name}...`;
    }
    if (this.state.imageFile) placeholderText = "Say something about this photo...";

    this.setState({ placeholderText: placeholderText });
  }

  updateFile(event) {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result,
        imageFile: file,
        placeholderText: "Say something about this photo..."
      });
      if (!this.state.modal) {
        this.props.togglePostFormModal();
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  cancelUpload() {
    this.fileInput.value = "";
    this.setState({ imageUrl: "", imageFile: null });
    this.handlePlaceholderText();
  }

  handleFormClick() {
    if (!this.state.modal) {
      this.props.togglePostFormModal();
      document.getElementById("post-form-textarea").focus();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.togglePostFormModal();

    if (this.state.modal) {
      const user = this.props.user;
      const currentUser = this.props.currentUser;

      const formData = new FormData();
      formData.append("post[body]", this.state.body);

      if (user) {
        const id = user.id !== currentUser.id ? user.id: null;
        formData.append("post[recipient_id]", id);
      }

      const file = this.state.imageFile;
      if (file) formData.append("post[image]", file);

      this.handlePlaceholderText();

      this.fileInput.value = "";

      this.props.createPost(formData).then(() => {
        this.setState({
          body: "",
          imageUrl: "",
          imageFile: null
        });
      });
    } else { document.getElementById("post-form-textarea").focus(); }
  }

  render() {

    let modalFormClass = "";
    let modalFormErrorClass = "post-form-error-hidden";
    let modalScreenClass = "";
    let modalHiddenForm = "";
    let modalCloseBtn = "post-form-close-btn-hidden";
    let modalImgPreview = "cancel-upload-btn-hidden";
    if (this.state.modal) {
      modalFormClass = "post-form-modal";
      modalScreenClass = "post-form-modal-open";
      modalHiddenForm = "post-form-modal-hidden";
      modalCloseBtn = "post-form-close-btn";
    }
    if (this.state.modal && this.state.imageFile) {
      modalImgPreview = "cancel-upload-btn";
      modalHiddenForm = "post-form-modal-hidden-picture";
    }
    if (this.state.errorModal) {
      modalFormErrorClass = "post-form-error-show";
    }

    let profPicUrl = "";
    if (this.props.currentUser) {
      profPicUrl = this.props.currentUser.profile_pic_url;
    }

    return (
      <div>
        <div
          className={modalScreenClass}
          onClick={() => this.props.togglePostFormModal()}>
        </div>

        <div className={modalFormErrorClass}>
          <div className="post-form-error-modal-screen">
          </div>
          <div className="post-form-error-container">
            <div className="post-form-error-header">
              Post Is Empty
            </div>
            <div className="post-form-error-body">
              This post appears to be blank.
              Please write something in the body of the post.
            </div>
            <div className="post-form-error-footer">
              <button className="save-cover-upload">Close</button>
            </div>
          </div>
        </div>

        <div className={modalFormClass}>
          <div className="post-form-container">
            <div className="post-form-header">
              <span>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <button onClick={this.handleFormClick}
                  className="make-post-modal-btn">Make Post</button>
              </span>

              <span>
                <i className="fa fa-camera" aria-hidden="true"></i>
                <button
                  className="photo-video-modal-btn">Photo/Video
                </button>
              </span>

              <div
                className={modalCloseBtn}
                onClick={() => this.props.togglePostFormModal()}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            </div>

            <form className="post-form" onSubmit={this.handleSubmit}>
              <div className="post-form-main">
                <div className="post-body-wrapper">
                  <div className="post-form-text">
                    <img className="post-profile-pic"
                      src={profPicUrl}
                      />
                    <textarea
                      id="post-form-textarea"
                      onClick={this.handleFormClick}
                      className="post-body"
                      placeholder={ this.state.placeholderText }
                      value={this.state.body}
                      onChange={this.update}
                      />
                  </div>

                  <div className={modalImgPreview}>
                    <PostImage form={true} imageUrl={this.state.imageUrl} />
                    <span>
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        onClick={this.cancelUpload}>
                      </i>
                    </span>
                  </div>
                </div>

                <div className="post-body-footer">
                  <div className="post-file-upload-container">
                    <label htmlFor="file-upload-post" id="post-form-upload-label">
                      <i className="fa fa-camera" aria-hidden="true"></i>
                      Photo/Video
                    </label>

                    <input
                      id="file-upload-post"
                      type="file"
                      ref={(element) => { this.fileInput = element; }}
                      onChange={this.updateFile}
                    />
                  </div>

                </div>
              </div>

              <div className="post-form-footer">
                <button className="create-post-btn">Post</button>
              </div>
            </form>
          </div>
        </div>

        <div className={modalHiddenForm}></div>
      </div>
    );
  }
}

export default PostForm;
