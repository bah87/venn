import React from 'react';
import PhotoPreview from '../main_pages/photo_preview';

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: this.props.post.body,
      imageFile: null,
      imageUrl: this.props.post.image_url
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  update(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toggleModal();

    const formData = new FormData();
    formData.append("post[body]", this.state.body);

    const file = this.state.imageFile;
    if (file) formData.append("post[image]", file);

    this.props.updatePost(formData);
  }

  render() {
    // current user - name and prof pic thumb
    // post - body, time, picture (if any)
    // updatePost - updates
    // toggleModal

    return (
      <div className="edit-post-container">
        <div className="edit-post-header">
          <p>Update Profile Picture</p>
          <span
            onClick={() => this.props.toggleModal()}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>

        <div className="edit-post-body">
          <img
            className="edit-post-img"
            src={this.props.post.image_url}>
          </img>
          <textarea
            className="edit-post-text"
            value={this.state.body}
            onChange={this.update}
          />
        </div>

        <div className="edit-post-img">
          <PhotoPreview cover={ true }
            imageUrl={this.state.imageUrl} />
        </div>

        <div className="edit-post-footer">
          <button className="save-post-edits-btn"
            onClick={this.handleSubmit}>
            Save
          </button>
        </div>

      </div>
    )
  }
}

export default EditPostForm;
