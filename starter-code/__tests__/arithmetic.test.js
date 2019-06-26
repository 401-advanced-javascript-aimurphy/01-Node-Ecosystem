'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic add module', ()=>{
  it('solves a math problem', ()=>{
    expect(arithmetic.add([1,2,3])).toBe(6);
  });
});

