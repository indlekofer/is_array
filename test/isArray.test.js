import assert from 'assert';

import isArray from '../src/index';

describe('isArray', () => {
  it('array should be `true`', () => {
    //remove native implementation
    Array.isArray = undefined;
    assert.equal(true, isArray(["a", "b", "c", "d", "e"]));
  });
  it('object should be `false`', () => {
    Array.isArray = undefined;
    assert.equal(false, isArray({a:1, b:2, c:3}));
  });
  it('string should be `false`', () => {
    Array.isArray = undefined;
    assert.equal(false, isArray("abcde"));
  });
  it('null should be `false`', () => {
    Array.isArray = undefined;
    assert.equal(false, isArray(null));
  });
  it('undefined should be `false`', () => {
    Array.isArray = undefined;
    assert.equal(false, isArray(undefined));
  });
  it('array should use built-in implementation if available', () => {
    Array.isArray = (v) => {return 'native used'};
    assert.equal('native used', isArray(["a", "b", "c", "d", "e"]));
  });
});
