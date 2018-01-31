import React from 'react';
import LinkHover from './link_hover';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

class TrendingNews extends React.Component {
  constructor() {
    super();

    this.state = {
      category: "politics",
      moreLinksBtn: "See More"
    };

    this.handleClick = this.handleClick.bind(this);
    this.clickSeeMore = this.clickSeeMore.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrendingNews(this.state.category);
  }

  clickSeeMore() {
    const text = this.state.moreLinksBtn === "See More" ? "See Less"
    : "See More";
    this.setState({ moreLinksBtn: text });
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
    }

    let articles;
    if (this.props.news) {
      const num = this.state.moreLinksBtn === "See More" ? 7 : 13;
      articles= this.props.news.slice(0,num).map((article, idx) => {
        return (
          <li key={idx}>
            <img className="trend-icon"
              src={window.staticImages.trendIcon}></img>
            <a className="news-link"
              href={ article.url } target={"_blank"}>
              <p className="article-desc">{ article.title }</p> <span
                className="article-source">
              { article.source.name }</span>
              <LinkHover
                article={article}
              />
              <img
                className="link-nub"
                src={window.staticImages.linkNub}
                />
            </a>
          </li>
        );
      });
    } else {
      articles = (
        <div className="clip-loader">
          <ClipLoader
            loading={true}
            color={'rgb(89, 109, 190)'}
          />
        </div>
      );
    }

    return (
      <div className="newsapi">
        <div className="trending-header">
          <p className="trending-title">Trending</p>
          <div className="trending-icons">
            <div className="icon-container">
              <i onClick={this.handleClick("politics")}
                className={politics} aria-hidden="true"></i>
              <div className="icon-hover">Politics</div>
              <img className="link-icon"
                src={window.staticImages.linkIconNub}></img>
              </div>
            <div className="icon-container">
              <i onClick={this.handleClick("science")}
                className={science} aria-hidden="true"></i>
              <div className="icon-hover">Science</div>
              <img className="link-icon"
                src={window.staticImages.linkIconNub}></img>
              </div>
            <div className="icon-container">
              <i onClick={this.handleClick("sports")}
                className={sports} aria-hidden="true"></i>
              <div className="icon-hover">Sports</div>
              <img className="link-icon"
                src={window.staticImages.linkIconNub}></img>
              </div>
            <div className="icon-container">
              <i onClick={this.handleClick("entertainment")}
                className={entertainment} aria-hidden="true"></i>
              <div className="icon-hover">Entertainment</div>
              <img className="link-icon"
                src={window.staticImages.linkIconNub}></img>
              </div>
          </div>
        </div>
        <ul className="trending-list">
          { articles }
        </ul>
        <div className="trending-footer">
          <button className="see-more" onClick={this.clickSeeMore}>
            {this.state.moreLinksBtn}
          </button>
          <div className="newsapi-cred">Powered by <a
            href="https://newsapi.org/"
            target={"_blank"}>News API</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingNews;
