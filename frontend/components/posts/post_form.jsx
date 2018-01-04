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
        <button className="make-post-modal-btn">Make Post</button>

        <form className="post-form" onSubmit={this.handleSubmit}>
          <textarea
            className="post-body"
            placeholder="What's on your mind?"
            value={this.state.body}
            onChange={this.update}
          />

          <button className="create-post-btn">Post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
