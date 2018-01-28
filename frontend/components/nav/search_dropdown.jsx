import React from 'react';

class SearchDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
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
          <li className="search-item" id={user.id}>
            {`${user.first_name} ${user.last_name}`}
          </li>
        );
      });
    }

    return (
      <div>
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
    );
  }
}

export default SearchDropdown;
