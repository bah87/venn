import React from 'react';

class BirthdayDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { month: 1, day: 1, year: 1 };
    this.months = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec"
    ];
    this.days = [...Array(32).keys()].slice(1);
    this.years = [...Array(2019).keys()].slice(1905).reverse();
    // this.updateMonth = this.updateMonth.bind(this);
    // this.updateDay = this.updateDay.bind(this);
    // this.updateYear = this.updateYear.bind(this);
    this.update = this.update.bind(this);
  }

  // updateMonth(event) {
  //   // debugger
  //   this.setState(
  //     { month: this.months.indexOf(event.target.value) },
  //     () => this.props.handleBirthday(this.state)
  //   );
  //
  // }

  update(field) {
    return event => {
      let value = event.target.value;
      value = field === "month" ? this.months.indexOf(event.target.value) : value;
      this.setState({ [field]: value });

      // switch (field) {
      //   case "month":
      //     this.setState({ [field]: this.months.indexOf(event.target.value) });
      //     break;
      //   default:
      //     this.setState({ [field]: event.target.value });
      // }
    };
  }

  // updateDay(event) {
  //   this.setState(
  //     { day: event.target.value },
  //     this.props.handleBirthday(this.state)
  //   );
  //   // this.props.handleBirthday(this.state);
  // }
  //
  // updateYear(event) {
  //   this.setState(
  //     { year: event.target.value },
  //     this.props.handleBirthday(this.state)
  //   );
  //   // this.props.handleBirthday(this.state);
  // }

  render() {
    const months = ["Month"].concat(this.months).map((month, idx) => {
      if (idx === 0) {
        return (<option key={idx} selected disabled>{ month }</option>);
      } else {
        return (<option key={idx}>{ month }</option>);
      }
    });

    const days = ["Day"].concat(this.days).map(
      (day, idx) => {
        if (idx === 0) {
          return (<option key={idx} selected disabled>{ day }</option>);
        } else {
          return (<option key={idx}>{ day }</option>);
        }
      });

    const years = ["Year"].concat(this.years).map(
      (year, idx) => {
        if (idx === 0) {
          return (<option key={idx} selected disabled>{ year }</option>);
        } else {
          return (<option key={idx}>{ year }</option>);
        }
      });

    return (
      <div className="birthday-signup">
        <p>Birthday</p>
        <select onChange={this.update("month")}>{ months }</select>
        <select onChange={this.update("day")}>{ days }</select>
        <select onChange={this.update("year")}>{ years }</select>
      </div>
    );
  }
}

export default BirthdayDropdown;
