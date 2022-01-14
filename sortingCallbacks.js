var myarray = [1, 10, 2, 5, 9];
sortedArray = myarray.sort(function (a, b) {
  return a - b;
});

console.log(sortedArray);

const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];

sortedArray2 = students.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return b.age - a.age;

});


console.log(sortedArray2);
