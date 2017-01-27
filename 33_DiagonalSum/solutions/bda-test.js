var solution = require('./bda');
var expect = require('chai').expect;

describe('Diagonal Sum', function() {

  it('should return 30 for the given 2d matrix', function() {
    expect(solution([
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
    ])).to.equal(30);
  });

  it('should return 60 for the given 2d matrix', function() {
    expect(solution([
      [ 1, 2, 3, 4, 5, 6 ],
      [ 4, 5, 6, 7, 8, 9 ],
      [ 7, 8, 9, 1, 2, 3 ],
      [ 1, 2, 3, 4, 5, 6 ],
      [ 4, 5, 6, 7, 8, 9 ],
      [ 7, 8, 9, 1, 2, 3 ]
    ])).to.equal(60);
  });

  it('should return undefined if input is not a 2d matrix', function() {
    expect(solution()).to.equal(undefined);
    expect(solution([1])).to.equal(undefined);
    expect(solution([[2, 3, 4], 'rabbit', [7, 8, 9]])).to.equal(undefined);
    expect(solution([[2, 3, 4], [5, 6], [7, 8, 9]])).to.equal(undefined);
  });
});
