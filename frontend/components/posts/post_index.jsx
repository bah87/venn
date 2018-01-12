import React from 'react';
import PostIndexItem from './post_index_item';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.action(this.props.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.id !== this.props.id) {
      this.props.action(newProps.id);
    }
  }

  render() {

    let user = this.props.user;

    if (!user && !this.props.friends) { return null; }

    const posts = this.props.posts.reverse().map(post => {

      if (this.props.page === "feed") {
        user = this.props.friends[post.author_id];
      }

      return (
        <div key={ post.id }>
          <PostIndexItem
            page = { this.props.page }
            deletePost={ this.props.deletePost }
            updatePost={ this.props.updatePost }
            modal={ this.props.modal }
            post={ post }
            user={ user }
            currentUser={ this.props.currentUser }
            toggleEditPostModal={ this.props.toggleEditPostModal }
            deletePostPhoto={ this.props.deletePostPhoto }
            />
          <CommentIndexContainer
            post={ post }
          />
          <CommentFormContainer
            type={ "new" }
            post={ post }
          />
        </div>
      );
    });

    return (
      <div >
        <ul className="post-index-ul">{ posts }</ul>
      </div>
    );
  }
}

export default PostIndex;
