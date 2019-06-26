'use strict';

// The greet function should have a single parameter (arity of one) that should expect a string as it’s input

let greet = module.exports = {};

// The greet function should return the input name, concatenated with “hello “: eg. (“hello susan”)

greet.ppl = function(str){
  if(typeof str !== 'string'){return null;}
  return `Bonjour, ${str}!`;
};
// The greet function should return null if the input is not a string