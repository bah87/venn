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
    this.props.signup(this.state);
  }

  render() {

    // <label>
    //   <input
    //     type="text"
    //     placeholder="First name"
    //     value={this.state.first_name}
    //     onChange={this.update("first_name")}
    //   />
    // </label>
    //
    // <label>
    //   <input
    //     type="text"
    //     placeholder="Last name"
    //     value={this.state.last_name}
    //     onChange={this.update("last_name")}
    //   />
    // </label>

    return (
      <main className="landing-page-main">
        <div className="signup-static-content">
          <h4>Connect with friends and the world around you on Venn.</h4>
          <ul>
            <li>See photos and updates from friends in News Feed.</li>
            <li>Share what's new in your life on your Timeline.</li>
            <li>Find more of what you're looking for with Venn Search.</li>
          </ul>
        </div>

        <div className="signup-container">
          <form onSubmit={this.handleSubmit} className="signup-form">
            <h3>Sign Up</h3>
            <p>It's free and always will be.</p>


            <label>
              <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </label>

            <label>
              <input
                type="password"
                placeholder="New password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>

            <input type="submit" value="Create Account" />
          </form>
        </div>
      </main>

    );
  }
}

export default NewUserForm;
