import assert from 'assert';

import isArray from '../lib/index';

describe('isArray', () => {
  it('array should be `true`', () => {
    assert.equal(true, isArray(["a", "b", "c", "d", "e"]));
  });
  it('object should be `false`', () => {
    assert.equal(false, isArray({a:1, b:2, c:3}));
  });
  it('string should be `false`', () => {
    assert.equal(false, isArray("abcde"));
  });
  it('null should be `false`', () => {
    assert.equal(false, isArray(null));
  });
  it('undefined should be `false`', () => {
    assert.equal(false, isArray(undefined));
  });
});
