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
      placeholderText: placeholderText
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
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

  handleFormClick() {
    if (!this.state.modal) {
      this.props.togglePostFormModal();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.togglePostFormModal();
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

    let placeholderText;
    if (!this.props.user || !this.props.recipient) {
      placeholderText = "What's on your mind?";
    } else {
      placeholderText = `Write something to ${this.props.user.first_name}...`;
    }

    this.props.createPost(formData).then(() => {
      this.setState({
        body: "",
        imageUrl: "",
        placeholderText: placeholderText
      });
    });
  }

  render() {

    let modalFormClass = "";
    let modalScreenClass = "";
    let modalHiddenForm = "";
    let modalCloseBtn = "post-form-close-btn-hidden";
    if (this.state.modal) {
      modalFormClass = "post-form-modal";
      modalScreenClass = "post-form-modal-open";
      modalHiddenForm = "post-form-modal-hidden";
      modalCloseBtn = "post-form-close-btn";
    }
    if (this.state.modal && this.state.imageFile) {
      modalHiddenForm = "post-form-modal-hidden-picture";
    }

    return (
      <div>
        <div
          className={modalScreenClass}
          onClick={() => this.props.togglePostFormModal()}>
        </div>

        <div className={modalFormClass}>
          <div className="post-form-container">
            <div className="post-form-header">
              <span>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <button className="make-post-modal-btn">Make Post</button>
              </span>

              <span>
                <i className="fa fa-camera" aria-hidden="true"></i>
                <button
                  className="photo-video-modal-btn">Photo/Video Album
                </button>
              </span>

              <span
                id={modalCloseBtn}
                onClick={() => this.props.togglePostFormModal()}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </span>
            </div>

            <form className="post-form" onSubmit={this.handleSubmit}>
              <div className="post-form-main">
                <div className="post-body-wrapper">
                  <div className="post-form-text">
                    <img className="post-profile-pic"
                      src={window.staticImages[this.props.currentUser.profile_pic_url.split('.')[0]]}
                      />
                    <textarea
                      onClick={this.handleFormClick}
                      className="post-body"
                      placeholder={ this.state.placeholderText }
                      value={this.state.body}
                      onChange={this.update}
                      />
                  </div>
                  <PostImage form={true} imageUrl={this.state.imageUrl} />
                </div>

                <div className="post-body-footer">
                  <div className="file-upload">
                    <div>
                      <div className="file-upload-label">
                        <i className="fa fa-camera" aria-hidden="true"></i>
                        <span>Photo/Video</span>
                      </div>

                      <input
                        className="file-upload-btn"
                        type="file"
                        onChange={this.updateFile}
                      />
                    </div>
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
