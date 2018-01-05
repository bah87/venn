import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <div className="main-nav-bar">
          <div className="left-nav">
            <img
              className="nav-logo"
              src={window.staticImages.headerImage}
            />

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
            <div className="profile-btn-container">
              <p className="nav-profile-pic"></p>
              <button className="profile-btn">{ currentUser.email }</button>
            </div>

            <div className="newsfeed-btn-container">
              <button className="newsfeed-btn">Home</button>
            </div>

            <button className="logout-btn" onClick={() => this.props.logout()}>Logout</button>
          </div>

        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
    // else {
    //   return (
    //     <div>
    //       <Link to="/signup">Signup</Link>
    //       <br/>
    //       <Link to="/login">Login</Link>
    //     </div>
    //   );
    // }
  }
}

export default NavBar;
