var garland = require('../solutions/yourfile.js');
var assert = require('assert');

describe('Garland Word', function() {

  it('should calaculate the number of letters at the end of a word that are reapeated from the beginning', function() {
    assert(garland('programmer') === 0);
    assert(garland('ceramic') === 1);
    assert(garland('onion') === 2);
    assert(garland('alfalfa') === 4);
    assert(garland('hotshots') === 4);
    assert(garland('abracadabra') === 4);
    assert(garland('couscous') === 4);
  });

});
