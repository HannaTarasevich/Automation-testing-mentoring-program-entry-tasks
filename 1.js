function Random() {
  var array = [];
  const max = Number.MAX_SAFE_INTEGER;
  const min = Number.MIN_SAFE_INTEGER;
  while (array.length < 10) {
    array.push(Math.random() * (max - min + 1) + min);
  }
  console.log(array.sort((a, b) => b - a));
  return console.log(array[0] + array[1] + array[2]);
}
