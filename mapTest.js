const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }
  for (let i =0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(ar1, ar2) {
  const inspect = require('util').inspect;
  if (eqArrays(ar1,ar2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(ar1)} === ${inspect(ar2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(ar1)} !== ${inspect(ar2)}`);
  }
};

const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];


const lhMap = lighthouses.map(str => str.length)
console.log (lhMap);

assertArraysEqual(lhMap, ['G','P',"C",'D','C','P','K'])