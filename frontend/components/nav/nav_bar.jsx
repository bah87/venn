import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    const currentUser = this.props.currentUser;
    const navClass = window.location.href.includes("profile") ? "profile" : "feed";
    // if (currentUser) {
      return (
        <div className="main-nav-bar">
          <div className="left-nav">
            <Link to="/" style={{ display: 'flex' }}>
              <img
                className="nav-logo"
                src={window.staticImages.navLogo}
                />
            </Link>

            <div className="nav-search">
              <input
                type="text"
                placeholder="Search"
              />
              <button className="nav-search-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div className={`right-nav-${navClass}`}>
            <Link
              to={`/profile/${this.props.currentUser.id}`}
              style={{ textDecoration: 'none' }}>
              <div className="profile-btn-container">
                <img className="nav-profile-pic"
                  src={this.props.currentUser.profile_pic_url}
                />
              <button className="profile-btn">{ currentUser.first_name }</button>
              </div>
            </Link>

            <div className="newsfeed-btn-container">
              <Link to="/">
                <button className="newsfeed-btn">
                  Home
                </button>
              </Link>
            </div>

            <div className="logout-btn-container">
              <button
                className="logout-btn"
                onClick={() => this.props.logout()}>Logout</button>
            </div>
          </div>

        </div>
      );
  }
}

export default NavBar;


// } 
// else {
//   return (
//     <div></div>
//   );
// }
