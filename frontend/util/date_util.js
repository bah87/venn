export const DateFormat = date => {
  date = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit" };
  date = date.toLocaleTimeString("en-us", options).split(",");
  return `${date[0]}${date[1]} at${date[2]}`;
};
