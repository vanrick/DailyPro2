var diagonalsSum = require('../DTA')
var assert = require('assert')
var test2x2 = [
  [1, 2],
  [3, 4]
]
var test3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
var test5x5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 0],
  [0, 9, 8, 7, 6],
  [5, 4, 3, 2, 1],
  [1, 2, 3, 4, 5]
]
describe('Diagonal Array Sum for a Matrix', function() {
  it('should return 0 for empty matrix', function() {
    assert.equal(0, diagonalsSum([]))
  })
  it('should return 2 for test 1x1 matrix', function() {
    assert.equal(2, diagonalsSum([1]))
  })
  it('should return 10 for test 2x2 matrix', function() {
    assert.equal(10, diagonalsSum(test2x2))
  })
  it('should return 30 for test 3x3 matrix', function() {
    assert.equal(30, diagonalsSum(test3x3))
  })
  it('should return 46 for test 5x5 matrix', function() {
    assert.equal(50, diagonalsSum(test5x5))
  })
})
