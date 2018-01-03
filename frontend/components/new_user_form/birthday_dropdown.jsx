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
    this.updateMonth = this.updateMonth.bind(this);
    this.updateDay = this.updateDay.bind(this);
    this.updateYear = this.updateYear.bind(this);
  }

  updateMonth(event) {
    this.setState({ month: this.months.indexOf(event.target.value) });
    this.props.handleBirthday(this.state);
  }

  updateDay(event) {
    this.setState({ day: event.target.value });
    this.props.handleBirthday(this.state);
  }

  updateYear(event) {
    this.setState({ year: event.target.value });
    this.props.handleBirthday(this.state);
  }

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
        <select onChange={this.updateMonth}>{ months }</select>
        <select onChange={this.updateDay}>{ days }</select>
        <select onChange={this.updateYear}>{ years }</select>
      </div>
    );
  }
}

export default BirthdayDropdown;
