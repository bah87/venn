import React from 'react';
import { Link } from 'react-router-dom';

class SearchDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput() {
    this.setState(
      { query: "" },
      () => this.props.searchUsers(this.state.query)
    );
  }

  handleChange(event) {
    this.setState(
      { query: event.target.value },
      () => this.props.searchUsers(this.state.query)
    );
  }

  render() {
    let users;
    if (this.props.users) {
      users = this.props.users.map(user => {
        return (
          <li className="search-item" key={user.id}>
            <Link onClick={this.clearInput}
              style={{
                textDecoration: 'none',
                color: 'rgb(29, 33, 41)',
                fontSize: '14px'
              }}
              to={`/profile/${user.id}`}>
              {`${user.first_name} ${user.last_name}`}
            </Link>
          </li>
        );
      });
    }

    return (
      <div className="nav-search">
        <div className="search-results-container">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search"
            value={this.state.query}
          />
          <ul className="search-results">
            { users }
          </ul>
        </div>
        <button className="nav-search-btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default SearchDropdown;
