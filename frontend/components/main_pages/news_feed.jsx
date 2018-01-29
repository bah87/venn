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
    let politics = "fa fa-university";
    let science = "fa fa-flask";
    let sports = "fa fa-futbol-o";
    let entertainment = "fa fa-film";
    switch (this.state.category) {
      case "politics":
        politics = `${politics} icon-active`;
        break;
      case "science":
        science = `${science} icon-active`;
        break;
      case "sports":
        sports = `${sports} icon-active`;
        break;
      case "entertainment":
        entertainment = `${entertainment} icon-active`;
        break;
      default:

    }

    let articles;
    if (this.props.news) {
      articles= this.props.news.map((article, idx) => {
        return (
          <li key={idx}>
            <img className="trend-icon"
              src={window.staticImages.trendIcon}></img>
            <a href={ article.url } target={"_blank"}>
              <p className="article-desc">{ article.title }</p> <span
                className="article-source">
              { article.source.name }</span>
            </a>
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
                <div className="icon-container">
                  <i onClick={this.handleClick("politics")}
                    className={politics} aria-hidden="true"></i>
                  <div className="icon-hover">Politics</div>
                </div>
                <i onClick={this.handleClick("science")}
                  className={science} aria-hidden="true"></i>
                <i onClick={this.handleClick("sports")}
                  className={sports} aria-hidden="true"></i>
                <i onClick={this.handleClick("entertainment")}
                  className={entertainment} aria-hidden="true"></i>
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
