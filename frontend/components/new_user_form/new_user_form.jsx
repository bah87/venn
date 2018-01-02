import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first_name: "", last_name: "", email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  render() {
    return (
      <div className="signup-wrapper">
        <form className="signup-form">
          <label>First name
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
            />
          </label>

          <label>Last name
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
            />
          </label>

          <label>Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>

          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default NewUserForm;
