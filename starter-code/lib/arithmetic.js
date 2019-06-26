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
  return arr.reduce((acc,v)=>acc-v);
};

arithmetic.multiply = function(arr) {
  let product = 1;
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