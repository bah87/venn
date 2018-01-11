import React from 'react';
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

  handleSubmit(event) {
    const date = this.dateInput.state;
    let birthday;
    if (date.year < 1905) {
      birthday = null;
    } else {
      birthday = new Date(date.year, date.month, date.day);
    }
    event.preventDefault();
    this.setState(
      { birthday },
      () => this.props.signup(this.state)
    );
  }

  render() {
    let emailClass = "no-errors"; let emailMsg = "";
    let firstClass = "no-errors"; let firstMsg = "";
    let lastClass = "no-errors"; let lastMsg = "";
    let passwordClass = "no-errors"; let passwordMsg = "";
    let birthdayClass = "no-errors"; let birthdayMsg = "";
    let genderClass = "no-errors"; let genderMsg = "";
    this.props.errors.forEach(error => {
      let err = error.split(" ");
      switch (err[0]) {
        case "Email":
          emailClass = "email errors";
          emailMsg = err.slice(1).join(" ");
          break;
        case "First":
          firstClass = "first-name errors";
          firstMsg = err.slice(2).join(" ");
          break;
        case "Last":
          lastClass = "last-name errors";
          lastMsg = err.slice(2).join(" ");
          break;
        case "Password":
          passwordClass = "password errors";
          passwordMsg = err.slice(1).join(" ");
          break;
        case "Birthday":
          birthdayClass = "birthday errors";
          birthdayMsg = err.slice(1).join(" ");
          break;
        case "Gender":
          genderClass = "gender errors";
          genderMsg = err.slice(1).join(" ");
          break;
        default:

      }
    });
    return (
      <main className="landing-page-main">
        <div className="signup-container">
          <div className="signup-static-content">
            <h2>Connect with friends and the world around you on Venn.</h2>
            <ul>
              <li>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                <h4 id="landing-page-timeline">See photos and updates</h4>
                <p>from friends in News Feed.</p>
              </li>
              <li>
                <i className="fa fa-share" aria-hidden="true"></i>
                <h4 id="landing-page-feed">Share what's new</h4>
                <p>in your life on your Timeline.</p>
              </li>
              <li>
                <i className="fa fa-search" aria-hidden="true"></i>
                <h4 id="landing-page-search">Find more</h4>
                <p>of what you're looking for with Venn Search.</p>
              </li>
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

              <input
                id="signup-btn"
                type="submit"
                value="Create Account">
              </input>

              <div className="error-container">
                <div className={firstClass}>
                  { firstMsg }
                </div>
                <div className={lastClass}>
                  { lastMsg }
                </div>
                <div className={emailClass}>
                  { emailMsg }
                </div>
                <div className={passwordClass}>
                  { passwordMsg }
                </div>
                <div className={birthdayClass}>
                  { birthdayMsg }
                </div>
                <div className={genderClass}>
                  { genderMsg }
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

    );
  }
}

export default NewUserForm;
