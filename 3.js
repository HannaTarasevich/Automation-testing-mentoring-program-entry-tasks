let hapiness = {
  wellness: 5,
  property: 1,
  salary: 0,
  pros: 2,
  cons: 6,
};

function returnList() {
  let array = [];
  for (let el in hapiness) {
    array.push([el, hapiness[el]]);
  }

  let sortedArray = array.sort((a, b) => b[1] - a[1]);

  let sortedObject = Object.fromEntries(sortedArray);
  return String(Object.keys(sortedObject));
}
