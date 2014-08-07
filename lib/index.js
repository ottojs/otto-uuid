
'use strict';

// Modules
var uuid = require('node-uuid');

// Example Output: 93a9e9eee6c445f497cc49dc6b64853f
function generate_uuid_v4 () {
  return uuid.v4().replace(/-/g, '');
}

// Exports
module.exports = generate_uuid_v4;
