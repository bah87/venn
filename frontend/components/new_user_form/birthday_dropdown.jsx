import React from 'react';

class BirthdayDropdown extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const months = [
      "Month","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
    ].map((month, idx) => {
      if (idx === 0) {
        return (<option key={idx} selected disabled>{ month }</option>);
      } else {
        return (<option key={idx}>{ month }</option>);
      }
    });

    const days = ["Day"].concat([...Array(32).keys()].slice(1)).map(
      (day, idx) => {
        if (idx === 0) {
          return (<option key={idx} selected disabled>{ day }</option>);
        } else {
          return (<option key={idx}>{ day }</option>);
        }
      });

    const years = ["Year"].concat([...Array(2019).keys()].slice(1905)).map(
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
        <select>{ months }</select>
        <select>{ days }</select>
        <select>{ years }</select>
      </div>
    );
  }
}

export default BirthdayDropdown;
