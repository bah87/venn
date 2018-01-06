import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      recipient_id: null,
      imageFile: null,
      imageUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({ body: event.target.value });
  }

  updateFile(event) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    const id = user.id !== currentUser.id ? user.id: null;

    this.setState(
      { recipient_id: id },
      () => this.props.createPost(this.state).then(() => {
      this.setState({ body: "" });
    }));
  }

  render() {
    let placeholderText;
    if (!this.props.user) {
      placeholderText = null;
    } else if (this.props.recipient) {
      placeholderText = `Write something to ${this.props.user.first_name}...`;
    } else {
      placeholderText = "What's on your mind?";
    }

    return (
      <div className="post-form-container">
        <div className="post-form-header">
          <span>
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <button className="make-post-modal-btn">Make Post</button>
          </span>

          <span>
            <i className="fa fa-camera" aria-hidden="true"></i>
            <button className="photo-video-modal-btn">Photo/Video</button>
          </span>
        </div>

        <form className="post-form" onSubmit={this.handleSubmit}>
          <div className="post-form-main">
            <div className="post-body-wrapper">
              <img className="post-profile-pic"
                src={window.staticImages[this.props.currentUser.profile_pic_url.split('.')[0]]}
              />
              <textarea
                className="post-body"
                placeholder={ placeholderText }
                value={this.state.body}
                onChange={this.update}
              />
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
    );
  }
}

export default PostForm;
