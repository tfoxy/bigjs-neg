var expect = require('chai').expect;
var Big = require('big.js');
require('..')(Big);

describe('bigjs-neg', function() {
  'use strict';

  it('adds the neg method to a Big instance', function () {
    var two = new Big(2);
    expect(two).to.have.property('neg').to.be.a('function');
  });

  it('negates a positive number when neg method is called', function () {
    var two = new Big(2);
    expect(two.neg()).to.deep.equal(new Big(-2));
  });

  it('negates a negative number when neg method is called', function () {
    var minusThree = new Big(-3);
    expect(minusThree.neg()).to.deep.equal(new Big(3));
  });
});
