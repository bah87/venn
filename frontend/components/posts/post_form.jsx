import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      recipient_id: null,
      imageFile: null,
      imageUrl: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  update(event) {
    this.setState({ body: event.target.value });
  }

  updateFile(event) {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
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

    this.props.createPost(formData).then(() => {
      this.setState({ body: "", imageUrl: "" });
    });

    // this.setState(
    //   { recipient_id: id },
    //   () => this.props.createPost(this.state).then(() => {
    //   this.setState({ body: "" });
    // }));
  }

  render() {
    let placeholderText;
    if (!this.props.user) {
      placeholderText = "What's on your mind?";
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
              <img className="img-preview" src={this.state.imageUrl}/>
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
