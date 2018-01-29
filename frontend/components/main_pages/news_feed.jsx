import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import PostFormContainer from '../posts/post_form_container';
import { Link } from 'react-router-dom';

class NewsFeed extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchFriends();
    // this.props.fetchTrendingNews();
    // trending, politics, science & technology, sports, entertainment
  }

  render() {

    const currentUser = this.props.currentUser;
    return (
      <div className="newsfeed-parent">
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

        <div className="right-div">
          <div className="newsapi">
            <div className="trending-header">
              <p className="trending-title">Trending</p>
              <div className="trending-icons">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
                <i class="fa fa-university" aria-hidden="true"></i>
                <i class="fa fa-flask" aria-hidden="true"></i>
                <i class="fa fa-futbol-o" aria-hidden="true"></i>
                <i class="fa fa-film" aria-hidden="true"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="messenger-and-games">
      </div>
    </div>
    );
  }
}

export default NewsFeed;
