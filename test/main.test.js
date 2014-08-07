
'use strict';

// Modules
require('should');

// Subject
var subject = require('../lib/index.js');

describe('UUID Module', function () {

  it('should return a 32-character string', function () {
    var uuid = subject();
    uuid.should.be.type('string').with.length(32);
  });

  it('should return a string with only hexadecimal characters', function () {
    var uuid = subject();
    uuid.should.match(/[0-9][a-f]/);
  });

});
