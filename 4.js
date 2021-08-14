function addWithDelay(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    const array = [a, b, c];
    const sum = array.reduce((a, b) => a + b);
    console.log(sum);
    return new Promise((resolve) => setTimeout(() => resolve(sum), 1000));
  } else if (a < 0 || b < 0 || c < 0) {
    return Promise.reject('Error! Some parameter is a negative number!');
  }
}
