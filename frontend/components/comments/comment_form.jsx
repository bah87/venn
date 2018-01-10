import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      postId: this.props.post.id,
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
  }

  componentDidMount() {

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
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.type === "create") {
      let action = this.props.createPost;
    } else {
      let action = this.props.updatePost;
    }

    this.props.action(this.state).then(() => {
      this.setState({
        body: "",
        imageFile: null,
        imageUrl: null
      });
    });
  }

  render() {
    return (
      <div className="comment-container">
        <div className="comment-box">
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <input className="comment-input"
              placeholder="Write a comment..."
              value={this.state.body}
              onChange={this.update}>
            </input>
            <button className="comment-btn-hidden"></button>
          </form>
          <i className="fa fa-camera" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default CommentForm;
