import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <div className="main-nav-bar">
          <div className="left-nav">
            <Link to="/">
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

          <div className="right-nav">
            <Link
              to={`/profile/${this.props.currentUser.id}`} 
              style={{ textDecoration: 'none' }}>
              <div className="profile-btn-container">
                <img className="nav-profile-pic"
                  src={window.staticImages[this.props.currentUser.profile_pic_url.split('.')[0]]}
                />
                <button className="profile-btn">{ currentUser.email }</button>
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
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default NavBar;
