function toSecondsFromDayStart() {
  let start = new Date().toLocaleTimeString([], { hour12: false }).split(':');
  return console.log(
    Number(start[0] * 60 * 60) + Number(start[1] * 60) + Number(start[2])
  );
}
