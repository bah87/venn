import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import PostFormContainer from '../posts/post_form_container';
import { Link } from 'react-router-dom';
import TrendingNews from './trending_news';
import BrendanContactInfo from './brendan_contact_info';

class NewsFeed extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchFriends();
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
              <li>
                <BrendanContactInfo />
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
          <TrendingNews
            news={this.props.news}
            fetchTrendingNews={this.props.fetchTrendingNews}
          />
        </div>
      </div>
      <div className="messenger-and-games">
      </div>
    </div>
    );
  }
}

export default NewsFeed;
