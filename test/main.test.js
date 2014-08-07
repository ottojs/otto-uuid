
'use strict';

// Modules
require('should');

// Subject
var module = require('../lib/index.js');

describe('Example Module', function () {

  describe('.method()', function () {

    it('should return true', function () {
      var result = module.method();
      result.should.equal(true);
    });

  });

});
