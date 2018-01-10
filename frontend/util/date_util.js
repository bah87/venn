const moment = require('moment');

export const postDateFormat = date => {
  date = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit" };
  date = date.toLocaleTimeString("en-us", options).split(",");
  return `${date[0]}${date[1]} at${date[2]}`;
};

export const commentDateFormat = date => {
  // const diff = moment(date).fromNow().split(" ");
  // switch (diff[1]) {
  //   case "hour":
  //     return "1h";
  //   case "hours":
  //     return `${diff[0]}h`;
  //   case "minutes":
  //     return `${diff[0]}m`;
  //   case "seconds":
  //     return `${diff[0]}s`;
  //   default:
  //     return "";
  // }
  return moment(date).fromNow();
};
