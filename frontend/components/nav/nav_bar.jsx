import React from 'react';
import { Link } from 'react-router-dom';
import FriendDropdown from './friend_dropdown';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      dropdown: false
    };
    this.clickFriendDropdown = this.clickFriendDropdown.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ currentUser: newProps.currentUser });
  }

  clickFriendDropdown() {
    this.setState({ dropdown: !this.state.dropdown });
  }

  render() {

    let currentUser = this.state.currentUser;
    // currentUser = currentUser ? currentUser : {};
    const navClass = window.location.href.includes("profile") ? "profile" : "feed";
    if (currentUser) {
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
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: 'none' }}>
              <div className="profile-btn-container">
                <img className="nav-profile-pic"
                  src={currentUser.profile_pic_url}
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

            <div className="friend-requests"
              onClick={this.clickFriendDropdown}>
              <i className="fa fa-users" aria-hidden="true"></i>
              <FriendDropdown
                ref={friends => { this.friends = friends; }}
                requests={this.props.requests}
                rejectFriend={this.props.rejectFriend}
                addFriend={this.props.addFriend}
                currentUser={currentUser}
                dropdownStatus={this.state.dropdown}
                />
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
