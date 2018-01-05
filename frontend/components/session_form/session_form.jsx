import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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

  handleDemo(event) {
    event.preventDefault();

    const demoUser = {
      email: "demo_user",
      password: "starwars"
    };

    this.props.login(demoUser);
  }

  render() {
    return (
      <div className="login-header">
        <h1>venn</h1>

        <div className="both-login-forms">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="email-login">
              <label>Email</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>

            <div className="password-login">
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>

            <button className="login-btns">
              Log In
              <Link to="/feed" />
            </button>
          </form>

            <Link
              to="/feed"
              className="login-btns"
              onClick={this.handleDemo}
            >
              Demo Log In
            </Link>
        </div>
      </div>
    );
  }
}

export default SessionForm;
