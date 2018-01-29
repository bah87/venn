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

  render() {
    let date = postDateFormat(this.props.post.updated_at);

    let wallPostClass = "wall-post-hidden";
    if (this.props.post.recipient_id  && this.props.page !== "feed") {
      wallPostClass = "wall-post";
    }

    let link = <Linkify>{this.props.post.body}</Linkify>;
    const linkify = new LinkifyIt();
    if (Object.values(this.props.linkPreview).length > 0) {
      link = this.props.linkPreview.title;
    } else if (linkify.match(link)) {
      this.props.fetchLinkPreview(linkify.match(link)[0].url);
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
                  </div>
                </Link>

                <div className={wallPostClass}>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <p className="post-item-name">
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
                  </p>
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
            <p>{ link }</p>
            <PostImage form={false}
              imageUrl={this.props.post.image_url} />
          </main>

          <footer className="post-item-footer">
            <div className="like-btn">
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
