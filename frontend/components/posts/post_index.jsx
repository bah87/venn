import React from 'react';
import PostIndexItem from './post_index_item';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ScaleLoader } from 'react-spinners';

class PostIndex extends React.Component {
  constructor() {
    super();
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.props.initialFetch(this.props.id, 0);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.id !== this.props.id) {
      this.props.initialFetch(newProps.id, 0);
    }
  }

  fetchData(length) {
    return () => {
      this.props.additionalFetch(this.props.id, length);
    };
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
        <InfiniteScroll
          next={this.fetchData(posts.length)}
          hasMore={this.props.morePosts}
          loader={
            <div className="scale-loader">
              <ScaleLoader
                loading={this.props.morePosts}
                color={'rgb(89, 109, 190)'}
              />
            </div>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <p>There are no more posts to load.</p>
            </p>
          }
        >
          <ul className="post-index-ul">{ posts }</ul>
        </InfiniteScroll>
      </div>
    );
  }
}

export default PostIndex;
