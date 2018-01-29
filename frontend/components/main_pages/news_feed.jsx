import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import PostFormContainer from '../posts/post_form_container';
import { Link } from 'react-router-dom';
import NewsAPI from 'newsapi';

class NewsFeed extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchFriends();
  }

  render() {
    // const newsapi = new NewsAPI('cf34d376a7b24432952b954b7bd217c5');
    // newsapi.v2.topHeadlines({
    //   sources: 'bbc-news,the-verge',
    //   q: 'trump',
    //   category: 'politics',
    //   language: 'en',
    //   country: 'us'
    // }).then(response => {
    //   console.log(response);
    // });

    const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=cf34d376a7b24432952b954b7bd217c5';
    const req = new Request(url);
    fetch(req).then(function(response) {
      console.log(response.json());
    });

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
      </div>
      <div className="newsapi">

      </div>
    </div>
    );
  }
}

export default NewsFeed;
