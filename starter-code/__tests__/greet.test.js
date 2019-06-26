'use strict';

const greet = require('../lib/greet.js');

describe('greet module', ()=>{
  it('greets a string', ()=>{
    expect(greet.ppl('Susan')).toBe('Bonjour, Susan!');
  });
});

describe('greet module', ()=>{
  it('doesnt greet not a string', ()=>{
    expect(greet.ppl(2)).toBe(null);
  });
});