'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic add module', ()=>{
  it('solves a addition problem', ()=>{
    expect(arithmetic.add([1,2,3])).toBe(6);
  });
});

describe('arithmetic subtract module', ()=>{
  it('solves a subtract problem', ()=>{
    expect(arithmetic.subtract([3,2,1])).toBe(0);
  });
});

describe('arithmetic multiply module', ()=>{
  it('solves a multiplication problem', ()=>{
    expect(arithmetic.multiply([3,2,1])).toBe(6);
  });
});

describe('arithmetic divide module', ()=>{
  it('solves a division problem', ()=>{
    expect(arithmetic.divide(4,2)).toBe(2);
  });
});
