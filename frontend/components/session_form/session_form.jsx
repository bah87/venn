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

        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <div className="email-login">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>

            <div className="password-login">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>

            <input className="login-btn" type="submit" value="Log In" />
          </form>

          <button className="demo-login-btn">Demo Log In</button>
        </div>
      </div>
    );
  }
}

export default SessionForm;
