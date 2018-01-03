import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BirthdayDropdown from './birthday_dropdown';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      gender: "",
      birthday: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    // this.handleBirthday = this.handleBirthday.bind(this);
  }

  update(field) {
    return event => {
      let value;
      if (field === "male") { value = "M"; field = "gender"; }
      else if (field === "female") { value = "F"; field = "gender"; }
      else { value = event.target.value; }
      this.setState({ [field]: value });
    };
  }

  // handleBirthday(birthday) {
  //   // debugger
  //   this.setState({ birthday: new Date(
  //     birthday.year,
  //     birthday.month,
  //     birthday.day
  //   )});
  // }

  handleSubmit(event) {
    const date = this.dateInput.state;
    event.preventDefault();
    this.setState(
      { birthday: new Date(
        date.year,
        date.month,
        date.day
      ) },
      () => this.props.signup(this.state)
    );
  }

  render() {
    return (
      <main className="landing-page-main">
        <div className="signup-container">
          <div className="signup-static-content">
            <h4>Connect with friends and the world around you on Venn.</h4>
            <ul>
              <li>See photos and updates from friends in News Feed.</li>
              <li>Share what's new in your life on your Timeline.</li>
              <li>Find more of what you're looking for with Venn Search.</li>
            </ul>
          </div>

          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit} className="signup-form">
              <h3>Sign Up</h3>
              <p>It's free and always will be.</p>

              <div className="first-and-last-name">
                <label>
                  <input
                    type="text"
                    placeholder="First name"
                    value={this.state.first_name}
                    onChange={this.update("first_name")}
                  />
                </label>

                <label>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={this.state.last_name}
                    onChange={this.update("last_name")}
                  />
                </label>
              </div>

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

              <BirthdayDropdown ref={(date) => { this.dateInput = date; }}/>

              <div className="gender-signup">
                <div className="female">
                  <input
                    type="radio"
                    value={this.state.gender}
                    name="gender"
                    onChange={this.update("female")}/>
                  <p>Female</p>
                </div>

                <div className="male">
                  <input
                    type="radio"
                    value={this.state.gender}
                    name="gender"
                    onChange={this.update("male")}/>
                  <p>Male</p>
                </div>
              </div>

              <input id="signup-btn" type="submit" value="Create Account" />
            </form>
          </div>
        </div>
      </main>

    );
  }
}

export default NewUserForm;
