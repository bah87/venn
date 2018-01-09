import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import PostFormContainer from '../posts/post_form_container';
import { Link } from 'react-router-dom';

class NewsFeed extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchFriends();
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div className="newsfeed-main">
        <div className="newsfeed-sidebar">
          <ul>
            <li>
              <Link
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: 'none'}}>
                <div className="newsfeed-li-name">
                  <img className="newsfeed-sidebar-profile-pic"
                    src={currentUser.profile_pic_url}
                    />
                  <p>
                    {`${currentUser.first_name} ${currentUser.last_name}`}
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="newsfeed-post-index">
          <PostFormContainer
            page={"profile"}
            user={ this.props.user }
            recipient={ false }
            />
          <PostIndexContainer page={"feed"} friends={this.props.friends} />
        </div>

        <div className="newsfeed-trending">
        </div>
      </div>
    );
  }
}

export default NewsFeed;
