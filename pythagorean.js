const pythagorean = function(input){
  return input.map(val => Math.sqrt(val.x**2 + val.y**2))
}





const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];


console.log(pythagorean(input)[0] === 5);
console.log(pythagorean(input)[1] === 13);
console.log(pythagorean(input)[2] === 17);