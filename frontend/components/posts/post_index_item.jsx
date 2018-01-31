import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './post_image';
import PostDropdown from './post_dropdown';
import EditPostForm from './edit_post_form';
import { postDateFormat } from '../../util/date_util';
import NameHover from '../main_pages/name_hover';
import LinkifyIt from 'linkify-it';
import Linkify from 'react-linkify';

class PostIndexItem extends React.Component {
  constructor() {
    super();

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    debugger

    let likeId;
    this.props.post.likes.forEach(like => {
      if (like.liker_id === this.props.currentUser.id) {
        likeId = like.id;
      }
    });

    if (likeId) {
      this.props.unlikePost(likeId, this.props.post.id);
    } else {
      this.props.likePost(this.props.post.id);
    }
  }

  render() {
    let date = postDateFormat(this.props.post.updated_at);

    let wallPostClass = "wall-post-hidden";
    if (this.props.post.recipient_id  && this.props.page !== "feed") {
      wallPostClass = "wall-post";
    }

    let body = this.props.post.body;
    const linkify = new LinkifyIt();
    const link = linkify.match(body);
    if (link) {
      if (link[0].url.includes("youtube.com")) {
        const videoId = link[0].url.split("?v=")[1];
        body = (<iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          height="275" width="492" style={{ border: 'none' }}></iframe>);
      } else {
        body = <Linkify>{ body }</Linkify>;
      }
    } else {
      body = <Linkify>{ body }</Linkify>;
    }

    if (this.props.user) {
      return (
        <li className="post-item">

          <header className="post-item-header">
            <Link to={`/profile/${this.props.post.author_id}`}>
              <img className="post-item-profile-pic"
                src={this.props.post.author_img}
                />
            </Link>

            <div className="post-item-header-right">
              <div className="post-item-name-and-options">
                <Link
                  to={`/profile/${this.props.post.author_id}`}
                  style={{ textDecoration: 'none'}}>
                  <div className="post-item-name">
                    {this.props.post.author_name}
                    <NameHover
                      post={{
                        "name": this.props.post.author_name,
                        "coverImg": this.props.post.author_cover_img,
                        "profImg": this.props.post.author_img
                      }}
                    />
                    <img className="name-hover-nub"
                      src={window.staticImages.nameHoverNub}></img>
                  </div>
                </Link>

                <div className={wallPostClass}>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <div className="post-item-name">
                    {`${this.props.user.first_name}
                    ${this.props.user.last_name}`}
                    <NameHover
                      post={{
                        "name": `${this.props.user.first_name}
                        ${this.props.user.last_name}`,
                        "coverImg": this.props.post.recipient_cover_img,
                        "profImg": this.props.post.recipient_img
                      }}
                    />
                    <img className="name-hover-nub"
                      src={window.staticImages.nameHoverNub}></img>
                  </div>
                </div>

                <PostDropdown
                  postId={ this.props.post.id }
                  currentUser={ this.props.currentUser }
                  authorId={ this.props.post.author_id }
                  toggleEditPostModal={ this.props.toggleEditPostModal }
                  deletePost={ this.props.deletePost }
                />
                <EditPostForm
                  modal={ this.props.modal }
                  post={ this.props.post }
                  toggleModal={ this.props.toggleEditPostModal }
                  updatePost={ this.props.updatePost }
                  deletePostPhoto={ this.props.deletePostPhoto }
                  currentUser={ this.props.user }
                />
              </div>

              <div className="post-item-date-container">
                <Link to={`/users/${this.props.post.author_id}/posts/${this.props.post.id}`}
                  style={{ textDecoration: 'none'}}>
                  <p className="post-item-date">
                    { date }
                  </p>
                </Link>
              </div>
            </div>
          </header>

          <main className="post-item-body">
            <p>{ body }</p>
            <PostImage form={false}
              imageUrl={this.props.post.image_url} />
          </main>

          <footer className="post-item-footer">
            <div onClick={this.handleLike} className="like-btn">
              <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              <p>Like</p>
            </div>
            <div
              onClick={() => document.getElementById(`comment-input-focus-${this.props.post.id}`).focus()}
              className="comment-btn">
              <i className="fa fa-comment-o" aria-hidden="true"></i>
              <p>Comment</p>
            </div>
          </footer>
        </li>
      );
    } else { return null; }
  }
}

export default PostIndexItem;
