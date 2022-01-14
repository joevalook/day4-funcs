const repeatNumbers = function(data) {
  a = ""
  for (let j = 0; j < data.length; j++) { 
    for (let i = 0;i < data[j][1]; i++) {
     a += String(data[j][0]);
    } if (j !== data.length -1){
    a += ", "
    }
  }
  return a
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));