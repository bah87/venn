import React from 'react';

const BirthdayDropdown = ({ month, day, year }) => {
  const month_options = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ].map(month => {
    
  })

  const days = [...Array(32).keys()].slice(1)

  const years = [...Array(2019).keys()].slice(1905)

  return (
    <div>
      <select></select>
    </div>
  )
};

export default BirthdayDropdown;
