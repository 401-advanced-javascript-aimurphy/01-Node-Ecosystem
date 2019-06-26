'use strict';

const greet = require('../lib/greet.js');

describe('greet module', ()=>{
  it('greets a string', ()=>{
    expect(greet.ppl('Susan')).toBe('Bonjour, Susan!');
  });
});

describe('greet module', ()=>{
  it('greets a string', ()=>{
    expect(greet.ppl('Susan')).toBe('Bonjour, Susan!');
  });
});