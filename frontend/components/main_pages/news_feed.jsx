import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import PostFormContainer from '../posts/post_form_container';
import { Link } from 'react-router-dom';

class NewsFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      category: "politics"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchFriends();
    this.props.fetchTrendingNews(this.state.category);
  }

  handleClick(category) {
    return () => {
      this.setState({ category }, () => {
        this.props.fetchTrendingNews(this.state.category);
      });
    };
  }

  render() {
    let articles;
    if (this.props.news) {
      articles= this.props.news.map((article, idx) => {
        return (
          <li key={idx}>
            <img className="trend-icon"
              src={window.staticImages.trendIcon}></img>
            <div>
              <p className="article-desc">{ article.title }</p> <span
                className="article-source">
              { article.source.name }</span>
            </div>
          </li>
        );
      });
    }

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
                <i onClick={this.handleClick("politics")}
                  className="fa fa-university" aria-hidden="true"></i>
                <i onClick={this.handleClick("science")}
                  className="fa fa-flask" aria-hidden="true"></i>
                <i onClick={this.handleClick("sports")}
                  className="fa fa-futbol-o" aria-hidden="true"></i>
                <i onClick={this.handleClick("entertainment")}
                  className="fa fa-film" aria-hidden="true"></i>
              </div>
            </div>
            <ul className="trending-list">
              { articles }
            </ul>
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
