'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(arr) {
  let sum = 0;
  for (let v of arr) {
    if( typeof v !== "number") { return null; }
    sum += v;
  }
  return sum;
};

arithmetic.subtract = function (arr) {
  let difference = 0;
  for (let v of arr) {
    if( typeof v !== "number") { return null; }
    difference -= v;
  }
  return difference;
};

arithmetic.multiply = function(arr) {
  let product = 0;
  for (let v of arr) {
    if( typeof v !== "number") { return null; }
    product *= v;
  }
  return product;
};

arithmetic.divide = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" || b===0 ) { return null; }
  return a/b;
};