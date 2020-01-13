import { assert } from 'chai';
import * as sinon from 'sinon';
import 'mocha';

describe('test', () => {
  it('test', () => {
    const fake = sinon.fake.returns(0);
    assert.equal(0, fake());
  });
});
