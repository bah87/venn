import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
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
    this.props.login(this.state);
  }

  render() {
    return (
      <div className="login-header">
        <h1>venn</h1>

        <form onSubmit={this.handleSubmit} className="login-form">
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

          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default SessionForm;
