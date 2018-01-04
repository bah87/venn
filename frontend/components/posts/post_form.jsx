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
          <button className="make-post-modal-btn">Make Post</button>
        </div>

        <form className="post-form" onSubmit={this.handleSubmit}>
          <div className="post-form-main">
            <div className="post-body-wrapper">
              <textarea
                className="post-body"
                placeholder="What's on your mind?"
                value={this.state.body}
                onChange={this.update}
              />
            </div>

            <div className="post-body-footer">

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
