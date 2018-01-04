import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", author_id: this.props.currentUser.id};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createPost(this.state).then(() => {
      this.setState({ body: "" });
    });
  }

  render() {
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
              <p className="post-profile-pic"></p>
              <textarea
                className="post-body"
                placeholder="What's on your mind?"
                value={this.state.body}
                onChange={this.update}
              />
            </div>

            <div className="post-body-footer">
              <span>
                <i className="fa fa-camera" aria-hidden="true"></i>
                <button className="photo-video-modal-btn">Photo/Video</button>
              </span>
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
