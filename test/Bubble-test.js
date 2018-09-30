const { assert } = require('chai');
const Bubble = require('../lib/Bubble.js')

describe('Bubble', function () {
  
  it('should return true', function () {
    assert.equal(true, true);
  });

  it('should have a default set of numbers', function () {
    var bubble = new Bubble();
    assert.deepEqual(bubble.numberSet, [4, 5, 8, 3, 2]);
  });

  it('should have a default state of false for sorted', function () {
    var bubble = new Bubble();
    assert.deepEqual(bubble.sorted, false);
  });

  it('should have take a set of numbers as arguments', function () {
    var bubble = new Bubble([7, 3, 5]);
    assert.deepEqual(bubble.numberSet, [7, 3, 5]);
  });


  it('should sort two numbers from smallest to largest', function () {
    var bubble = new Bubble([7, 5]);
    assert.deepEqual(bubble.numberSet, [7, 5]);
    assert.deepEqual(bubble.sort(), [5, 7]);
  });

  it('should sort three numbers from smallest to largest', function () {
    var bubble = new Bubble([7, 5, 9]);
    assert.deepEqual(bubble.numberSet, [7, 5, 9]);
    assert.deepEqual(bubble.sort(), [5, 7, 9]);
  });
});