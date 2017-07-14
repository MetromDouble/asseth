const log = require('../lib/log.js');
const expect = require('chai').expect;

describe('log', () => {
  it('should export a function', () => {
    expect(log).to.be.a('function');
  });
});
