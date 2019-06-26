'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');
let name = faker.name.findName();

describe('greet module', ()=>{
  it('greets a string', ()=>{
    expect(greet.ppl(name)).toBe(`Bonjour, ${name}!`);
  });
});

describe('greet module', ()=>{
  it('doesnt greet not a string', ()=>{
    expect(greet.ppl(2)).toBe(null);
  });
});