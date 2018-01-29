import React from 'react';

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
      email: "Demo",
      password: "starwars"
    };

    this.props.login(demoUser);
  }

  render() {
    let errorClass = "no-errors";
    if (this.props.errors.includes("Invalid username/password combination")) {
      errorClass = "session errors";
    }
    return (
      <div className="login-header">
        <h1>venn</h1>

        <div className="session-error-container">
          <div className={errorClass}>
            Invalid username or password
          </div>
        </div>

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
            </button>
          </form>

            <button
              to="/"
              className="login-btns"
              onClick={this.handleDemo}
            >
              Demo Log In
            </button>
        </div>
      </div>
    );
  }
}

export default SessionForm;
