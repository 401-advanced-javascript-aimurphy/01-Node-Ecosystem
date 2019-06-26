'use strict';

const arithmetic = require('../lib/arithmetic.js');

const faker = require('faker');
let a = faker.random.number();
let b = faker.random.number();
let c = faker.random.number();

describe('arithmetic add module', ()=>{
  it('solves a addition problem', ()=>{
    expect(arithmetic.add([a,b,c])).toBe(a+b+c);
  });
});

describe('arithmetic subtract module', ()=>{
  it('solves a subtract problem', ()=>{
    expect(arithmetic.subtract([a,b,c])).toBe(a-b-c);
  });
});

describe('arithmetic multiply module', ()=>{
  it('solves a multiplication problem', ()=>{
    expect(arithmetic.multiply([a,b,c])).toBe(a*b*c);
  });
});

describe('arithmetic divide module', ()=>{
  it('solves a division problem', ()=>{
    expect(arithmetic.divide(a,b)).toBe(a/b);
  });
});
